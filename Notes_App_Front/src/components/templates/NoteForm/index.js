import React from 'react';
import './index.scss';
import NewNoteForm from '../../organisims/NewNoteForm';
import EditNoteForm from '../../organisims/EditNoteForm';

function NoteForm({ note, notes, setNotes }) {
  if (note) {
    return <section className="formInner"><EditNoteForm currNotes={notes} incNote={note} setNotes={setNotes} /></section>;
  }
  return <section className="formInner"><NewNoteForm currNotes={notes} setNotes={setNotes} /></section>;
}

export default NoteForm;
