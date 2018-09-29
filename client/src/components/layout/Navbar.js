import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            ETrade
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
           <div className="collapse navbar-collapse" id="mobile-nav">
            
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">About</Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/companies" className="nav-link">Companies</Link>
              </li>
              <li className="nav-item">
                <Link to="/transactions" className="nav-link">Transactions</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Login.html">
                  Logout 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="profiles.html">
                  {' '}
                  UserName
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
    )
  }
}