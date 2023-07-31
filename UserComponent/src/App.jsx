import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { UserComponent } from "./UserComponent";

const App = () => (
  <div className="container">
<UserComponent/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
