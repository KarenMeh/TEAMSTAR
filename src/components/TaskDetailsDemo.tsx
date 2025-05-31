import React from "react";

const TaskDetailsDemo: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 mb-8 bg-white border border-gray-200 rounded-2xl shadow-lg p-0 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 rounded-t-2xl">
        <button className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200" title="Back">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-2xl font-black tracking-wide text-gray-800">DETAILS</h1>
      </div>

      {/* Top Section (Dark) */}
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white px-6 py-8 flex flex-col items-center rounded-b-2xl">
        <h2 className="text-3xl font-black mb-3 tracking-wide text-white">DAILY BAR</h2>
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-black tracking-wide text-white">Wednesday</span>
            <span className="text-2xl font-black tracking-wide text-white">•</span>
            <span className="text-2xl font-black tracking-wide text-white">16.05.</span>
          </div>
          <span className="text-lg font-medium text-gray-400">8:00 – 9:00</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-800/50 border border-gray-500/50 text-xs font-bold hover:bg-neutral-800 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth={2}/>
            </svg>
            Low
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-800/50 border border-gray-500/50 text-xs font-bold hover:bg-neutral-800 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth={2}/>
            </svg>
            Overdue
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-800/50 border border-gray-500/50 text-xs font-bold hover:bg-neutral-800 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2}/>
              <path d="M8 12h8" stroke="currentColor" strokeWidth={2}/>
            </svg>
            Team test
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 flex flex-col gap-8">
        <div>
          <h3 className="font-black text-xl mb-3 tracking-wide text-gray-800">DESCRIPTION</h3>
          <div className="text-base text-gray-600 leading-relaxed">Test</div>
        </div>
        <div className="border-t border-gray-200" />
        <div>
          <h3 className="font-black text-xl mb-3 tracking-wide text-gray-800">Checklist</h3>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors duration-200">
              <input type="checkbox" checked readOnly className="w-5 h-5 accent-blue-600 rounded focus:ring-2 focus:ring-blue-400" />
              <span className="text-base text-gray-700">Wash plates</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors duration-200">
              <input type="checkbox" checked readOnly className="w-5 h-5 accent-blue-600 rounded focus:ring-2 focus:ring-blue-400" />
              <span className="text-base text-gray-700">Map the floor</span>
            </label>
          </div>
        </div>
        <div className="border-t border-gray-200" />
        <div>
          <h3 className="font-black text-xl mb-3 tracking-wide text-gray-800">ATTACHMENTS</h3>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full text-base shadow transition-all duration-200 hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth={2}/>
              <path d="M7 10V7a5 5 0 0110 0v7a3 3 0 01-6 0V8" stroke="currentColor" strokeWidth={2}/>
            </svg>
            Select files
          </button>
        </div>
        <div className="border-t border-gray-200" />
        <div>
          <h3 className="font-black text-xl mb-3 tracking-wide text-gray-800">WRITE COMMENT</h3>
          <textarea 
            className="w-full border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none mb-3 transition-colors duration-200 hover:border-gray-400" 
            rows={3} 
            placeholder="Write your comment..." 
          />
        </div>
        {/* History Log Section */}
        <div className="mt-6">
          <h3 className="font-black text-xl mb-3 tracking-wide text-gray-800">HISTORY LOG</h3>
          <ul className="flex flex-col gap-2 text-base text-gray-600">
            {/* No log entries for now */}
          </ul>
        </div>
        
        {/* Delete Task Button */}
        <div className="mt-10 flex justify-center">
          <button className="w-4/5 mx-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl text-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-400 uppercase">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsDemo; 