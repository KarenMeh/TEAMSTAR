import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, subMonths } from 'date-fns';
import { TaskInstance } from './RecurringTaskUtils';
import TaskStatus from './TaskStatus';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarViewProps {
  tasks: TaskInstance[];
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({
  tasks,
  currentDate,
  onDateChange
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getTasksForDate = (date: Date) => {
    return tasks.filter(task => 
      format(task.dueDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <div className="w-[390px] mx-auto bg-white min-h-screen">
      <div className="p-4 space-y-4">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-900" />
            <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onDateChange(subMonths(currentDate, 1))}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-900" />
            </button>
            <span className="text-sm font-medium text-gray-900 px-2">
              {format(currentDate, 'MMMM yyyy')}
            </span>
            <button
              onClick={() => onDateChange(addMonths(currentDate, 1))}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-0.5">
          {/* Weekday Headers */}
          {weekdays.map(day => (
            <div
              key={day}
              className="text-center text-xs font-medium text-gray-500 py-1.5"
            >
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {days.map(day => {
            const dayTasks = getTasksForDate(day);
            const isCurrentDay = isToday(day);
            const isCurrentMonth = isSameMonth(day, currentDate);
            
            return (
              <div
                key={day.toString()}
                className={`
                  min-h-[70px] p-1.5 border border-gray-100 rounded-lg
                  ${!isCurrentMonth ? 'bg-gray-50/50' : 'bg-white'}
                  ${isCurrentDay ? 'ring-1 ring-gray-900' : ''}
                  hover:bg-gray-50 transition-colors
                `}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`
                      text-xs font-medium
                      ${isCurrentDay 
                        ? 'bg-gray-900 text-white rounded-full w-5 h-5 flex items-center justify-center' 
                        : isCurrentMonth 
                          ? 'text-gray-900' 
                          : 'text-gray-400'
                      }
                    `}
                  >
                    {format(day, 'd')}
                  </span>
                  {dayTasks.length > 0 && (
                    <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                      {dayTasks.length}
                    </span>
                  )}
                </div>
                <div className="space-y-0.5">
                  {dayTasks.map(task => (
                    <div key={task.id} className="truncate">
                      <TaskStatus
                        task={task}
                        size="sm"
                        variant="pill"
                        showRecurringIcon={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView; 