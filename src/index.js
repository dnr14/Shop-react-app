import GlobalStyled from "assets/style/GlobalStyled";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
