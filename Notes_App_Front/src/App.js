import React, { useState, useEffect } from 'react';
import '../styles/_reset.scss';
import '../styles/fonts.scss';
import '../styles/variables.scss';
import './App.scss';

// Component Includes
import TaskForm from './components/organisims/TaskForm';
import NoteItem from './components/modules/NoteItem';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div id="App">
      <header id="mainHeader">
        <h1>Burn_Net: Notes</h1>
      </header>
      <div className="formWrap">
        <TaskForm currNotes={notes} setNotes={setNotes} />
      </div>
      <div className="mainWrap">
        <ul>
          {notes.map((note, i) => (
            <NoteItem
              key={note._id}
              note={note}
              notes={notes}
              setNotes={setNotes}
              />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
