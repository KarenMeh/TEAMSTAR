import React from 'react';
import { TaskInstance, isTaskOverdue } from './RecurringTaskUtils';
import { Repeat } from 'lucide-react';

interface TaskStatusProps {
  task: TaskInstance;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dot' | 'pill';
  showRecurringIcon?: boolean;
}

const TaskStatus: React.FC<TaskStatusProps> = ({
  task,
  size = 'md',
  variant = 'pill',
  showRecurringIcon = false
}) => {
  const isOverdue = isTaskOverdue(task);
  
  const getStatusColor = () => {
    if (task.status === 'completed' && isOverdue) return 'bg-orange-500';
    if (task.status === 'overdue' || (task.status === 'pending' && isOverdue)) return 'bg-red-500';
    if (task.status === 'completed') return 'bg-green-500';
    return 'bg-blue-500';
  };

  const getStatusText = () => {
    if (task.status === 'completed' && isOverdue) return 'Completed (Overdue)';
    if (task.status === 'overdue' || (task.status === 'pending' && isOverdue)) return 'Overdue';
    if (task.status === 'completed') return 'Completed';
    return 'Upcoming';
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-2 py-0.5';
      case 'lg':
        return 'text-sm px-3 py-1';
      default:
        return 'text-sm px-2.5 py-0.5';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'dot':
        return 'flex items-center gap-1.5';
      case 'pill':
      default:
        return 'inline-flex items-center gap-1.5 rounded-full';
    }
  };

  return (
    <div className={`${getVariantClasses()} ${getSizeClasses()} ${getStatusColor()} text-white font-medium`}>
      {variant === 'dot' && (
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
      )}
      <span>{getStatusText()}</span>
      {showRecurringIcon && task.isRecurring && (
        <Repeat className="w-3 h-3" />
      )}
    </div>
  );
};

export default TaskStatus; 