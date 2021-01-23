import React, { useState, useEffect } from 'react';
import './index.scss';

import EditorWrapEdit from './EditorWrapEdit';

import APIHelper from '../../../helpers/APIHelper.js';
import CrudHelpers from '../../../helpers/CrudHelpers.js';

const NoteFormEdit = ({ note, noteID, notes, setNotes }) => {
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteContent, setNoteContent] = useState(note.content);
  const [noteCat, setNoteCat] = useState(note.category);
  const [noteDate, setNoteDate] = useState(note.date);
  const [theNote, setTheNote] = useState(note);

  const fetchNoteAndSetNotes = async () => {
    const currNotes = await APIHelper.getAllNotes();
    setNotes(currNotes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTheNote({
      category: noteCat,
      content: noteContent,
      date: noteDate,
      title: noteTitle,
    });
    const updateNote = CrudHelpers.updateNote(e, noteID, theNote);
    setNotes([...notes, updateNote]);
    setTheNote(updateNote);
  };

  useEffect(() => {
    setTheNote({
      category: noteCat,
      content: noteContent,
      date: new Date(),
      title: noteTitle,
    });
  }, [
    noteTitle,
    noteContent,
    noteCat,
  ]);

  useEffect(() => {
    fetchNoteAndSetNotes();
  }, [theNote]);

  return (
    <section className="formInner">
      <form id="taskForm" onSubmit={handleSubmit}>
        <label htmlFor="noteTitleInput">
          <span>Title:</span>
          <input
            id="noteTitleInput"
            name="titleInput"
            onChange={({ target }) => setNoteTitle(target.value)}
            type="text"
            value={noteTitle}
            />
        </label>
        <label htmlFor="noteCatInput">
          <span>Category:</span>
          <input
            id="noteCatInput"
            name="catInput"
            onChange={({ target }) => setNoteCat(target.value)}
            type="text"
            value={noteCat}
            />
        </label>
        <EditorWrapEdit noteContent={noteContent} setNoteContent={setNoteContent} />
        <button id="submitButton" type="submit">
          Edit
        </button>
      </form>
    </section>
  );
};

export default NoteFormEdit;
