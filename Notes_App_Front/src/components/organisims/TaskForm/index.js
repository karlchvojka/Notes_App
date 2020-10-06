import React, { useState, useEffect } from 'react';
import './index.scss';

import EditorWrap from '../../molecules/EditorWrap';

import APIHelper from '../../../helpers/APIHelper.js';
import CrudHelpers from '../../../helpers/CrudHelpers.js';

const TaskForm = (props) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteDate, setNoteDate] = useState('');
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
      date: noteDate,
      title: noteTitle,
    });
  }, [
    noteTitle,
    noteContent,
    noteDate,
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
      <label htmlFor="noteDateInput">
        <span>Date:</span>
        <input
          id="noteDateInput"
          name="dateInput"
          onChange={({ target }) => setNoteDate(target.value)}
          type="text"
          value={noteDate}
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
      <textarea
        id="noteContentInput"
        name="contInput"
        onChange={({ target }) => setNoteContent(target.value)}
        type="textArea"
        value={noteContent}
        />
      <EditorWrap />
      <button id="submitButton" type="submit">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
