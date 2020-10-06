import React, { useEffect, useState } from 'react';
import './index.scss';

function SideBar({ notes }) {
  let categories = {};

  notes.map((note) => {
    let prev = categories[note.category]

    if (!categories.hasOwnProperty(note.category)) {
      categories[note.category] = 1;
    } else {
      categories[note.category] = prev + 1;
    }
  });
  console.log(categories);

  const keys = Object.keys(categories);
  const cats = keys.map((cat, i) => {
    return (<p key={cat}><a href="">{cat} {categories[cat]}</a></p>)
  });

  return (
    <aside className="sidebar">
      <h3>Categories:</h3>
      {cats}
    </aside>
  );
}

export default SideBar;
