
import React, { useState, useEffect } from "react"
import "./App.scss"
import APIHelper from "./helpers/APIHelper.js"

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

  const notesLoop = notes.map((note, i) => (
    <NoteItem
      key={note._id}
      deleteNote={deleteNote}
      note={note}
    />
  ))

  return (
    <div id="App">
      <header>
        <h1>Burn_Net: Notes</h1>
      </header>
      <div className="formWrap">
        <TaskForm setNotes={setNotes} currNotes={notes} />
      </div>
      <div className="mainWrap">
        <ul>
          {notesLoop}
        </ul>
      </div>
    </div>
  )
}

export default App
