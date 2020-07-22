import React, { Component } from 'react'

import './RankMeter.css'
import Context from '../../Context'
import { useParams } from 'react-router';

export class RankMeter extends Component {
  static contextType = Context;


  getTotalFavors = () => {
    const favorsFromMe = this.context.favors.filter(f => 
      f.from_user_id === this.context.user.id
    )
    const favorsToMe = this.context.favors.filter(f =>
      f.to_user_id === this.context.user.id  
    )
    // console.log(`Total Favors: ${favorsFromMe.length + favorsToMe.length}`)
    return favorsFromMe.length + favorsToMe.length;
  }
  percentDone = () => {
    let totalFavors = this.getTotalFavors();
    let favorsGivenToMe = this.context.favors.filter(f => 
      f.to_user_id === this.context.user.id
    )
    let favorsDone = favorsGivenToMe.filter(f =>
      f.completed === true
    )
    console.log(`Percent of Favors I Completed: ${Math.floor(favorsDone.length / totalFavors * 100)}%`)
    return Math.floor(favorsDone.length / totalFavors * 100);
  }
  percentToDo = () => {
    let totalFavors = this.getTotalFavors();
    let favorsAsked = this.context.favors.filter(f => 
      f.to_user_id === this.context.user.id
      && f.completed === false
      && f.cancelled === false
    )
    console.log(`Percent of Favors I Need to Do: ${favorsAsked.length/totalFavors * 100}%`);
    return Math.floor(favorsAsked.length/totalFavors * 100);
  }
  percentPending = () => {
    let totalFavors = this.getTotalFavors();
    let favorsAsked = this.context.favors.filter(f => 
      f.from_user_id === this.context.user.id
      && f.completed === false
      && f.cancelled === false
    )

    console.log(`Percent of Favors I've Asked for: ${favorsAsked.length/totalFavors * 100}%`)
    return Math.floor(favorsAsked.length/totalFavors * 100);
  }
  percentDone4Me = () => {
    let totalFavors = this.getTotalFavors();
    let favorsAsked = this.context.favors.filter(f => 
      f.from_user_id === this.context.user.id
    )
    let favorsDone = favorsAsked.filter(f =>
      f.completed === true
    )
    console.log(`Percent of Favors Others Completed For Me: ${Math.floor(favorsDone.length / totalFavors * 100)}%`)
    return Math.floor(favorsDone.length / totalFavors * 100);
  }

  getOverallRank() {
    let title = "";

    if (this.percentDone() + this.percentToDo() > this.percentPending() + this.percentDone4Me()){
      title = "Do-er"
    } else if (this.percentDone() + this.percentToDo() < this.percentPending() + this.percentDone4Me()) {
      title = "Task-er"
    } else {
      title = "Equalizer"
    }

    return title;
  }
  
  render() {
    return (
      <div id="RankMeter">
        <div
          id="Completed"
          className="meter"
          style={{ width: this.percentDone()+"%" }}
        />
        <div
          id="ToDo"
          className="meter"
          style={{ width: this.percentToDo()+"%" }}
        />

        <div id="rankBadge">
          <h4>
            {this.percentDone() + this.percentToDo() > this.percentPending() + this.percentDone4Me()
              ? `${this.getOverallRank()}: ${this.percentDone() + this.percentToDo()}%`
              : `${this.getOverallRank()}: ${this.percentPending() + this.percentDone4Me()}%`
            }
          </h4>
        </div>

        <div
          id="Pending"
          className="meter"
          style={{ width: this.percentPending()+"%" }}
        />
        <div
          id="Done4Me"
          className="meter"
          style={{ width: this.percentDone4Me()+"%" || 0 }}
        />
      </div>
    )
  }
}

export default RankMeter