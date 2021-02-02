import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import StyledSidebar from './StyledSideBar.js'

function SideBar({ notes }) {
  let categories = {};

  notes.map((note) => {
    let prev = categories[note.category]

    if (!categories.hasOwnProperty(note.category)) {
      categories[note.category] = 1
    } else {
      categories[note.category] = prev + 1
    }
  });

  const keys = Object.keys(categories);

  const cats = keys.map((cat) => {
    return (
      <p key={cat}>
        <Link to={`/notes/cat/${cat}`}><span>[{categories[cat]}]</span> {cat}</Link>
      </p>
    )
  })

  return (
    <StyledSidebar className="sidebar">
      <h3>Categories:</h3>
      {cats}
    </StyledSidebar>
  )
}

export default SideBar
