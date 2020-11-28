import React, { useState, useEffect } from 'react';
import './index.scss';

import EditorWrap from '../../molecules/EditorWrap';

import APIHelper from '../../../helpers/APIHelper.js';
import CrudHelpers from '../../../helpers/CrudHelpers.js';

const NewNoteForm = (props) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteCat, setNoteCat] = useState('');
  const [note, setNote] = useState({});
  const [theNote, setTheNote] = useState({});

  const fetchNoteAndSetNotes = async () => {
    const notes = await APIHelper.getAllNotes();
    props.setNotes(notes);
  };

  const handleSubmit = (e) => {
    const createNote = CrudHelpers.createNote(e, note);
    props.setNotes([...props.currNotes, createNote]);
    setTheNote(createNote);
  };

  useEffect(() => {
    setNote({
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
      <EditorWrap setNoteContent={setNoteContent} />
      <button id="submitButton" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewNoteForm;
