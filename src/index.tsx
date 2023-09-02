import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./utils/theme";

const Grobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif
  }

  ::-webkit-scrollbar {
  /* width: 30; */
  position: fixed;
  /* background-color: transparent; */
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Grobal />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
