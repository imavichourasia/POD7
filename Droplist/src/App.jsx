import React from "react";
import ReactDOM from "react-dom";
import Droplist from "./Droplist";

import "./index.css";

const App1 = () => {
  return(
    <div>
      <h1>Search Component</h1>
      <Droplist />
    </div>
  );
  };
ReactDOM.render(<App1 />, document.getElementById("app"));
