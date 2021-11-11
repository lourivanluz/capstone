import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResetCss } from "./Global/Style/Reset";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetCss />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
