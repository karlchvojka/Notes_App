import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  cyberFont,
  darkBlue,
  darkGrey,
  headerFont,
  headerGrey,
  paraFont,
  midBlue,
  lightBlue,
  lightestBlue
} from 'src/css_vars.js'

import EditorWrapEdit from './EditorWrapEdit';

import APIHelper from 'src/helpers/APIHelper.js';
import CrudHelpers from 'src/helpers/CrudHelpers.js';

const StyledNoteFormEdit = styled.section`
  margin: 10px;

  label {
    font-weight: 700;
    text-transform: uppercase;

    span {
      color: ${lightBlue};
      display:block;
      font-family: ${cyberFont};
      margin-bottom:10px;
      width:100%;
    }

    input {
      border: none;
      margin-bottom:10px;
      padding: 2%;
      width: 96%;
    }
  }
`;

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
    <StyledNoteFormEdit>
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
    </StyledNoteFormEdit>
  );
};

export default NoteFormEdit;
