import styled from 'styled-components'
import {
  cyberFont,
  darkGrey,
  lightBlue,
} from 'src/css_vars.js'

const StyledNoteItem = styled.li`
  background-color: ${darkGrey};
  margin-bottom:20px;
  padding:10px;
  -webkit-box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);
  box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);

  .itemHeader {
    display:flex;
    justify-content: space-between;

    .itemHeadLeft {
      a:link, a:visited {
        color: ${lightBlue};
        display:block;
        font-family: ${cyberFont};
        font-size:25px;
        font-weight:700;
        margin-bottom:10px;
        text-transform: uppercase;
        text-decoration: none;
      }
      .ptitle {
        font-weight: bold;
        text-transform: uppercase;
      }
      .noteCat {
        font-size:15px;
        margin-bottom: 0px;
      }
      .noteDate {
        font-size:12px;
      }
    }
    .itemHeadRight {

      button {
        background-color: ${darkGrey};
        border: 0px;
        color: ${lightBlue};
        font-size:15px;
      }
      button:hover {
        cursor:pointer;
      }
      .editButton {
        background-color: ${darkGrey};
        color: ${lightBlue};
        font-size:15px;
        padding: 0px 5px;
        text-decoration: none;

      }
    }
  }
`

export default StyledNoteItem
