import React, { Component } from 'react';

import './ProfilePage.css';
import Context from '../../Context';

import RankMeter from '../RankMeter/RankMeter.js';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

export class ProfilePage extends Component {
  static contextType = Context;

  // componentDidMount(){
  //   this.context.handleSuccessfulLogin();
  // }
  numFavorsGivenToUser = () => {
    // tracks total favors asked by user of others, and asked by others of user
    let count = 0;
    let userFavors = this.context.favors
      .filter(f => f.to_user_id === this.context.user.id);

    userFavors.forEach(f => {
      count++;
    });

    return count;
  }
  numFavorsUserGaveOut = () => {
    // returns total favors asked of others by user
    let count = 0;
    let askedFavors = this.context.favors
      .filter(f => f.from_user_id === this.context.user.id);

    askedFavors.forEach(f => {
      count++;
    });

    return count;
  }
  numFavorsUserCompleted = () => {
    // returns total favors asked by others from user, that user has marked 'complete'
    let count = 0;
    let userFavors = this.context.favors
      .filter(f => f.to_user_id === this.context.user.id);

    userFavors.forEach(f => {
      if (f.completed){
        count++;
      }
    });

    return count;
  }
  numFavorsUserCancelled = () => {
    // returns total favors asked by others from user, that user has marked 'cancelled'
    let count = 0;
    let userFavors = this.context.favors
      .filter(f => f.to_user_id === this.context.user.id);

    userFavors.forEach(f => {
      if (f.cancelled){
        count++;
      }
    });

    return count;
  }
  numFavorsUserHasLeftToDo = () => {
    // returns total count of favors asked by others from user, that user has not marked 'complete' or 'cancelled'
    let count = 0;
    let userFavors = this.context.favors
      .filter(f => 
        f.to_user_id === this.context.user.id
        && f.completed === false
        && f.cancelled === false
      );

    userFavors.forEach(f => {
      count++;
    });

    return count;
  }
  numUserFavorsOthersHaveLeftToDo = () => {
    // returns total favors asked of others from user
    let count = 0;
    let favorsAsked = this.context.favors
      .filter(f => 
        f.from_user_id === this.context.user.id
        && f.completed === false
        && f.cancelled === false  
      );
    
    favorsAsked.forEach(f => {
      count++;
    });

    return count;
  }
  numUserFavorsCancelledByOthers = () => {
    // counts how many favors asked of others by user that have been marked 'cancelled'
    let count = 0;
    let favorsAsked = this.context.favors
      .filter(f => f.from_user_id === this.context.user.id);

    favorsAsked.forEach(f => {
      if (f.cancelled){
        count++;
      }
    });

    return count;
  }
  numUserFavorsCompletedByOthers = () => {
    // counts how many favors asked of others by user that have been marked 'completed'
    let count = 0;
    let favorsAsked = this.context.favors
      .filter(f => f.from_user_id === this.context.user.id);
    
    favorsAsked.forEach(f => {
      if (f.completed){
        count++;
      }
    });

    return count;
  }

  render() {
    const { user } = this.context;

    return (
      <div id="ProfilePage">
        <ProfileHeader />

        <div id="profileData">
          <div>
            <h1>{ user.username }</h1>
            <p>{ user.about_me }</p>
          </div>
        </div>
        
        <RankMeter />

        <div id="profileFavors">
          <div className="total in">
            <h3>Total Favors Asked of Me by Others: { this.numFavorsGivenToUser() }</h3>
            <div className="reminder done">
              <h4>Favors I've Completed: { this.numFavorsUserCompleted() }</h4>
            </div>
            <div className="reminder toDo">
              <h4>Favors I Still Have To Do: { this.numFavorsUserHasLeftToDo() }</h4>
            </div>
            <div className="reminder cancelled">
              <h4>Favors I've Cancelled: { this.numFavorsUserCancelled() }</h4>
            </div>
          </div>
          
          <div className="total out">
            <h3>Total Favors I've Asked Of Others: { this.numFavorsUserGaveOut() }</h3>
            <div className="reminder done4me">
              <h4>Favors Completed by Others: { this.numUserFavorsCompletedByOthers() }</h4>
            </div>
            <div className="reminder pending">
              <h4>Favors Left To Do for Others: { this.numUserFavorsOthersHaveLeftToDo() }</h4>
            </div>
            <div className="reminder cancelled4me">
              <h4>Favors Cancelled by Others: { this.numUserFavorsCancelledByOthers() }</h4>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default ProfilePage;
