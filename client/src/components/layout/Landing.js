import React, { Component } from 'react';
import '../../App.css';

export default class Landing extends Component {
	render() {
		return(
			<div className="landing">
                <div className="dark-overlay landing-inner text-light">
                  <div className="container">
                    <div className="row">
                        <div className="jumbotron jumbotronLanding">
                            <h1 className="display-3">Investment Trading Company</h1>
                            <h3 className="lead">We are the reliable thing of everything about stocks. Create an investment profile-portfolio, buy, sell and get help from financial experts.</h3>
                            <hr className="my-4" />
                            <a href="register.html" className="btn btn-lg btn-info">Sign Up</a>
                            <a href="login.html" className="btn btn-lg btn-light">Login</a>
                        </div>
                    </div>
                  </div>
                </div>
			</div>
		)
	}
}