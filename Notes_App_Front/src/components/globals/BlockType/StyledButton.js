import styled from 'styled-components'

import {
  darkGrey,
  lightBlue,
} from 'src/css_vars.js'

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
`

export default StyledButton
