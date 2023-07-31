import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import ReactDOM from "react-dom";
// import {LoginComponent} from "./LoginComponent";
import {LoginComponent} from "./LoginComponent";
import {RegisterComponent} from "RegisterComponent/RegisterComponent";

// import "./index.css";
// import SearchPage from 'SearchPage/SearchPage';
import Droplist from 'Droplist/Droplist';
import Mainpage from 'POD7/Mainpage';
import SearchBox2 from 'SearchBox/SearchBox2';


const App = () => (
  <div >
      <Router>


        <Routes>
           {/* <Route index element={<LoginComponent/>}/> */}
           <Route path="/" element={<RegisterComponent/>}/>
           <Route path="/Login" element={<LoginComponent/>}/>
           <Route path="/Mainpage" element={<Mainpage/>}/>
           <Route path="/Droplist" element={<Droplist/>}/>
           <Route path="/Search" element={<SearchBox2/>}/>



        </Routes>


      </Router>


      {/* <LoginComponent/> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
