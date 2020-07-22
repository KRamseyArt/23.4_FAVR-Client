import React, { Component } from 'react'

import './ProfilePage.css'
import Context from '../../Context'

import RankMeter from '../RankMeter/RankMeter.js'
import ProfileHeader from '../ProfileHeader/ProfileHeader'

export class ProfilePage extends Component {
  static contextType = Context;

  favorsInTotal = () => {
    let count = 0;
    let userFavors = this.context.favors
      .filter(f => f.to_user_id === this.context.user.id)

    userFavors.forEach(f => {
      count++;
    })

    return count;
  }
  favorsOutTotal = () => {
    let count = 0;
    let askedFavors = this.context.favors
      .filter(f => f.from_user_id === this.context.user.id)

    askedFavors.forEach(f => {
      count++;
    })

    return count;
  }
  favorsCompleted = () => {
    let count = 0;
    let userFavors = this.context.favors
      .filter(f => f.to_user_id === this.context.user.id)
    
    userFavors.forEach(f => {
      if (f.completed){
        count++;
      }
    });

    return count;
  }
  favorsToDo = () => {
    let count = 0;
    let favorsToDo = this.context.favors
      .filter(f => 
        f.to_user_id === this.context.user.id
        && f.completed === false
        && f.cancelled === false
      )

    favorsToDo.forEach(f => {
      count++;
    })

    return count;
  }
  favorsRequested = () => {
    let count = 0;
    let favorsAsked = this.context.favors
      .filter(f => 
        f.from_user_id === this.context.user.id
        && f.completed === false
        && f.cancelled === false  
      )
    
    favorsAsked.forEach(f => {
      count++;
      
    });

    return count;
  }
  favors4Me = () => {
    let count = 0;
    let favorsAsked = this.context.favors
      .filter(f => f.from_user_id === this.context.user.id)
    
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
          <h1>{ user.username }</h1>
          <p>{ user.about_me }</p>
          <RankMeter />
        </div>

        <div id="profileFavors">
          <div className="reminder totalIn">
            <h4>Total Favors Given To Me: { this.favorsInTotal() }</h4>
          </div>
          <div className="reminder done">
            <h4>Favors I've Completed: { this.favorsCompleted() }</h4>
          </div>
          <div className="reminder toDo">
            <h4>Favors I Still Have To Do: { this.favorsToDo() }</h4>
          </div>
          <div className="reminder totalOut">
            <h4>Total Favors I've Asked Of Others: { this.favorsOutTotal() }</h4>
          </div>
          <div className="reminder pending">
            <h4>Favors Asked of Others: { this.favorsRequested() }</h4>
          </div>
          <div className="reminder done4me">
            <h4>Favors Completed by Others: { this.favors4Me() }</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage
