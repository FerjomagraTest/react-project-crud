import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
	render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
            <li className="navbar-item">
              <Link to="/lastname" className="nav-link">Lastnames</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}