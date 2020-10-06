import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.scss';

function Header() {
  return (
    <header id="mainHeader">
      <h1>Burn_Net: Notes</h1>
      <menu>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/form">New</Link></div>
      </menu>
    </header>
  );
}

export default Header;
