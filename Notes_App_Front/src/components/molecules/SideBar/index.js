import React, { useEffect, useState } from 'react';
import './index.scss';

function SideBar({ notes }) {
  const categories = [];
  notes.forEach((note) => {
    if (!categories.includes(note.category)) {
      categories.push(note.category);
    }
  });

  const cats = categories.map((cat, i) => {
    return (<p key={cat}><a href="">{cat}</a></p>)
  });

  return (
    <aside className="sidebar">
      <h3>Categories:</h3>
      {cats}
    </aside>
  );
}

export default SideBar;
