import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  Editor,
  EditorState,
  convertFromRaw,
} from 'draft-js';
import CrudHelpers from '../../../helpers/CrudHelpers.js';

const NoteItem = (props) => {
  const { note, notes, setNotes } = props;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorProps, setEditorProps] = useState({
    readOnly: true,
  });

  const loadContent = () => {
    const content = convertFromRaw(JSON.parse(note.content));
    setEditorState(EditorState.createWithContent(content));
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleClick = (e) => {
    CrudHelpers.deleteNote(e, note._id);
    setNotes(notes.filter(({ _id: i }) => note._id !== i));
  };

  return (
    <li>
      {note.title}
      <Editor editorState={editorState} readOnly={editorProps.readOnly} />
      <button className="deleteButton" onClick={e => handleClick(e)} type="button">X</button>
    </li>
  );
};

export default NoteItem;
