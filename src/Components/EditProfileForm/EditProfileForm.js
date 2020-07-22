import React, { Component } from 'react'

import './EditProfileForm.css'
import Context from '../../Context'

export class EditProfileForm extends Component {
  static contextType = Context
  
  constructor(props){
    super(props);
    this.state = {
      edit: true
    }
  }

  toggleEditProfile = () => {
    let { edit } = this.state;
    this.setState({ edit: !this.state.edit });
  }
  editProfile = () => {
    if (this.state.edit === true){
      return <EditProfileForm />
    } else {
      return (
        <button
          id="EditProfileBtn"
          onClick={() => this.toggleEditProfile()}
        >
          +
        </button>
      )
    }
  }

  handleSubmit = (e) => {
    // e.preventDefault;

    // this.toggleEditProfile();
  }

  render() {
    return (
      <form id="EditProfileForm"
        onSubmit={e => this.handleSubmit(e)}
      >
        <fieldset>
          <legend>
            Edit Profile
          </legend>
          <div className="inputSect">
            <label htmlFor="profileImgLink">Profile Image Link:</label>
            <input
              type="text"
              name="profileImgLink"
              id="profileImgLink"
            />
          </div>
          <div className="inputSect">
            <label htmlFor="aboutMe">About Me:</label>
            <textarea
              type="text"
              name="aboutMe"
              id="aboutMe"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn"
          />
        </fieldset>
      </form>
    )
  }
}

export default EditProfileForm
