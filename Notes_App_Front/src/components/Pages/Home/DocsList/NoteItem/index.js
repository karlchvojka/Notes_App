import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import dayjs from 'dayjs'
import { FaPen, FaTrash } from 'react-icons/fa'

import CrudHelpers from 'src/helpers/CrudHelpers.js'

import StyledNoteItem from './StyledNoteItem.js'

const NoteItem = ({ note, notes, setNotes }) => {

  const handleDeleteClick = (e) => {
    CrudHelpers.deleteNote(e, note._id);
    setNotes(notes.filter(({ _id: i }) => note._id !== i));
  }

  return (
    <StyledNoteItem>
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
          <Link className="editButton" to={`/notes/${note._id}/edit`}><FaPen /></Link>
          <button className="deleteButton" onClick={e => handleDeleteClick(e)} type="button"><FaTrash /></button>
        </div>
      </div>
    </StyledNoteItem>
  );
};

export default NoteItem;
