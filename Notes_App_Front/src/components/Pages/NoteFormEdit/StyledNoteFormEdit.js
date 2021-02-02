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

const StyledNoteFormEdit = styled.section`
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
`

export default StyledNoteFormEdit
