import React from 'react';
import { format } from 'date-fns';
import { TaskInstance } from './RecurringTaskUtils';
import TaskStatus from './TaskStatus';
import { Users } from 'lucide-react';

interface TeamViewProps {
  tasks: TaskInstance[];
}

const TeamView: React.FC<TeamViewProps> = ({ tasks }) => {
  // Group tasks by team
  const tasksByTeam = tasks.reduce((acc, task) => {
    if (!acc[task.teamId]) {
      acc[task.teamId] = [];
    }
    acc[task.teamId].push(task);
    return acc;
  }, {} as Record<string, TaskInstance[]>);

  return (
    <div className="w-[390px] mx-auto bg-white min-h-screen">
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-gray-900" />
          <h2 className="text-lg font-semibold text-gray-900">Team Tasks</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(tasksByTeam).map(([teamId, teamTasks]) => (
            <div key={teamId} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-gray-900">
                  Team {teamId}
                </h3>
                <span className="text-sm text-gray-500">
                  {teamTasks.length} task{teamTasks.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-2">
                {teamTasks.map(task => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <TaskStatus
                        task={task}
                        size="sm"
                        variant="pill"
                        showRecurringIcon={true}
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {task.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          Due {format(task.dueDate, 'MMM dd, yyyy')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamView; 