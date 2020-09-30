import React from "react"
import "./index.scss"

import CrudHelpers from "../../../helpers/CrudHelpers.js"

const NoteItem = (props) => {
  const { note, setNotes, notes } = props;

  const handleClick = (e) => {
    CrudHelpers.deleteNote(e, note._id)
    setNotes(notes.filter(({ _id: i }) => note._id !== i))
  }
  
  return (
    <li
      key={props.note._id}
    >
      {props.note.title}
      <button onClick={e => handleClick(e)}>X</button>
    </li>
  )
}

export default NoteItem
