import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { headerFont, paraFont, cyberFont, darkGrey, headerGrey, darkBlue, midBlue, lightBlue, lightestBlue } from 'src/css_vars.js';
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

const StyledNote = styled.article`
margin: 20px;

.noteHeader {
  display: flex;
  justify-content: space-between;

  h1 {
    margin-bottom:10px;
  }

  .editButton {
    background-color: ${darkGrey};
    color: ${lightBlue};
    font-size:15px;
    padding: 0px 5px;
    text-decoration: none;

  }

  button {
    background-color: ${darkGrey};
    border: 0px;
    color: ${lightBlue};
    font-size:15px;
  }
  button:hover {
    cursor:pointer;
  }
}

p {
  font-size:15px;

  span {
    text-transform: uppercase;
    font-weight:700;
  }
}

.DraftEditor-root {
  color: ${lightBlue};
  font-family: ${paraFont};
}
`;

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
    <StyledNote>
      <section className="noteHeader">
        <h1>{note.title}</h1>
        <div>
          <Link className="editButton" to={`/notes/${note._id}/edit`}><FaPen /></Link>
        </div>
      </section>
      <p><span>Category:</span> {note.category}</p>
      <Editor editorState={editorState} />
    </StyledNote>
  );
};

export default Note;
