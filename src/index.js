import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Styles
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index";
// Navigation
import { HashRouter as Router } from "react-router-dom";
import { Navigation } from "routes/Navigation";
import { GlobalProvider } from "store/Global.store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
