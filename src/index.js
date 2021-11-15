import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResetCss } from "./Global/Style/Reset";
import { Providers } from "./Providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        {/* <ResetCss /> */}
        <CssBaseline />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
