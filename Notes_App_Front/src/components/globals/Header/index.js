import React from 'react';
import styled from 'styled-components';
import { headerFont, paraFont, cyberFont, darkGrey, headerGrey, darkBlue, midBlue, lightBlue, lightestBlue } from 'src/css_vars.js'

import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

const StyledHeader = styled.header`
  background-color: ${headerGrey};
  display:grid;
  grid-template-areas: "title menu";
  z-index: 10;
  -webkit-box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);
  box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);
  position:fixed;
  width:100%;

  a:link, a:visited {
    text-decoration: none;
    text-transform: uppercase;
  }

  section {
    grid-area: title;
    margin: 20px;
  }

  nav {
    grid-area: menu;
    margin: 25px;
    text-align:right;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;

      .addNoteLink {
        height: 20px;
        width: 20px;

        a:link, a:visited {
          color: ${lightBlue};
          display:block;
          font-family: ${paraFont};
          font-size:19px;
          font-weight: 700;
          height: 100%;
          text-align:center;
          text-decoration: none;
          text-transform: uppercase;
          width: 100%;
        }
      }
    }
  }
`;


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

export default Header;
