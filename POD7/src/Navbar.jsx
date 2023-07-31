import React from 'react';

import './Navbar.css';

import Home from './Home';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Navbar = () => {
return (
<nav>
<ul>
    <li>
    <Link to = '/Mainpage'>Home</Link>
</li>
<li>
    <Link to = '/'>SignUp</Link>
</li>
<li>
    <Link to = '/Login'>Login</Link>
</li>
<li className="right-align">
<div className="user-profile">
<img src="profile-photo.jpg" alt="Profile Photo" />
<span className="username">John Doe</span>
</div>
</li>
</ul>
</nav>

);
}
export default Navbar;