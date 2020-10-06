import React from 'react';
import './index.scss';

function BlockTypeButtons({ toggleBlockType }) {
  const blockTypeButtons = [
    {
      value: 'Heading One',
      block: 'header-one',
    },

    {
      value: 'Heading Two',
      block: 'header-two',
    },

    {
      value: 'Heading Three',
      block: 'header-three',
    },

    {
      value: 'Blockquote',
      block: 'blockquote',
    },

    {
      value: 'Unordered List',
      block: 'unordered-list-item',
    },

    {
      value: 'Ordered List',
      block: 'ordered-list-item',
    }
  ];

  return blockTypeButtons.map((button) =>
    (
      <input
        data-block={button.block}
        key={button.block}
        type="button"
        onMouseDown={toggleBlockType}
        value={button.value}
      />
    ));
}

export default BlockTypeButtons;
