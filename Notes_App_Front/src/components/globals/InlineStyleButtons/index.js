import { FaItalic, FaBold, FaUnderline, FaStrikethrough, FaCode } from 'react-icons/fa'

import StyledInlineButton from './StyledInlineButton.js'

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
  ]

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
    )
  )
}

export default InlineStyleButtons
