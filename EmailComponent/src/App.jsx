import React from "react";
import ReactDOM from "react-dom";
import { EmailComponent } from "./EmailComponent";

import "./index.css";

const App = () => (
  <div className="container">
<EmailComponent/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
