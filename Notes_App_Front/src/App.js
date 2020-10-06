import React, { useState, useEffect } from 'react';
import '../styles/_reset.scss';
import '../styles/fonts.scss';
import '../styles/variables.scss';
import './App.scss';

// Component Includes
import Header from './components/molecules/Header';
import SideBar from './components/molecules/SideBar';
import TaskForm from './components/organisims/TaskForm';
import DocsList from './components/molecules/DocsList';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div id="App">
      <Header />
      <section className="mainWrap">
        <SideBar notes={notes} />
        <section className="mainInner">
          <TaskForm currNotes={notes} setNotes={setNotes} />
          <DocsList notes={notes} setNotes={setNotes} />
        </section>
      </section>
    </div>
  );
}

export default App;
