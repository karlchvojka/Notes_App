import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  Editor,
  EditorState,
  convertFromRaw,
} from 'draft-js';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { FaPen, FaTrash } from 'react-icons/fa';
import CrudHelpers from '../../../helpers/CrudHelpers.js';

const Note = (props) => {
  const { note, notes, setNotes } = props;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const loadContent = () => {
    const content = convertFromRaw(JSON.parse(note.content));
    setEditorState(EditorState.createWithContent(content));
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <article className="noteWrap">
      <section className="noteHeader">
        <h1>{note.title}</h1>
        <div>
          <Link className="editButton" to={`/notes/${note._id}/edit`}><FaPen /></Link>
        </div>
      </section>
      <p>Category: {note.category}</p>
      <Editor editorState={editorState} />
    </article>
  );
};

export default Note;
