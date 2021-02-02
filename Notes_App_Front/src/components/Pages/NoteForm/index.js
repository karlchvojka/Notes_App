import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import EditorWrap from './EditorWrap'
import StyledNoteForm from './StyledNoteForm.js'

import APIHelper from 'helpers/APIHelper.js'
import CrudHelpers from 'helpers/CrudHelpers.js'

const NoteForm = ({ noteID, currNotes }) => {
  const { id } = useParams()
  const getSelectedNote = (id) => {
    const theNote = currNotes.find(indNote => indNote._id === id)
    return theNote
  };
  const [note, setNote] = useState(getSelectedNote(noteID))
  const [noteTitle, setNoteTitle] = useState(note.title || "")
  const [noteContent, setNoteContent] = useState(note.content || "")
  const [noteCat, setNoteCat] = useState(note.category || "")
  const [noteDate, setNoteDate] = useState(note.date || "")

  useEffect(() => {
    if(noteID) {
      setNote(getSelectedNote(noteID));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const theDate = new Date();
    CrudHelpers.createNote(e, {
      category: noteCat,
      content: noteContent,
      date: theDate,
      title: noteTitle,
    }, noteID)
    setNoteDate(theDate)
  }

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

export default NoteForm
