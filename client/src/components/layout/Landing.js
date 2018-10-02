import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Landing extends Component {
	render() {
        const {isAuthenticated} = this.props.auth;

        const authLinks = (
            <div>
                <Link to="/portfolio" className="btn btn-lg btn-info">
                    Portfolio
                </Link>
            </div>
        );

        const guestLinks = (
            <div>
                <Link to="/login" className="btn btn-lg btn-success">
                    Login
                </Link>
                <Link to="register" className="btn btn-lg btn-light">
                    Signup
                </Link>
            </div>
        );

		return(
			<div className="landing">
                <div className="dark-overlay landing-inner text-light">
                  <div className="container">
                    <div className="row">
                        <div className="jumbotron jumbotronLanding">
                            <h1 className="display-3">Investment Trading Company</h1>
                            <h3 className="lead">We are the reliable thing of everything about stocks. Create an investment profile-portfolio, buy, sell and get help from financial experts.</h3>
                            <hr className="my-4" />
                            {isAuthenticated ? authLinks : guestLinks}
                        </div>
                    </div>
                  </div>
                </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing); 

