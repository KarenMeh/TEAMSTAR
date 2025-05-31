import { addDays, addWeeks, addMonths, addYears, format, isBefore } from 'date-fns';

export interface RecurringTaskData {
  id: string;
  title: string;
  startDate: Date;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';
  customDays?: number;
  endType: 'date' | 'times' | 'never';
  endDate?: Date;
  endTimes?: number;
  activeWeekdays: boolean[];
  teamId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskInstance {
  id: string;
  title: string;
  dueDate: Date;
  status: 'pending' | 'completed' | 'overdue';
  teamId: string;
  isRecurring: boolean;
  recurringTaskId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GenerationSettings {
  horizonDays: number;
  minHorizonDays: number;
  maxHorizonDays: number;
}

export const DEFAULT_GENERATION_SETTINGS: GenerationSettings = {
  horizonDays: 30,
  minHorizonDays: 7,
  maxHorizonDays: 365
};

export function generateTaskInstances(
  recurringTask: RecurringTaskData,
  settings: GenerationSettings = DEFAULT_GENERATION_SETTINGS,
  existingInstances: TaskInstance[] = []
): TaskInstance[] {
  const instances: TaskInstance[] = [];
  let currentDate = new Date(recurringTask.startDate);
  const endDate = recurringTask.endType === 'date' ? recurringTask.endDate : undefined;
  let timesGenerated = 0;
  const horizonEndDate = addDays(new Date(), settings.horizonDays);

  // Skip dates that already have instances
  const existingDates = new Set(
    existingInstances.map(instance => format(instance.dueDate, 'yyyy-MM-dd'))
  );

  while (
    currentDate <= horizonEndDate &&
    (recurringTask.endType === 'never' ||
      (recurringTask.endType === 'date' && currentDate <= endDate!) ||
      (recurringTask.endType === 'times' && timesGenerated < recurringTask.endTimes!))
  ) {
    if (
      shouldGenerateInstance(currentDate, recurringTask) &&
      !existingDates.has(format(currentDate, 'yyyy-MM-dd'))
    ) {
      instances.push({
        id: generateTaskId(),
        title: recurringTask.title,
        dueDate: new Date(currentDate),
        status: 'pending',
        teamId: recurringTask.teamId,
        isRecurring: true,
        recurringTaskId: recurringTask.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      timesGenerated++;
    }

    currentDate = getNextDate(currentDate, recurringTask);
  }

  return instances;
}

/**
 * Checks and generates new task instances to maintain the rolling horizon.
 * This function should be called by a daily cronjob to ensure future tasks are always generated.
 * 
 * @param recurringTasks - All recurring task definitions
 * @param existingInstances - Current task instances
 * @param settings - Generation settings including horizon days
 * @returns New task instances that need to be created
 */
export function checkAndGenerateInstances(
  recurringTasks: Record<string, RecurringTaskData>,
  existingInstances: TaskInstance[],
  settings: GenerationSettings = DEFAULT_GENERATION_SETTINGS
): TaskInstance[] {
  const newInstances: TaskInstance[] = [];
  const now = new Date();
  const horizonEndDate = addDays(now, settings.horizonDays);

  // Check each recurring task
  Object.values(recurringTasks).forEach(task => {
    // Find the latest instance for this recurring task
    const latestInstance = existingInstances
      .filter(instance => instance.recurringTaskId === task.id)
      .sort((a, b) => b.dueDate.getTime() - a.dueDate.getTime())[0];

    // If no instances exist or the latest instance is before the horizon end date
    if (!latestInstance || latestInstance.dueDate < horizonEndDate) {
      const newTaskInstances = generateTaskInstances(
        task,
        settings,
        existingInstances
      );
      newInstances.push(...newTaskInstances);
    }
  });

  return newInstances;
}

function shouldGenerateInstance(date: Date, task: RecurringTaskData): boolean {
  if (task.frequency === 'weekly') {
    const dayOfWeek = date.getDay();
    return task.activeWeekdays[dayOfWeek];
  }
  return true;
}

function getNextDate(currentDate: Date, task: RecurringTaskData): Date {
  let nextDate: Date;
  
  switch (task.frequency) {
    case 'daily':
      nextDate = addDays(currentDate, 1);
      break;
    case 'weekly':
      nextDate = addWeeks(currentDate, 1);
      break;
    case 'monthly':
      nextDate = addMonths(currentDate, 1);
      break;
    case 'yearly':
      nextDate = addYears(currentDate, 1);
      break;
    case 'custom':
      nextDate = addDays(currentDate, task.customDays || 1);
      break;
    default:
      nextDate = addDays(currentDate, 1);
  }

  // For weekly tasks, ensure the next date is on an active weekday
  if (task.frequency === 'weekly') {
    while (!shouldGenerateInstance(nextDate, task)) {
      nextDate = addDays(nextDate, 1);
    }
  }

  return nextDate;
}

export function generateTaskId(): string {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function getTaskStatusColor(status: TaskInstance['status'], isOverdue: boolean): string {
  if (status === 'completed' && isOverdue) return 'orange';
  if (status === 'overdue') return 'red';
  if (status === 'completed') return 'green';
  return 'blue';
}

export function formatDate(date: Date): string {
  return format(date, 'MMM dd, yyyy');
}

export function isTaskOverdue(task: TaskInstance): boolean {
  return task.status !== 'completed' && isBefore(task.dueDate, new Date());
}

export function getTaskStatusText(task: TaskInstance): string {
  if (task.status === 'completed' && isTaskOverdue(task)) {
    return 'Completed (Overdue)';
  }
  if (task.status === 'overdue') {
    return 'Overdue';
  }
  if (task.status === 'completed') {
    return 'Completed';
  }
  return 'Upcoming';
}

export function getRecurrenceDescription(task: RecurringTaskData): string {
  switch (task.frequency) {
    case 'daily':
      return 'Daily';
    case 'weekly':
      const activeDays = task.activeWeekdays
        .map((active, index) => active ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index] : null)
        .filter(Boolean)
        .join(', ');
      return `Weekly on ${activeDays}`;
    case 'monthly':
      return 'Monthly';
    case 'yearly':
      return 'Yearly';
    case 'custom':
      return `Every ${task.customDays} days`;
    default:
      return 'Unknown';
  }
}