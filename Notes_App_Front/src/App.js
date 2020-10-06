import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../styles/_reset.scss';
import '../styles/fonts.scss';
import '../styles/variables.scss';
import './App.scss';

// Component Includes
import Header from './components/molecules/Header';
import SideBar from './components/molecules/SideBar';
import Home from './components/templates/Home';
import NoteForm from './components/templates/NoteForm';

import APIHelper from './helpers/APIHelper';

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNoteAndSetNotes = async () => {
    const currNotes = await APIHelper.getAllNotes();
    setNotes(currNotes);
  };

  useEffect(() => {
    fetchNoteAndSetNotes();
  }, []);

  return (
    <Router>
      <div id="App">
        <header id="mainHeader">
          <h1>Burn_Net: Notes</h1>
          <menu>
            <Link to="/">Home</Link>
            <Link to="/form">New</Link>
          </menu>
        </header>
        <section className="mainWrap">
          <SideBar notes={notes} />
          <Route exact path="/" render={() => <Home notes={notes} setNotes={setNotes} />} />
          <Route exact path="/form" render={() => <NoteForm notes={notes} setNotes={setNotes} />} />
        </section>
      </div>
    </Router>
  );
}

export default App;
