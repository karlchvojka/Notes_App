import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { headerFont, paraFont, cyberFont, darkGrey, headerGrey, darkBlue, midBlue, lightBlue, lightestBlue } from 'src/css_vars.js';

const StyledSidebar = styled.aside`
  height: 89vh;
  padding: 20px 10px 0px 10px;
  z-index: 5;

  h3 {
    margin-bottom:20px;
  }
  p {
    margin-bottom:10px;
    font-family: ${cyberFont};
    text-transform: uppercase;

    a:link, a:visited {
      color: ${lightBlue};
      text-decoration: none;
    }
    a:hover {
      color: ${darkBlue};
    }

    span {
      font-weight:700;
    }
  }
`;

function SideBar({ notes }) {
  let categories = {};

  notes.map((note) => {
    let prev = categories[note.category];

    if (!categories.hasOwnProperty(note.category)) {
      categories[note.category] = 1;
    } else {
      categories[note.category] = prev + 1;
    }
  });

  const keys = Object.keys(categories);
  const cats = keys.map((cat) => {
    return (
      <p key={cat}>
        <Link to={`/notes/cat/${cat}`}><span>[{categories[cat]}]</span> {cat}</Link>
      </p>
    );
  });

  return (
    <StyledSidebar className="sidebar">
      <h3>Categories:</h3>
      {cats}
    </StyledSidebar>
  );
}

export default SideBar;
