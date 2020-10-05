import React from 'react';
import './index.scss';

import CrudHelpers from '../../../helpers/CrudHelpers.js';

const NoteItem = (props) => {
  const { note, notes, setNotes } = props;

  const handleClick = (e) => {
    CrudHelpers.deleteNote(e, note._id);
    setNotes(notes.filter(({ _id: i }) => note._id !== i));
  };

  return (
    <li
      key={note._id}
      >
      {note.title}
      <button className="deleteButton" onClick={e => handleClick(e)} type="button">X</button>
    </li>
  );
};

export default NoteItem;
