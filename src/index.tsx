import { CSSReset, Heading, ThemeProvider } from "@chakra-ui/core";
import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

function App() {
  var heading = <Heading>ESTO ES REACT</Heading>;
  console.log(heading);
  return heading;
}

const rootElement = document.getElementById("root");
render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  rootElement
);
