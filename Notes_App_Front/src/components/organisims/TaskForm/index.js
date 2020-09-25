import React, { useState, useEffect } from "react"
import "./index.scss"

import APIHelper from '../../../APIHelper.js'

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

  const createNote = async e => {
    e.preventDefault();

    if (!note) {
      alert("please enter something")
      return
    }

    const newNote = await APIHelper.createNote(note)
    props.setNotes([...props.currNotes, newNote])
    setTheNote(newNote)
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
    <form onSubmit={createNote}>
      <input
        id="noteTitleInput"
        type="text"
        value={noteTitle}
        onChange={({ target }) => setNoteTitle(target.value)}
      />
      <input
        id="noteDateInput"
        type="text"
        value={noteDate}
        onChange={({ target }) => setNoteDate(target.value)}
      />
      <input
        id="noteCatInput"
        type="text"
        value={noteCat}
        onChange={({ target }) => setNoteCat(target.value)}
      />

      <textarea
        id="noteContentInput"
        type="textArea"
        value={noteContent}
        onChange={({ target }) => setNoteContent(target.value)}
      />
      <button type="submit">
        Add
      </button>
    </form>
  )
}

export default TaskForm
