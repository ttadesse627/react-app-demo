import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="side-navbar">
        <ul className="side-navbar-list">
          <li className="side-navbar-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="side-navbar-list-item">
            <Link to="/departments">Departments</Link>
          </li>
          <li className="side-navbar-list-item">
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar