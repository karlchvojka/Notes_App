import React from 'react';
import './index.scss';
import NoteItem from '../../molecules/NoteItem';

function DocsList({ notes, setNotes }) {
  return (
    <ul>
      {
        notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            notes={notes}
            setNotes={setNotes}
            />
        ))
      }
    </ul>
  );
}

export default DocsList;
