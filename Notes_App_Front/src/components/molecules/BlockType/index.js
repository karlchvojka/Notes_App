import React from 'react';
import './index.scss';
import { FaHeading } from 'react-icons/fa';
import { GrBlockQuote, GrUnorderedList, GrOrderedList } from 'react-icons/gr';


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
      <button
        className="blockstyleButton"
        data-block={button.block}
        key={button.block}
        onMouseDown={toggleBlockType}
      >
        {button.value}
      </button>
    ));
}

export default BlockTypeButtons;
