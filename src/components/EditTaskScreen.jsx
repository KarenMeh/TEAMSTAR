import React, { useState } from 'react';
import './EditTaskScreen.css';

export default function EditTaskScreen() {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSave = () => {
    // Handle saving the task
    console.log('Saving task:', task);
  };

  return (
    <div className="edit-task-container">
      <h2 className="edit-task-title">Edit Task</h2>
      <input
        className="edit-task-input"
        value={task}
        onChange={handleTaskChange}
        placeholder="Enter task description"
      />
      <button className="edit-task-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
} 