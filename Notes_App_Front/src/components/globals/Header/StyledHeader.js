import styled from 'styled-components'
import {
  headerGrey,
  paraFont,
  lightBlue,
} from 'src/css_vars.js'

const StyledHeader = styled.header`
  background-color: ${headerGrey};
  display:grid;
  grid-template-areas: "title menu";
  z-index: 10;
  -webkit-box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);
  box-shadow: 0px 0px 7px 5px rgba(48,191,242,0.36);
  position:fixed;
  width:100%;

  a:link, a:visited {
    text-decoration: none;
    text-transform: uppercase;
  }

  section {
    grid-area: title;
    margin: 20px;
  }

  nav {
    grid-area: menu;
    margin: 25px;
    text-align:right;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;

      .addNoteLink {
        height: 20px;
        width: 20px;

        a:link, a:visited {
          color: ${lightBlue};
          display:block;
          font-family: ${paraFont};
          font-size:19px;
          font-weight: 700;
          height: 100%;
          text-align:center;
          text-decoration: none;
          text-transform: uppercase;
          width: 100%;
        }
      }
    }
  }
`

export default StyledHeader
