import React from 'react';
import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'

import StyledHeader from './StyledHeader.js'

function Header() {
  return (
    <StyledHeader id="mainHeader">
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
    </StyledHeader>
  );
}

export default Header
