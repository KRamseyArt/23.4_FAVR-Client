import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import Context from '../../Context';
import TokenService from '../../Services/token-service';
import IdleService from '../../Services/idle-service';

export class NavBar extends Component {
  static contextType = Context;

  handleLogout = () => {
    this.context.setUser(null);
    this.context.setFavors([]);
    
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  }

  renderSignUpAndLogInNav() {
    return (
      <div id="nav">
        <Link to="/sign-up">
          <button className="btn">
            Sign Up
          </button>
        </Link>
        <Link to="/log-in">
          <button className="btn">
            Log In
          </button>
        </Link>
      </div>
    )
  }
  renderAccountAndFavorsNav() {
    return (
      <div id="nav">
        <Link to={`/users/${TokenService.readJwtToken().user_id}`}>
          <button className="btn">
            Account
          </button>
        </Link>
        <Link to="/">
          <button
            className="btn"
            onClick={() => this.handleLogout()}
          >
            Log Out
          </button>
        </Link>
        <Link to="/favors">
          <button className="btn">
            Favors
          </button>
        </Link>
      </div>
    )
  }
  
  render() {
    return (
      <nav id="NavBar">
        <Link
          to="/"
          id="logo"
        />
        
        
        {TokenService.hasAuthToken()
          ? this.renderAccountAndFavorsNav()
          : this.renderSignUpAndLogInNav()
        }
      </nav>
    );
  }
}

export default NavBar;
