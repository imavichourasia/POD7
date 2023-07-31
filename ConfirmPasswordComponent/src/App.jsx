import React from "react";
import ReactDOM from "react-dom";
import { ConfirmPasswordComponent } from "./ConfirmPasswordComponent";

import "./index.css";

const App = () => (
  <div className="container">
    <ConfirmPasswordComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
