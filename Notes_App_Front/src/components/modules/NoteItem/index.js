import React from "react"
import "./index.scss"

const NoteItem = (props) => {
  return (
    <li
      key={props.note._id}
    >
      {props.note.title}
      <button onClick={e => props.deleteNote(e, props.note._id)}>X</button>
    </li>
  )
}

export default NoteItem
