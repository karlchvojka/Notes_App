import React from 'react';

import styled from 'styled-components';
import { headerFont, paraFont, cyberFont, darkGrey, headerGrey, darkBlue, midBlue, lightBlue, lightestBlue } from 'src/css_vars.js';

import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa';

const StyledInlineButton = styled.button`
  background-color: ${darkGrey};
  border: 0px;
  color: ${lightBlue};
  font-size:16px;
  font-weight:700;
  height:30px;
  width:40px;

  svg {
    height: auto;
    width: auto;
  }
`;

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
  return inlineStyleButtons.map((button) =>
    (
      <StyledInlineButton
        className="inlineStyleButton"
        data-style={button.style}
        key={button.style}
        onMouseDown={toggleInlineStyle}
      >
        {button.value}
      </StyledInlineButton>
    ));
}

export default InlineStyleButtons;
