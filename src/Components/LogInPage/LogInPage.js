import React, { Component } from 'react';

import './LogInPage.css';
import Context from '../../Context';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
import ValidationError from '../ValidationError/ValidationError';

export class LogInPage extends Component {
  static contextType = Context;

  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  state = { error: null };

  handleSubmitJWTAuth = e => {
    e.preventDefault();

    this.setState({ error: null });
    const { username, password } = e.target;

    AuthApiService.postLogin ({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = "";
        password.value = "";
        this.context.setUser(res.authToken);
        this.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      })
  }

  onLoginSuccess = () => {
    const { history } = this.props;
    const destination = `/users/${TokenService.readJwtToken().user_id}`;
    history.push(destination);
  }
  
  render() {
    const { error } = this.state;

    return (
      <div id="accountPage">
        <form
          id="accountForm"
          onSubmit={this.handleSubmitJWTAuth}
        >
          <fieldset>
            <legend>
              Log Into Your Account:
            </legend>
            {error && (
              <ValidationError message={error}>
                <div>
                  Sign-up form meets requirements
                </div>
              </ValidationError>
            )}
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
              className="acct btn"
              value="Log In"
            />
            
          </fieldset>
        </form>
        <div id="demoCredentials">
          <h4>Demo Credentials:</h4>
          <p><span>Username:</span> "Demo"</p>
          <p><span>Password:</span> "Testing123!</p>
        </div>
      </div>
    );
  }
}

export default LogInPage;
