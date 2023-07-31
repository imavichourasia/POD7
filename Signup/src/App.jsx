import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import {RegisterComponent} from "./RegisterComponent";
// import SignupButton from "SignupButton/SignupButton";
// import ButtonComponent from "./ButtonComponent";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => (
  <div className="container">
  <RegisterComponent/>
  {/* <SignupButton/> */}
  {/* <ButtonComponent/> */}
{/* <Router>
  <Routes>

  <Route path = '/Home' element ={<RegisterComponent/>} />
  <Route path = '/ButtonComponent' element ={<ButtonComponent/>} />

  </Routes>
  </Router> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
