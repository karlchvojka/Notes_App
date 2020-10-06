import React, { useState } from 'react';
import './index.scss';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import 'draft-js/dist/Draft.css';

import InlineStyleButtons from '../InlineStyleButtons';
import BlockTypeButtons from '../BlockType';

function keyBindingFunction(event) {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }

  return getDefaultKeyBinding(event);
}

function EditorWrap() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command) => {
    // inline formatting key commands handles bold, italic, code, underline
    const editorState = RichUtils.handleKeyCommand(editorState, command);

    if (!editorState && command === 'strikethrough') {
      editorState = RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH');
    }

    if (editorState) {
      setEditorState(editorState);
      return 'handled';
    }

    return 'not-handled';
  };

  const toggleInlineStyle = (event) => {
    event.preventDefault();

    const style = event.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(editorState, style),
    );
  };

  const toggleBlockType = (event) => {
    event.preventDefault();

    let block = event.currentTarget.getAttribute('data-block');
    setEditorState(RichUtils.toggleBlockType(editorState, block),
    );
  };

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
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFunction}
        />
      </div>
    </div>
  );
}

export default EditorWrap;