import React, { useState } from 'react';
import '../styles/_reset.scss';
import '../styles/fonts.scss';
import '../styles/variables.scss';
import './App.scss';

// Component Includes
import Header from './components/molecules/Header';
import SideBar from './components/molecules/SideBar';
import Home from './components/templates/Home';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div id="App">
      <Header />
      <section className="mainWrap">
        <SideBar notes={notes} />
        <Home notes={notes} setNotes={setNotes} />
      </section>
    </div>
  );
}

export default App;
