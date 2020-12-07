import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
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
            <Link to="/form"><FontAwesomeIcon icon={faPen} /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
