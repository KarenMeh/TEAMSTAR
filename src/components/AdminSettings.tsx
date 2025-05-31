import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { GenerationSettings, DEFAULT_GENERATION_SETTINGS } from './RecurringTaskUtils';

interface AdminSettingsProps {
  settings: GenerationSettings;
  onSettingsChange: (settings: GenerationSettings) => void;
  isAdmin: boolean;
}

const AdminSettings: React.FC<AdminSettingsProps> = ({
  settings = DEFAULT_GENERATION_SETTINGS,
  onSettingsChange,
  isAdmin
}) => {
  const [horizonDays, setHorizonDays] = useState(settings.horizonDays);

  const handleHorizonChange = (value: number) => {
    if (value >= settings.minHorizonDays && value <= settings.maxHorizonDays) {
      setHorizonDays(value);
      onSettingsChange({ ...settings, horizonDays: value });
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
        <Settings className="w-5 h-5 text-gray-900" />
        <h2 className="text-lg font-medium text-gray-900">Admin Settings</h2>
      </div>

      {/* Generation Horizon Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Generation Horizon
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={settings.minHorizonDays}
              max={settings.maxHorizonDays}
              value={horizonDays}
              onChange={(e) => handleHorizonChange(Number(e.target.value))}
              className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
            <div className="w-20">
              <input
                type="number"
                min={settings.minHorizonDays}
                max={settings.maxHorizonDays}
                value={horizonDays}
                onChange={(e) => handleHorizonChange(Number(e.target.value))}
                className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">days</span>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Min: {settings.minHorizonDays} days</span>
            <span>Default: 30 days</span>
            <span>Max: {settings.maxHorizonDays} days</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Controls how far ahead tasks are generated. Longer horizon = better planning, shorter = less system load.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings; 