import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Droplist from "Droplist/Droplist";
import SearchBox2 from "SearchBox/SearchBox2";




const App = ()=> 
{
  return(

    <>
    <div className="container">
    <Router>
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="innercontainer">
      <Sidebar/>
      <Routes>
        <Route exact path ="/Droplist" element= {<Droplist/>}></Route>
        <Route exact path = "/Search" element= {<SearchBox2/>}></Route>
        {/* <Route exact path = "/Mainpage" element= {<Mainpage/>}></Route> */}
        {/* <Route exact path = "/Signup" element= {<Signup/>}></Route> */}
        {/* <Route exact path = "/Login"><Login/></Route> */}
      </Routes>
      </div>
    </Router>
    </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
