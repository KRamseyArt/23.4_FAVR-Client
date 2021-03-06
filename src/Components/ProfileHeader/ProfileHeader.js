import React, { Component } from 'react';

import './ProfileHeader.css';
import Context from '../../Context';

import EditProfileForm from '../EditProfileForm/EditProfileForm';

export class ProfileHeader extends Component {
  static contextType = Context;
  
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      height: "150px"
    };
  }

  renderEdit = () => {
    return <span className="fa fa-edit" />;
  }
  renderClose = () => {
    return <span className="fa fa-times" />;
  }
  toggleEditProfile = () => {
    this.setState({ edit: !this.state.edit });
  }
  editProfile = () => {
    if (this.state.edit === true){
      return (
        <>
          <button
            id="EditProfileBtnClose"
            onClick={() => this.toggleEditProfile()}
          >
            {!this.state.edit ? this.renderEdit() : this.renderClose()}
          </button>
          <EditProfileForm
            toggle={this.toggleEditProfile}
          />
        </>
      );
    } else {
      return (
        <button
          id="EditProfileBtn"
          onClick={() => this.toggleEditProfile()}
        >
          {!this.state.edit ? this.renderEdit() : this.renderClose()}
        </button>
      );
    }
  }

  getStyle = () => {
    if (this.context.user.img_link){
      return ({
         backgroundImage: `url("${this.context.user.img_link}")`,
         backgroundSize: 'cover',
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         width: "100%",
         height: `${this.state.height}`,
         position: "relative"
      });
    } else {
      return ({
        backgroundImage: `url("https://wallpapercave.com/wp/yKBmQ7B.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: `${this.state.height}`,
        position: "relative" 
     });
    }
  }

  render() {
    return (
      <div
        id="ProfileHeader"
        style={ this.getStyle() }  
      >
        { this.editProfile() }
      </div>
    );
  }
}

export default ProfileHeader;

