import React, { Component } from 'react';

import './SignUpPage.css';
import AuthApiService from '../../Services/auth-api-service';
import ValidationError from '../ValidationError/ValidationError';

export class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  state = {
    error: null
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push(`/log-in`);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, vPassword } = e.target;

    this.setState({ error: null });
    if (password !== vPassword){
      this.setState({ error: `Passwords do not match` });
    }

    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      email: email.value,
    })
      .then(user => {
        username.value = "";
        email.value = "";
        password.value = "";
        vPassword.value = "";
        
        this.handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  }
  
  render() {
    const { error } = this.state;
    return (
      <div id="accountPage">
        <form
          id="accountForm"
          onSubmit={this.handleSubmit}
        >
          <fieldset>
            <legend>
              Create a New Account:
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
                type="password"
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
    );
  }
}

export default SignUpPage;
