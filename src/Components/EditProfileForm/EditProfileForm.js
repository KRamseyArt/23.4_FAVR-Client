import React, { Component } from 'react';

import './EditProfileForm.css';
import Context from '../../Context';
import Config from '../../Config';
import TokenService from '../../Services/token-service';

import ValidationError from '../ValidationError/ValidationError';

export class EditProfileForm extends Component {
  static contextType = Context;
  
  constructor(props){
    super(props);
    this.state = {
      visible: true,

      img_link: {
        value: "",
        touched: false
      },
      about_me: {
        value: "",
        touched: false
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { img_link, about_me } = this.state;
    const userPatch = {
      img_link: img_link.value,
      about_me: about_me.value,
      date_modified: new Date()
    };

    fetch(`${Config.API_ENDPOINT}/users/${TokenService.readJwtToken().user_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(userPatch),
    })
      .then(res => {
        if (!res.ok){
          return res
            .json()
            .then(e => Promise.reject(e));
        }
        this.props.toggle();
        this.context.setUser(userPatch);
      })
      .catch(error => {
        console.error(error);
      });
  }


  updateAboutMe(about_me){
    this.setState({
      about_me: {
        value: about_me,
        touched: true
      }
    });
  }
  validateAboutMe(){
    const aboutMe = this.state.about_me.value.trim();
    const minLength = 10;

    if (aboutMe.length === 0){
      return 'About Me is required';
    } else if (aboutMe.length < minLength){
      return `About Me must be at least ${minLength} characters in length`;
    }
  }

  updateImgLink(img_link){
    this.setState({
      img_link: {
        value: img_link,
        touched: false
      }
    });
  }
  validateImgLink(){
    const imgLink = this.state.img_link.value.trim();

    if (!imgLink.startsWith("https:")){
      return 'Please make sure to link to a valid image URL';
    }
  }

  cancelEdit = () => {
    this.onSubmitSuccess();
  }
  renderForm(){
    const aboutMeError = this.validateAboutMe();
    const imgLinkError = this.validateImgLink();

    return (
      <form
          id="EditProfileForm"
          onSubmit={e => this.handleSubmit(e)}
        >
          <fieldset>
            <legend>
              Edit Profile
            </legend>
            <div className="inputSect">
              <label htmlFor="profileImgLink">Profile Image Link:</label>
              {this.state.img_link.touched && (
                <ValidationError message={imgLinkError} />
              )}
              <input
                required
                type="text"
                name="profileImgLink"
                id="profileImgLink"
                onChange={e => this.updateImgLink(e.target.value)}
              />
            </div>
            <div className="inputSect">
              <label htmlFor="aboutMe">About Me:</label>
              {this.state.about_me.touched && (
                <ValidationError message={aboutMeError} />
              )}
              <textarea
                required
                type="text"
                name="aboutMe"
                id="aboutMe"
                onChange={e => this.updateAboutMe(e.target.value)}
              />
            </div>

            <button
              className="btn"
              onClick={() => this.state.visible = false}
            >
              Cancel
            </button>

            <input
              type="submit"
              value="Submit"
              className="btn"
            />
          </fieldset>
        </form>
    )
  }

  render() {
    return(
      <>
        {this.state.visible
          ? this.renderForm()
          : <></>
        }
      </>
    )
  }
}

export default EditProfileForm;
