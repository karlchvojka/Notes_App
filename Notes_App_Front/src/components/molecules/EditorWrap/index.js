import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
  convertToRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

import InlineStyleButtons from '../InlineStyleButtons';
import BlockTypeButtons from '../BlockType';

function keyBindingFunction(event) {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }

  return getDefaultKeyBinding(event);
}

function EditorWrap({ setNoteContent }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorProps, setEditorProps] = useState({
    spellCheck: true,
  });

  const onChange = (incState) => {
    setEditorState(incState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const toggleInlineStyle = (event) => {
    event.preventDefault();

    const style = event.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (event) => {
    event.preventDefault();

    const block = event.currentTarget.getAttribute('data-block');
    setEditorState(RichUtils.toggleBlockType(editorState, block));
  };

  const saveContent = (incState) => {
    setNoteContent(JSON.stringify(convertToRaw(incState.getCurrentContent())));
  };

  useEffect(() => {
    saveContent(editorState);
  }, [editorState]);

  return (
    <div className="my-little-app">
      <h1>Playing with Draft!</h1>
      <div className="inline-style-options">
        Inline Styles:
        <InlineStyleButtons toggleInlineStyle={toggleInlineStyle} />
      </div>

      <div className="block-style-options">
        Block Types:
        <BlockTypeButtons toggleBlockType={toggleBlockType} />
      </div>
      <div className="draft-editor-wrapper">
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFunction}
          onChange={(editorState) => setEditorState(editorState)}
          spellCheck={editorProps.spellCheck}
          />
      </div>
    </div>
  );
}

export default EditorWrap;
