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
import { useParams } from "react-router-dom";


import EditorWrap from './EditorWrap';

import APIHelper from 'src/helpers/APIHelper.js';
import CrudHelpers from 'src/helpers/CrudHelpers.js';

const StyledNoteForm = styled.section`
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

  .draft-editor-wrapper {
    border: 1px solid ${lightBlue};
    background-color: #fff;
    padding:10px;
    margin-bottom:10px;

    h1, h2, h3, h4, h5, h6, p, a, b, i, ul, ol, li, span {
      font-family: Helvetica, sans-serif;
    }
  }

  #submitButton {
    background-color: ${darkGrey};
    border: 1px solid ${lightBlue};
    color: ${lightBlue};
    font-size: 15px;
    font-weight: 700;
    padding: 5px;
    text-transform: uppercase;
  }

  #submitButton:hover {
    background-color: ${lightBlue};
    color: ${darkGrey};
  }
`;

const NoteForm = ({ noteID, currNotes }) => {
  const { id } = useParams();
  const getSelectedNote = (id) => {
    const theNote = currNotes.find(indNote => indNote._id === id);
    return theNote;
  };
  const [note, setNote] = useState(getSelectedNote(id));
  const [noteTitle, setNoteTitle] = useState(note.title || "");
  const [noteContent, setNoteContent] = useState(note.content || "");
  const [noteCat, setNoteCat] = useState(note.category || "");
  const [noteDate, setNoteDate] = useState(note.date || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const theDate = new Date();
    CrudHelpers.createNote(e, {
      category: noteCat,
      content: noteContent,
      date: theDate,
      title: noteTitle,
    }, noteID);
    setNoteDate(theDate);
  };

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
