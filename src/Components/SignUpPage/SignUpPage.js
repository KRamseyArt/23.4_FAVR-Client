import React, { Component } from 'react'

import './SignUpPage.css';

export class SignUpPage extends Component {
  render() {
    return (
      <div id="accountPage">
        <form
          id="accountForm"
        >
          <fieldset>
            <legend>
              Create a New Account:
            </legend>
            <div className="inputSect">
              <label htmlFor="username">
                Username *
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
              />
            </div>
            <div className="inputSect">
              <label htmlFor="email">
                Email *
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="inputSect">
              <label htmlFor="password">
                Password *
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
              />
            </div>
            <div className="inputSect">
              <label htmlFor="vPassword">
                Verify Password *
              </label>
              <input
                required
                type="text"
                id="vPassword"
                name="vPassword"
              />
            </div>

            <input
              type="submit"
              className="btn"
              value="Sign Up"
            />
            
          </fieldset>
        </form>
      </div>
    )
  }
}

export default SignUpPage
