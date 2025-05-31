import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { RecurringTaskData, generateTaskInstances, generateTaskId, GenerationSettings, DEFAULT_GENERATION_SETTINGS } from './RecurringTaskUtils';
import { Repeat, Calendar, Clock, Users, HelpCircle, ChevronDown } from 'lucide-react';

interface RecurringTaskProps {
  onSave: (task: RecurringTaskData) => void;
  generationHorizon?: number;
  initialTask?: Partial<RecurringTaskData>;
}

const RecurringTask: React.FC<RecurringTaskProps> = ({ 
  onSave, 
  generationHorizon = 30,
  initialTask 
}) => {
  const [task, setTask] = useState<RecurringTaskData>({
    id: initialTask?.id || generateTaskId(),
    title: initialTask?.title || '',
    startDate: initialTask?.startDate || new Date(),
    frequency: initialTask?.frequency || 'daily',
    endType: initialTask?.endType || 'never',
    activeWeekdays: initialTask?.activeWeekdays || [true, true, true, true, true, false, false],
    teamId: initialTask?.teamId || '',
    createdAt: initialTask?.createdAt || new Date(),
    updatedAt: new Date(),
    ...(initialTask?.customDays && { customDays: initialTask.customDays }),
    ...(initialTask?.endDate && { endDate: initialTask.endDate }),
    ...(initialTask?.endTimes && { endTimes: initialTask.endTimes }),
  });

  const [showHelp, setShowHelp] = useState<string | null>(null);

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Auto-save when task changes
  useEffect(() => {
    if (task.title && task.teamId) {
      const settings: GenerationSettings = {
        ...DEFAULT_GENERATION_SETTINGS,
        horizonDays: generationHorizon
      };
      generateTaskInstances(task, settings);
      onSave(task);
    }
  }, [task, onSave, generationHorizon]);

  const handleInputChange = (field: keyof RecurringTaskData, value: any) => {
    setTask(prev => ({
      ...prev,
      [field]: value,
      updatedAt: new Date()
    }));
  };

  const toggleHelp = (field: string) => {
    setShowHelp(showHelp === field ? null : field);
  };

  return (
    <div className="w-[390px] mx-auto bg-white min-h-screen">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Repeat className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Create Recurring Task</h2>
        </div>
        
        {/* Title */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Task Title
            <button
              onClick={() => toggleHelp('title')}
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <HelpCircle className="w-4 h-4 inline" />
            </button>
          </label>
          {showHelp === 'title' && (
            <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
              Enter a clear, descriptive title for your recurring task
            </div>
          )}
          <input
            type="text"
            value={task.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter task title"
            required
          />
        </div>

        {/* Start Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
            <button
              onClick={() => toggleHelp('startDate')}
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <HelpCircle className="w-4 h-4 inline" />
            </button>
          </label>
          {showHelp === 'startDate' && (
            <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
              When should this recurring task begin?
            </div>
          )}
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={format(task.startDate, 'yyyy-MM-dd')}
              onChange={(e) => handleInputChange('startDate', new Date(e.target.value))}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Frequency */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Frequency
            <button
              onClick={() => toggleHelp('frequency')}
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <HelpCircle className="w-4 h-4 inline" />
            </button>
          </label>
          {showHelp === 'frequency' && (
            <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
              How often should this task repeat?
            </div>
          )}
          <div className="relative">
            <select
              value={task.frequency}
              onChange={(e) => handleInputChange('frequency', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="custom">Custom (Every X days)</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Custom Days */}
        {task.frequency === 'custom' && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Repeat every X days
              <button
                onClick={() => toggleHelp('customDays')}
                className="ml-1 text-gray-400 hover:text-gray-600"
              >
                <HelpCircle className="w-4 h-4 inline" />
              </button>
            </label>
            {showHelp === 'customDays' && (
              <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
                Enter the number of days between each occurrence
              </div>
            )}
            <input
              type="number"
              min="1"
              value={task.customDays || 1}
              onChange={(e) => handleInputChange('customDays', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        )}

        {/* End Type */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Type
            <button
              onClick={() => toggleHelp('endType')}
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <HelpCircle className="w-4 h-4 inline" />
            </button>
          </label>
          {showHelp === 'endType' && (
            <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
              When should this recurring task stop?
            </div>
          )}
          <div className="relative">
            <select
              value={task.endType}
              onChange={(e) => handleInputChange('endType', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all"
            >
              <option value="never">No End</option>
              <option value="date">End Date</option>
              <option value="times">After X Times</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* End Date */}
        {task.endType === 'date' && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
              <button
                onClick={() => toggleHelp('endDate')}
                className="ml-1 text-gray-400 hover:text-gray-600"
              >
                <HelpCircle className="w-4 h-4 inline" />
              </button>
            </label>
            {showHelp === 'endDate' && (
              <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
                The last date this task should occur
              </div>
            )}
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={task.endDate ? format(task.endDate, 'yyyy-MM-dd') : ''}
                onChange={(e) => handleInputChange('endDate', new Date(e.target.value))}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        )}

        {/* End Times */}
        {task.endType === 'times' && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Times
              <button
                onClick={() => toggleHelp('endTimes')}
                className="ml-1 text-gray-400 hover:text-gray-600"
              >
                <HelpCircle className="w-4 h-4 inline" />
              </button>
            </label>
            {showHelp === 'endTimes' && (
              <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
                How many times should this task repeat?
              </div>
            )}
            <div className="relative">
              <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="number"
                min="1"
                value={task.endTimes || 1}
                onChange={(e) => handleInputChange('endTimes', parseInt(e.target.value))}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        )}

        {/* Team Assignment */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Team Assignment
            <button
              onClick={() => toggleHelp('teamId')}
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <HelpCircle className="w-4 h-4 inline" />
            </button>
          </label>
          {showHelp === 'teamId' && (
            <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
              Which team should be responsible for this task?
            </div>
          )}
          <div className="relative">
            <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={task.teamId}
              onChange={(e) => handleInputChange('teamId', e.target.value)}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter team ID"
              required
            />
          </div>
        </div>

        {/* Active Weekdays */}
        {task.frequency === 'weekly' && (
          <div className="relative mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Active Weekdays
              <button
                onClick={() => toggleHelp('weekdays')}
                className="ml-1 text-gray-400 hover:text-gray-600"
              >
                <HelpCircle className="w-4 h-4 inline" />
              </button>
            </label>
            {showHelp === 'weekdays' && (
              <div className="absolute z-10 bg-blue-50 text-blue-800 p-2 rounded-md text-sm mb-2">
                Select which days of the week this task should occur
              </div>
            )}
            <div className="grid grid-cols-7 gap-2">
              {weekdays.map((day, index) => (
                <label key={day} className="flex flex-col items-center">
                  <input
                    type="checkbox"
                    checked={task.activeWeekdays[index]}
                    onChange={(e) => {
                      const newWeekdays = [...task.activeWeekdays];
                      newWeekdays[index] = e.target.checked;
                      handleInputChange('activeWeekdays', newWeekdays);
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all"
                  />
                  <span className="text-xs font-medium text-gray-700 mt-1">{day}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Tasks will only be generated on selected days within the {generationHorizon}-day horizon
            </p>
          </div>
        )}

        {/* Preview Box */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Task Preview</h3>
          <p className="text-sm text-gray-600">
            {task.title ? (
              <>
                <span className="font-medium">{task.title}</span> will be created{' '}
                {task.frequency === 'daily' && 'every day'}
                {task.frequency === 'weekly' && 'every week on selected days'}
                {task.frequency === 'monthly' && 'every month'}
                {task.frequency === 'yearly' && 'every year'}
                {task.frequency === 'custom' && `every ${task.customDays} days`}
                {task.endType === 'date' && task.endDate && ` until ${format(task.endDate, 'MMM dd, yyyy')}`}
                {task.endType === 'times' && task.endTimes && ` for ${task.endTimes} times`}
              </>
            ) : (
              'Enter task details to see preview'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecurringTask; 