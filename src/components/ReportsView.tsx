import React from 'react';
import { TaskInstance, isTaskOverdue } from './RecurringTaskUtils';
import { BarChart, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

interface ReportsViewProps {
  tasks: TaskInstance[];
}

const ReportsView: React.FC<ReportsViewProps> = ({ tasks }) => {
  // Calculate statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const overdueTasks = tasks.filter(task => isTaskOverdue(task)).length;
  const completedOverdueTasks = tasks.filter(task => task.status === 'completed' && isTaskOverdue(task)).length;
  const upcomingTasks = tasks.filter(task => task.status === 'pending' && !isTaskOverdue(task)).length;

  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const overdueRate = totalTasks > 0 ? (overdueTasks / totalTasks) * 100 : 0;

  return (
    <div className="w-[390px] mx-auto bg-white min-h-screen">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Task Reports</h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-medium text-blue-900">Total Tasks</h3>
            </div>
            <p className="text-2xl font-bold text-blue-900">{totalTasks}</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-sm font-medium text-green-900">Completed</h3>
            </div>
            <p className="text-2xl font-bold text-green-900">{completedTasks}</p>
            <p className="text-sm text-green-700">{completionRate.toFixed(1)}% completion rate</p>
          </div>

          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h3 className="text-sm font-medium text-red-900">Overdue</h3>
            </div>
            <p className="text-2xl font-bold text-red-900">{overdueTasks}</p>
            <p className="text-sm text-red-700">{overdueRate.toFixed(1)}% overdue rate</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-orange-600" />
              <h3 className="text-sm font-medium text-orange-900">Completed Overdue</h3>
            </div>
            <p className="text-2xl font-bold text-orange-900">{completedOverdueTasks}</p>
          </div>
        </div>

        {/* Task Status Breakdown */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900" id="task-status-heading">Field Service Task Status Overview</h3>
          
          <div className="space-y-4" role="region" aria-labelledby="task-status-heading">
            {/* Upcoming Tasks */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700">Upcoming Field Service Tasks</h4>
                <span className="text-sm text-gray-500" aria-label={`${upcomingTasks} upcoming tasks`}>{upcomingTasks} tasks</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={upcomingTasks} aria-valuemin={0} aria-valuemax={totalTasks}>
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${(upcomingTasks / totalTasks) * 100}%` }}
                  aria-label={`${Math.round((upcomingTasks / totalTasks) * 100)}% of tasks are upcoming`}
                />
              </div>
            </div>

            {/* Completed Tasks */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700">Completed Field Service Tasks</h4>
                <span className="text-sm text-gray-500" aria-label={`${completedTasks} completed tasks`}>{completedTasks} tasks</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={completedTasks} aria-valuemin={0} aria-valuemax={totalTasks}>
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
                  aria-label={`${Math.round((completedTasks / totalTasks) * 100)}% of tasks are completed`}
                />
              </div>
            </div>

            {/* Overdue Tasks */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700">Overdue Field Service Tasks</h4>
                <span className="text-sm text-gray-500" aria-label={`${overdueTasks} overdue tasks`}>{overdueTasks} tasks</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={overdueTasks} aria-valuemin={0} aria-valuemax={totalTasks}>
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${(overdueTasks / totalTasks) * 100}%` }}
                  aria-label={`${Math.round((overdueTasks / totalTasks) * 100)}% of tasks are overdue`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsView; 