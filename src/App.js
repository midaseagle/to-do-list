import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="columns">
        <div className="column">
          <h2>To Be Performed</h2>
          <ul>
            {tasks.filter(task => !task.completed).map((task, index) => (
              <li key={index}>
                {task.text}
                <button onClick={() => toggleTask(index)}>Finish</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Completed Works</h2>
          <ul>
            {tasks.filter(task => task.completed).map((task, index) => (
              <li key={index}>
                {task.text}
                <button onClick={() => toggleTask(index)}>Undo</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
