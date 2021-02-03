import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom';
import { styled, createGlobalStyle } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.js';

// Component Includes
import Header from 'globals/Header';
import SideBar from 'globals/SideBar';
import Home from './components/Pages/Home';
import NoteForm from './components/Pages/NoteForm';
import Note from './components/Pages/Note';

import APIHelper from 'helpers/APIHelper';

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
      <GlobalStyle />
      <div id="App">
        <Header />
        <section className="mainWrap">
          <SideBar notes={notes} />
          <Switch>
            <Route exact path="/">
              <Home
                notes={notes}
                setNotes={setNotes}
              />
            </Route>
            <Route exact path="/form">
              <NoteForm
                currNotes={notes}
                setNotes={setNotes}
              />
            </Route>
            <Route exact path="/notes/cat/:catID">
              <Home
                notes={notes}
                setNotes={setNotes}
              />
            </Route>
            <Route exact path="/notes/:noteID">
              <Note
                notes={notes}
                setNotes={setNotes}
                readOnly
              />
            </Route>
            <Route exact path="/notes/:noteID/edit">
              <NoteForm
                currNotes={notes}
                setNotes={setNotes}
              />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
