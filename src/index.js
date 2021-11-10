import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ResetCss } from "./Global/Style/Reset";

ReactDOM.render(
  <React.StrictMode>
    <ResetCss />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
