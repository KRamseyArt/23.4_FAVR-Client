import React, { Component } from 'react'

import './LogInPage.css'

export class LogInPage extends Component {
  render() {
    return (
      <div id="accountPage">
        <form
          id="accountForm"
        >
          <fieldset>
            <legend>
              Log Into Your Account:
            </legend>
            <div className="inputSect">
              <label htmlFor="usernameEmail">
                Username / Email*
              </label>
              <input
                required
                type="text"
                id="usernameEmail"
                name="usernameEmail"
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

            <input
              type="submit"
              className="btn"
              value="Log In"
            />
            
          </fieldset>
        </form>
      </div>
    )
  }
}

export default LogInPage
