import React, { useState, useEffect } from 'react';

import {
  Editor,
  EditorState,
  convertFromRaw,
} from 'draft-js'
import {
  BrowserRouter as Router,
  Link,
  useParams
} from "react-router-dom";
import { FaPen, FaTrash } from 'react-icons/fa'

import StyledNote from './StyledNote.js'

const Note = ({ notes, setNotes }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const { noteID } = useParams()

  const getSelectedNote = (noteID) => {
    const theNote = notes.find(indNote => indNote._id === noteID)
    return theNote
  };
  const note = getSelectedNote(noteID)

  useEffect(() => {
    const content = convertFromRaw(JSON.parse(note.content));
    setEditorState(EditorState.createWithContent(content));
  }, [])

  return (
    <StyledNote>
      <section className="noteHeader">
        <h1>{note.title}</h1>
        <div>
          <Link className="editButton" to={`/notes/${note._id}/edit`}><FaPen /></Link>
        </div>
      </section>
      <p>
        <span>Category:</span> {note.category}
      </p>
      <Editor editorState={editorState} />
    </StyledNote>
  )
}

export default Note
