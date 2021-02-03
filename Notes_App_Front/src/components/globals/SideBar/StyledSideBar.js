import styled from 'styled-components'
import {
  cyberFont,
  darkBlue,
  lightBlue,
} from 'src/css_vars.js'

const StyledSidebar = styled.aside`
  height: 89vh;
  padding: 20px 10px 0px 10px;
  z-index: 5;

  h3 {
    margin-bottom:20px;
  }
  p {
    margin-bottom:10px;
    font-family: ${cyberFont};
    text-transform: uppercase;

    a:link, a:visited {
      color: ${lightBlue};
      text-decoration: none;
    }
    a:hover {
      color: ${darkBlue};
    }

    span {
      font-weight:700;
    }
  }
`

export default StyledSidebar
