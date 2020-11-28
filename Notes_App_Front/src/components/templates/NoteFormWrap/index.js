import React from 'react';
import './index.scss';
import NoteForm from '../../organisims/NoteForm';

function NoteFormWrap({ notes, setNotes }) {
  return <section className="formInner"><NoteForm currNotes={notes} setNotes={setNotes} /></section>;
}

export default NoteFormWrap;
