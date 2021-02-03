import styled from 'styled-components'
import {
  darkGrey,
  paraFont,
  lightBlue,
} from 'src/css_vars.js'

const StyledNote = styled.article`
  margin: 20px;

  .noteHeader {
    display: flex;
    justify-content: space-between;

    h1 {
      margin-bottom:10px;
    }

    .editButton {
      background-color: ${darkGrey};
      color: ${lightBlue};
      font-size:15px;
      padding: 0px 5px;
      text-decoration: none;

    }

    button {
      background-color: ${darkGrey};
      border: 0px;
      color: ${lightBlue};
      font-size:15px;
    }
    button:hover {
      cursor:pointer;
    }
  }

  p {
    font-size:15px;

    span {
      text-transform: uppercase;
      font-weight:700;
    }
  }

  .DraftEditor-root {
    color: ${lightBlue};
    font-family: ${paraFont};
  }
`

export default StyledNote
