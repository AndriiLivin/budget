import styledApp, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
}
`;

export const WrapperApp = styledApp.div`
  background: blueviolet;
  padding: 15px;
`;
