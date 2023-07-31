import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import { LoginComponent } from "Login/LoginComponent";

// import "./index.css";
import { RegisterComponent } from "./RegisterComponent";
// import { Mainpage } from "POD7/Mainpage";
import Droplist from 'Droplist/Droplist';
import Mainpage from 'POD7/Mainpage';
import SearchBox2 from 'SearchBox/SearchBox2';






const App = () => (
  <div>
    {/* <RegisterComponent/> */}
    <Router>

{/* <Navbar/>

<Sidebar/> */}

<Routes>

  <Route exact path ="/" element= {<RegisterComponent/>}></Route>

  <Route exact path = "/Login" element= {<LoginComponent/>}></Route>

  
  <Route exact path = "/Mainpage" element= {<Mainpage/>}></Route>

  <Route path="/Droplist" element={<Droplist/>}/>
 <Route path="/Search" element={<SearchBox2/>}/>

  {/* <Route exact path = "/Login"><Login/></Route> */}

</Routes>

</Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
