import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import dayjs from 'dayjs';
import styled from 'styled-components';
import { headerFont, paraFont, cyberFont, darkGrey, headerGrey, darkBlue, midBlue, lightBlue, lightestBlue } from 'src/css_vars.js';
import CrudHelpers from 'src/helpers/CrudHelpers.js';

import { FaPen, FaTrash } from 'react-icons/fa';

const StyledLi = styled.li`
  background-color: ${darkGrey};
  margin-bottom:20px;
  padding:10px;
  -webkit-box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);
  box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);

  .itemHeader {
    display:flex;
    justify-content: space-between;

    .itemHeadLeft {
      a:link, a:visited {
        color: ${lightBlue};
        display:block;
        font-family: ${cyberFont};
        font-size:25px;
        font-weight:700;
        margin-bottom:10px;
        text-transform: uppercase;
        text-decoration: none;
      }
      .ptitle {
        font-weight: bold;
        text-transform: uppercase;
      }
      .noteCat {
        font-size:15px;
        margin-bottom: 0px;
      }
      .noteDate {
        font-size:12px;
      }
    }
    .itemHeadRight {

      button {
        background-color:${darkGrey};
        border: 0px;
        color: ${lightBlue};
        font-size:15px;
      }
      button:hover {
        cursor:pointer;
      }
      .editButton {
        background-color:${darkGrey};
        color: ${lightBlue};
        font-size:15px;
        padding: 0px 5px;
        text-decoration: none;

      }
    }
  }
`;

const NoteItem = (props) => {
  const { note, notes, setNotes } = props;

  const handleDeleteClick = (e) => {
    CrudHelpers.deleteNote(e, note._id);
    setNotes(notes.filter(({ _id: i }) => note._id !== i));
  };

  return (
    <StyledLi>
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
    </StyledLi>
  );
};

export default NoteItem;
