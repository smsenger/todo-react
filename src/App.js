//this app refactored with redux

import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';

function App() {

  return (
    <div>
      <div className="App-header">
        <h1>TaskSpace</h1>
      </div>
      <div className="App">
        <TodoForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;