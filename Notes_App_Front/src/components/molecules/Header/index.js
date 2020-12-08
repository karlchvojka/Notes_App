import React from 'react';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

import './index.scss';

function Header() {
  return (
    <header id="mainHeader">
      <section>
        <Link to="/"><h1>Burn_Net: Notes</h1></Link>
      </section>
      <nav>
        <ul>
          <li className="addNoteLink">
            <Link to="/form"><FaPen/></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
