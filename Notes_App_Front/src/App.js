
import React, { useState, useEffect } from "react"
import "./App.scss"
import APIHelper from "./APIHelper.js"

// Component Includes
import TaskForm from "./components/organisims/TaskForm/"
import NoteItem from "./components/modules/NoteItem/"

function App() {
  const [notes, setNotes] = useState([])


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

  const notesLoop = notes.map((note, i) => (
    <NoteItem
      key={note._id}
      updateNote={updateNote}
      deleteNote={deleteNote}
      note={note}
    />
  ))

  return (
    <div className="App">
      <TaskForm setNotes={setNotes} currNotes={notes} />
      <div className="notesList">
        <ul>
          {notesLoop}
        </ul>
      </div>
    </div>
  )
}

export default App
