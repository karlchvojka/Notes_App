import React from 'react';
import './index.scss';

function InlineStyleButtons({ toggleInlineStyle }) {
  const inlineStyleButtons = [
    {
      style: 'BOLD',
      value: 'Bold',
    },

    {
      style: 'ITALIC',
      value: 'Italic',
    },

    {
      style: 'UNDERLINE',
      value: 'Underline',
    },

    {
      style: 'STRIKETHROUGH',
      value: 'Strikethrough',
    },

    {
      style: 'CODE',
      value: 'Code',
    },
  ];

  return inlineStyleButtons.map((button) =>
    (
      <input
        data-style={button.style}
        key={button.style}
        onMouseDown={toggleInlineStyle}
        type="button"
        value={button.value}
        />
    ));
}

export default InlineStyleButtons;
