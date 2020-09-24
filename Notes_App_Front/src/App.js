
import React, { useState, useEffect } from "react"
import "./App.scss"
import APIHelper from "./APIHelper.js"

function App() {
  const [notes, setNotes] = useState([])
  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")
  const [noteDate, setNoteDate] = useState("")
  const [noteCat, setNoteCat] = useState("")
  const [note, setNote] = useState({})


  useEffect(() => {
    const fetchNoteAndSetNotes = async () => {
      const notes = await APIHelper.getAllNotes()
      setNotes(notes)
    }
    fetchNoteAndSetNotes()
  }, [])

  useEffect(() => {
    setNote({
      title: noteTitle,
      content: noteContent,
      date: noteDate,
      category: noteCat
    });

  }, [noteTitle, noteContent, noteDate, noteCat])

  const createNote = async e => {
    e.preventDefault();

    if (!note) {
      alert("please enter something")
      return
    }
  
    const newNote = await APIHelper.createNote(note)
    setNotes([...notes, newNote])
  }

  const deleteNote = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteNote(id)
      setNotes(notes.filter(({ _id: i }) => id !== i))
    } catch (err) {}
  }

  const updateNote = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !notes.find(note => note._id === id).completed,
    }
    const updatedNote = await APIHelper.updateNote(id, payload)
    setNotes(notes.map(note => (note._id === id ? updatedNote : note)))
  }

  return (
    <div className="App">
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

      <ul>
        {notes.map(({ _id, note, completed }, i) => (
          <li
            key={i}
            onClick={e => updateNote(e, _id)}
            className={completed ? "completed" : ""}
          >
            {notes[i].title}

            <span onClick={e => deleteNote(e, _id)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
