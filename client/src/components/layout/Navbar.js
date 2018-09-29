import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="landing.html">
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
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
            </ul>

             <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="Companies.html">
                  Companies
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="Transactions.html">
                  Transactions
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="Portfolio.html">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Sign Up.html">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Login.html">
                  Login
                </a>
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