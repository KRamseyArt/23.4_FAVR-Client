import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav id="NavBar">
        <Link
          to="./"
          id="logo"
        />
        
        
        <div id="nav">
          <Link to="./sign-up">
            <button className="btn">
              Sign Up
            </button>
          </Link>
          <Link to="./log-in">
            <button className="btn">
              Log In
            </button>
          </Link>
          <Link to="./my-profile">
            <button className="btn">
              Account
            </button>
          </Link>
          <Link to="./favors">
            <button className="btn">
              Favors
            </button>
          </Link>
        </div>
      </nav>
    )
  }
}

export default NavBar
