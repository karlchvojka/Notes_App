import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Header() {
  return (
    <header id="mainHeader">
      <section>
        <Link to="/"><h1>Burn_Net: Notes</h1></Link>
      </section>
      <nav>
        <Link to="/form">New Note</Link>
      </nav>
    </header>
  );
}

export default Header;
