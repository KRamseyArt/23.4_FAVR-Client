import React, { Component } from 'react';

import './NewFavorPage.css';
import Config from '../../Config';
import Context from '../../Context';

import ValidationError from '../ValidationError/ValidationError';
import TokenService from '../../Services/token-service';

export class NewFavorPage extends Component {
  static contextType = Context;

  constructor(props){
    super(props);
    this.state = {
      favor_title: {
        value: "",
        touched: false
      },
      favor_content: {
        value: "",
        touched: false
      },
      to_user_id: {
        value: "",
        touched: false
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const favor_title = this.state.favor_title.value;
    const favor_content = this.state.favor_content.value;
    const to_user_id = this.state.to_user_id.value;
    const from_user_id = TokenService.readJwtToken().user_id;
    // const assigned_date = new Date().toLocaleString();

    const newFavor = { favor_title, favor_content, from_user_id, to_user_id };

    fetch(`${Config.API_ENDPOINT}/favors`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newFavor),
    })
      .then(res => {
        if (!res.ok){
          return res
            .json()
            .then(e => Promise.reject(e));
        }

        return res.json();
      })
      .then(res => {
        this.context.addFavor(res);
        this.onSubmitSuccess();
      })
      .catch(error => {
        console.error(error);
      });
  }

  onSubmitSuccess = () => {
    const { history } = this.props;
    const destination = `/favors`;
    history.push(destination);
  }

  updateFavorTitle(title){
    this.setState({
      favor_title: {
        value: title,
        touched: true
      }
    })
  }
  validateFavorTitle(){
    const favorTitle = this.state.favor_title.value.trim();
    const minLength = 6;

    if (favorTitle.length === 0){
      return 'Favor Title is required';
    } else if (favorTitle.length < minLength){
      return `Favor Title must be at least ${minLength} characters long`;
    }
  }

  updateFavorContent(content){
    this.setState({
      favor_content: {
        value: content,
        touched: true
      }
    })
  }
  validateFavorContent(){
    const favorContent = this.state.favor_content.value.trim();
    const minLength = 10;

    if (favorContent.length === 0){
      return 'Content is required';
    } else if (favorContent.length < minLength){
      return `Content must be at least ${minLength} characters long`;
    }
  }

  updateFavorTarget(userId){
    this.setState({
      to_user_id: {
        value: parseInt(userId),
        touched: true
      }
    })
  }
  validateFavorTarget(){
    const favorTarget = this.state.to_user_id.value;

    if (favorTarget === 0 || favorTarget === ""){
      return `You must select a Favor recipient`
    }
  }

  render() {
    const titleError = this.validateFavorTitle();
    const contentError = this.validateFavorContent();
    const targetError = this.validateFavorTarget();

    return (
      <div id="newFavorPage">
        <form
          id="newFavorForm"
          onSubmit={e => this.handleSubmit(e)}
        >
          <fieldset>
            <legend>
              Create a New Favor:
            </legend>
            <div className="inputSect">
              <label htmlFor="favorTitle">
                Title *
              </label>
                
              <input
                required
                type="text"
                id="favorTitle"
                name="favorTitle"
                onChange={e => this.updateFavorTitle(e.target.value)}
              />
              {this.state.favor_title.touched && (
                <ValidationError message={titleError}/>
              )}
            </div>
            
            <div className="inputSect">
              <label htmlFor="favorContent">
                Details
              </label>
              <textarea
                type="text"
                id="favorContent"
                name="favorContent"
                onChange={e => this.updateFavorContent(e.target.value)}
              />
              {this.state.favor_content.touched && (
                <ValidationError message={contentError}/>
              )}
            </div>

            <div className="inputSect">
              <label htmlFor="favorTo">
                Send To *
              </label>
              <select
                required
                id="favorTo"
                name="favorTo"
                onChange={e => this.updateFavorTarget(e.target.value)}
              >
                <option
                  key={0}
                  value={0}
                >
                  Select a user...
                </option>
                {this.context.allUsers.map(u => {
                  let option;
                  if (u.id !== this.context.user.id){
                    option = 
                      <option
                        key={u.id}
                        value={u.id}
                      >
                        {u.username}
                      </option>  
                  }
                  return option
                })}
              </select>

              {this.state.to_user_id.touched && (
                <ValidationError message={targetError}/>
              )}
            </div>

            <input
              type="submit"
              className="acct btn"
              value="Submit"
              disabled={
                this.validateFavorTitle() ||
                this.validateFavorContent() ||
                this.validateFavorTarget()
              }
            />
            
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NewFavorPage;
