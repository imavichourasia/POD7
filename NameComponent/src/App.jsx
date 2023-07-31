import React from "react";
import ReactDOM from "react-dom";
import { NameComponent } from "./NameComponent";

import "./index.css";

const App = () => (
  <div className="container">
    <NameComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
