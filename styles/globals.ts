import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    font-family: ${(props) => props.theme.fontFamily.montserrat};
    background-color: ${(props=> props.theme.colors.secondary)};
    max-width: 1400px;
    margin: auto;
  }
`;
