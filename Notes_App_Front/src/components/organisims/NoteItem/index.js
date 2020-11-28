import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  Editor,
  EditorState,
  convertFromRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import dayjs from 'dayjs';
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

  const handleDeleteClick = (e) => {
    CrudHelpers.deleteNote(e, note._id);
    setNotes(notes.filter(({ _id: i }) => note._id !== i));
  };

  return (
    <li className="noteItem">
      <div className="itemHeader">
        <div className="itemHeadLeft">
          <Link to={`/notes/${note._id}`}>{note.title}</Link>
          <p className="noteCat">
            <span className="ptitle">Category: </span>
            {note.category}
          </p>
          <p className="noteDate">
            <span className="ptitle">Posted: </span>
            {dayjs(`${note.date}`).format('DD/MM/YYYY')}
          </p>
        </div>
        <div className="itemHeadRight">
          <Link className="editButton" to={`/notes/${note._id}/edit`}>Edit</Link>
          <button className="deleteButton" onClick={e => handleDeleteClick(e)} type="button">X</button>
        </div>
      </div>
    </li>
  );
};

export default NoteItem;
