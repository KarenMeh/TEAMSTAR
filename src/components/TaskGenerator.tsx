import React, { useEffect, useState } from 'react';
import { 
  RecurringTaskData, 
  TaskInstance, 
  checkAndGenerateInstances,
  GenerationSettings,
  DEFAULT_GENERATION_SETTINGS
} from './RecurringTaskUtils';
import { Clock, RefreshCw, Settings } from 'lucide-react';
import AdminSettings from './AdminSettings';

interface TaskGeneratorProps {
  recurringTasks: Record<string, RecurringTaskData>;
  existingInstances: TaskInstance[];
  onNewInstances: (instances: TaskInstance[]) => void;
  settings?: GenerationSettings;
  isAdmin?: boolean;
  onSettingsChange?: (settings: GenerationSettings) => void;
}

const TaskGenerator: React.FC<TaskGeneratorProps> = ({
  recurringTasks,
  existingInstances,
  onNewInstances,
  settings = DEFAULT_GENERATION_SETTINGS,
  isAdmin = false,
  onSettingsChange
}) => {
  const [lastGenerated, setLastGenerated] = useState<Date | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const generateNewInstances = () => {
    setIsGenerating(true);
    try {
      const newInstances = checkAndGenerateInstances(
        recurringTasks,
        existingInstances,
        settings
      );
      onNewInstances(newInstances);
      setLastGenerated(new Date());
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const checkAndGenerate = () => {
      const now = new Date();
      const shouldGenerate = !lastGenerated || 
        now.getTime() - lastGenerated.getTime() > 24 * 60 * 60 * 1000;
      if (shouldGenerate) {
        generateNewInstances();
      }
    };

    checkAndGenerate();
    const interval = setInterval(checkAndGenerate, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [lastGenerated]);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-900" />
            <h2 className="text-lg font-medium text-gray-900">Task Generator</h2>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                title="Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={generateNewInstances}
              disabled={isGenerating}
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
                ${isGenerating 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
                }
                transition-colors
              `}
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'Generating...' : 'Generate Now'}
            </button>
          </div>
        </div>
      </div>

      {/* Admin Settings */}
      {isAdmin && showSettings && (
        <div className="p-4 border-b border-gray-100">
          <AdminSettings
            settings={settings}
            onSettingsChange={onSettingsChange || (() => {})}
            isAdmin={isAdmin}
          />
        </div>
      )}

      {/* Status Cards */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Last Generated</p>
            <p className="text-sm font-medium text-gray-900 mt-1">
              {lastGenerated 
                ? new Date(lastGenerated).toLocaleString() 
                : 'Never'}
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Horizon</p>
            <p className="text-sm font-medium text-gray-900 mt-1">
              {settings.horizonDays} days
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Active Tasks</p>
            <p className="text-sm font-medium text-gray-900 mt-1">
              {Object.keys(recurringTasks).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskGenerator; 