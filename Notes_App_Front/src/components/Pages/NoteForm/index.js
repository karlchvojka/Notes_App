import React, { useState, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"

import EditorWrap from './EditorWrap'
import StyledNoteForm from './StyledNoteForm.js'

import APIHelper from 'helpers/APIHelper.js'
import CrudHelpers from 'helpers/CrudHelpers.js'

const NoteForm = ({ currNotes }) => {
  const { noteID } = useParams()
  const [noteCat, setNoteCat] = useState("")
  const [noteContent, setNoteContent] = useState("")
  const [noteDate, setNoteDate] = useState("")
  const [noteTitle, setNoteTitle] = useState("")

  const editorWrapState = useRef(null);

  useEffect(() => {
    if(noteID && currNotes.length) {
      const {
        category,
        content,
        date,
        title,
      } = currNotes.find(indNote => indNote._id === noteID);

      setNoteCat(category)
      setNoteContent(content)
      setNoteDate(date)
      setNoteTitle(title)
    }
  }, [currNotes]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const theDate = new Date();
    CrudHelpers.createNote(e, {
      category: noteCat,
      content: editorWrapState.current,
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
        <EditorWrap
          editorWrapState={editorWrapState}
          noteContent={noteContent}
          setNoteContent={setNoteContent}
        />
        <button id="submitButton" type="submit">
          Submit
        </button>
      </form>
    </StyledNoteForm>
  );
};

export default NoteForm
