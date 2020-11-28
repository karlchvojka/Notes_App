import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../styles/_reset.scss';
import '../styles/fonts.scss';
import '../styles/variables.scss';
import './App.scss';

// Component Includes
import Header from './components/molecules/Header';
import SideBar from './components/molecules/SideBar';
import Home from './components/templates/Home';
import NoteFormWrap from './components/templates/NoteFormWrap';
import Note from './components/templates/Note';

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

  const getSelectedNote = (id) => {
    const theNote = notes.find(indNote => indNote._id === id);
    return theNote;
  };

  const getNotesByCat = (cat) => {
    const catNotes = notes.filter(note => note.category === cat);
    return catNotes;
  };
  return (
    <Router>
      <div id="App">
        <Header />
        <section className="mainWrap">
          <SideBar notes={notes} />
          <Switch>
            <Route exact path="/" render={() => <Home notes={notes} setNotes={setNotes} />} />
            <Route exact path="/form" render={() => <NoteFormWrap notes={notes} setNotes={setNotes} />} />
            <Route exact path="/notes/cat/:cat" render={(props) => <Home notes={getNotesByCat(props.match.params.cat)} setNotes={setNotes} />} />
            <Route exact path="/notes/:id" render={(props) => <Note note={getSelectedNote(props.match.params.id)} notes={notes} setNotes={setNotes} readOnly />} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
