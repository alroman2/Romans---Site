import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/R.png"
const NavBar = () => (
  <nav>
    
    <ul>
        <a href="/" className="Logo">
          <img className="Logo-Icon" src={logo}></img>
        </a>
        
      <li>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles-list">Articles</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
