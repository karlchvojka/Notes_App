import React from 'react';
import { FaHeading } from 'react-icons/fa';
import { GrBlockQuote, GrUnorderedList, GrOrderedList } from 'react-icons/gr';
import styled from 'styled-components';
import { headerFont, paraFont, cyberFont, darkGrey, headerGrey, darkBlue, midBlue, lightBlue, lightestBlue } from 'src/css_vars.js';

const StyledButton = styled.button`
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

function BlockTypeButtons({ toggleBlockType }) {
  const blockTypeButtons = [
    {
      value: <span>H1</span>,
      block: 'header-one',
    },

    {
      value: <span>H2</span>,
      block: 'header-two',
    },

    {
      value: <span>H3</span>,
      block: 'header-three',
    },

    {
      value: <GrBlockQuote />,
      block: 'blockquote',
    },

    {
      value: <GrUnorderedList />,
      block: 'unordered-list-item',
    },

    {
      value: <GrOrderedList />,
      block: 'ordered-list-item',
    }
  ];

  return blockTypeButtons.map((button) =>
    (
      <StyledButton
        className="blockstyleButton"
        data-block={button.block}
        key={button.block}
        onMouseDown={toggleBlockType}
      >
        {button.value}
      </StyledButton>
    ));
}

export default BlockTypeButtons;
