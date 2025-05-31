import React from 'react';
import { TaskInstance, getTaskStatusColor, formatDate, isTaskOverdue, getTaskStatusText, getRecurrenceDescription } from './RecurringTaskUtils';
import { Repeat, Calendar, Users, Clock } from 'lucide-react';

interface RecurringTaskListProps {
  tasks: TaskInstance[];
  onTaskStatusChange: (taskId: string, newStatus: TaskInstance['status']) => void;
  recurringTasks?: { [key: string]: any }; // Map of recurring task IDs to their full data
}

const RecurringTaskList: React.FC<RecurringTaskListProps> = ({ 
  tasks, 
  onTaskStatusChange,
  recurringTasks = {}
}) => {
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="space-y-4">
        {tasks.map((task) => {
          const isOverdue = isTaskOverdue(task);
          const statusColor = getTaskStatusColor(task.status, isOverdue);
          const statusText = getTaskStatusText(task);
          const recurringTask = recurringTasks[task.recurringTaskId];
          const recurrenceDescription = recurringTask ? getRecurrenceDescription(recurringTask) : '';

          return (
            <div
              key={task.id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
                    {task.isRecurring && (
                      <span title={`Recurring Task: ${recurrenceDescription}`} className="text-blue-600">
                        <Repeat className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Due: {formatDate(task.dueDate)}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>Team: {task.teamId}</span>
                    </div>

                    {task.isRecurring && recurringTask && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{recurrenceDescription}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`w-3 h-3 rounded-full bg-${statusColor}-500`}
                    title={statusText}
                  />
                  <select
                    value={task.status}
                    onChange={(e) => onTaskStatusChange(task.id, e.target.value as TaskInstance['status'])}
                    className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="overdue">Overdue</option>
                  </select>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecurringTaskList; 