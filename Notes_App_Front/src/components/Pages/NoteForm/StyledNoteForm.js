import styled from 'styled-components'
import {
  cyberFont,
  darkBlue,
  darkGrey,
  headerFont,
  headerGrey,
  paraFont,
  midBlue,
  lightBlue,
  lightestBlue
} from 'src/css_vars.js'

const StyledNoteForm = styled.section`
  margin: 10px;

  label {
    font-weight: 700;
    text-transform: uppercase;

    span {
      color: ${lightBlue};
      display:block;
      font-family: ${cyberFont};
      margin-bottom:10px;
      width:100%;
    }

    input {
      border: none;
      margin-bottom:10px;
      padding: 2%;
      width: 96%;
    }
  }

  .draft-editor-wrapper {
    border: 1px solid ${lightBlue};
    background-color: #fff;
    padding:10px;
    margin-bottom:10px;

    h1, h2, h3, h4, h5, h6, p, a, b, i, ul, ol, li, span {
      font-family: Helvetica, sans-serif;
    }
  }

  #submitButton {
    background-color: ${darkGrey};
    border: 1px solid ${lightBlue};
    color: ${lightBlue};
    font-size: 15px;
    font-weight: 700;
    padding: 5px;
    text-transform: uppercase;
  }

  #submitButton:hover {
    background-color: ${lightBlue};
    color: ${darkGrey};
  }
`

export default StyledNoteForm
