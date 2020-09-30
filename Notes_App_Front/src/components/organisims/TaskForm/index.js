import React, { useState, useEffect } from "react"
import "./index.scss"

import APIHelper from '../../../helpers/APIHelper.js'
import CrudHelpers from "../../../helpers/CrudHelpers.js"


const TaskForm = (props) => {
  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")
  const [noteDate, setNoteDate] = useState("")
  const [noteCat, setNoteCat] = useState("")
  const [note, setNote] = useState({})
  const [theNote, setTheNote] = useState({})

  const fetchNoteAndSetNotes = async () => {
    const notes = await APIHelper.getAllNotes()
    props.setNotes(notes)
  }

  const handleSubmit = (e) => {
    const createNote = CrudHelpers.createNote(e, note)
    props.setNotes([...props.currNotes, createNote])
    setTheNote(createNote)
  }

  useEffect(() => {
    setNote({
      title: noteTitle,
      content: noteContent,
      date: noteDate,
      category: noteCat
    });

  }, [noteTitle, noteContent, noteDate, noteCat])

  useEffect(() => {
    fetchNoteAndSetNotes()
  }, [theNote])

  return (
    <form id="taskForm" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          id="noteTitleInput"
          type="text"
          value={noteTitle}
          name="titleInput"
          onChange={({ target }) => setNoteTitle(target.value)}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          id="noteDateInput"
          type="text"
          value={noteDate}
          name="dateInput"
          onChange={({ target }) => setNoteDate(target.value)}
        />
      </label>
      <label>
        <span>Category:</span>
        <input
          id="noteCatInput"
          type="text"
          value={noteCat}
          name="catInput"
          onChange={({ target }) => setNoteCat(target.value)}
        />
      </label>
      <textarea
        id="noteContentInput"
        type="textArea"
        value={noteContent}
        name="contInput"
        onChange={({ target }) => setNoteContent(target.value)}
      />
      <button id="submitButton" type="submit">
        Add
      </button>
    </form>
  )
}

export default TaskForm
