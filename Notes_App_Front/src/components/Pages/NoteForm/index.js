import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { headerFont, paraFont, cyberFont, darkGrey, headerGrey, darkBlue, midBlue, lightBlue, lightestBlue } from 'src/css_vars.js';

import EditorWrap from './EditorWrap';

import APIHelper from 'src/helpers/APIHelper.js';
import CrudHelpers from 'src/helpers/CrudHelpers.js';

const StyledNoteForm = styled.section`
  margin: 10px;

  label {
    font-weight: 700;
    text-transform: uppercase;

    span {
      color: $lightBlue;
      display:block;
      font-family: $cyberFont;
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

  .draft-editor-wrapper {
    border: 1px solid $lightBlue;
    background-color: #fff;
    padding:10px;
    margin-bottom:10px;

    h1, h2, h3, h4, h5, h6, p, a, b, i, ul, ol, li, span {
      font-family: Helvetica, sans-serif;
    }
  }

  #submitButton {
    background-color: $darkGrey;
    border: 1px solid $lightBlue;
    color: $lightBlue;
    font-size: 15px;
    font-weight: 700;
    padding: 5px;
    text-transform: uppercase;
  }
  #submitButton:hover {
    background-color: $lightBlue;
    color: $darkGrey;
  }
`;

const NoteForm = (props) => {
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
    <StyledNoteForm>
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
          Submit
        </button>
      </form>
    </StyledNoteForm>
  );
};

export default NoteForm;
