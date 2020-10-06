import React, { useState } from 'react';
import './index.scss';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

function EditorWrap() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const makeBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  return (
    <section className="editorWrap">
      <button onClick={() => { makeBold(); }} type="button">Bold</button>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Start a document..."
        spellCheck={true}
        />
    </section>
  );
}

export default EditorWrap;
