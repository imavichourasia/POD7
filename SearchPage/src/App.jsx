import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";
import SearchPage from "./SearchPage";

const App = () => (
  <div className="container">
  <SearchPage/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
