import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

import {RegisterComponent} from 'RegisterComponent/RegisterComponent'

 

const App = () => (

  <div className='container'>
<Router>
<Navbar />
<Switch>
<Route path='/' component={RegisterComponent} />
<Route path='/' exact component={Home} />
{/* <Route path='/products' component={Products} /> */}
</Switch>
</Router>
</div>

    
);
ReactDOM.render(<App />, document.getElementById("app"));
