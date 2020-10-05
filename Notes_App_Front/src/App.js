import React, { useState, useEffect } from 'react';
import '../styles/_reset.scss';
import '../styles/fonts.scss';
import '../styles/variables.scss';
import './App.scss';

// Component Includes
import Header from './components/molecules/Header';
import TaskForm from './components/organisims/TaskForm';
import DocsList from './components/molecules/DocsList';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div id="App">
      <Header />
      <div className="formWrap">
        <TaskForm currNotes={notes} setNotes={setNotes} />
      </div>
      <div className="mainWrap">
        <DocsList notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
