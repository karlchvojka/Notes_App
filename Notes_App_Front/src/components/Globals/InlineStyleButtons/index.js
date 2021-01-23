import React from 'react';
import './index.scss';

import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa';


function InlineStyleButtons({ toggleInlineStyle }) {
  const inlineStyleButtons = [
    {
      style: 'BOLD',
      value: <FaBold />,
    },

    {
      style: 'ITALIC',
      value: <FaItalic />,
    },

    {
      style: 'UNDERLINE',
      value: <FaUnderline />,
    },

    {
      style: 'STRIKETHROUGH',
      value: <FaStrikethrough />,
    },

    {
      style: 'CODE',
      value: <FaCode />,
    },
  ];
  console.log(inlineStyleButtons[1].value)
  return inlineStyleButtons.map((button) =>
    (
      <button
        className="inlineStyleButton"
        data-style={button.style}
        key={button.style}
        onMouseDown={toggleInlineStyle}
      >
        {button.value}
      </button>
    ));
}

export default InlineStyleButtons;
