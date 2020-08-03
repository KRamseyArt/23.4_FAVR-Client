import React, { Component } from 'react';

import './RankMeter.css';
import Context from '../../Context';

export class RankMeter extends Component {
  static contextType = Context;


  getTotalFavors = () => {
    // returns total favors asked by user of others(out), and asked by others of user(in)
    const favorsFromMe = this.context.favors.filter(f => 
      f.from_user_id === this.context.user.id
    );
    const favorsToMe = this.context.favors.filter(f =>
      f.to_user_id === this.context.user.id  
    );
    return favorsFromMe.length + favorsToMe.length;
  }
  percentDone = () => {
    // returns percent of favors user has completed out of total favors in/out
    let totalFavors = this.getTotalFavors();
    let favorsGivenToMe = this.context.favors.filter(f => 
      f.to_user_id === this.context.user.id
    );
    let favorsDone = 0;
    favorsGivenToMe.forEach(f => {
      if (f.completed){
        favorsDone++;
      }
    })
    // console.log(`Percent of Favors I Completed: ${Math.floor(favorsDone.length / totalFavors * 100)}%`);
    return Math.ceil(favorsDone / totalFavors * 100);
  }
  percentToDo = () => {
    // returns percent of favors user has left to do (not marked 'completed' or 'cancelled') out of total favors in/out
    let totalFavors = this.getTotalFavors();
    let favorsAsked = this.context.favors.filter(f => 
      f.to_user_id === this.context.user.id
      && f.completed === false
      && f.cancelled === false
    );
    // console.log(`Percent of Favors I Need to Do: ${favorsAsked.length/totalFavors * 100}%`);
    return Math.ceil(favorsAsked.length/totalFavors * 100);
  }
  percentCancelled = () => {
    // returns percent of favors user has cancelled
    let totalFavors = this.getTotalFavors();
    let favorsAskedCancelled = this.context.favors.filter(f =>
      f.to_user_id === this.context.user.id
      && f.cancelled === true  
    );

    return Math.ceil(favorsAskedCancelled.length / totalFavors * 100);
  }
  percentPending = () => {
    // returns percent of favors user has asked of others out of total favors in/out
    let totalFavors = this.getTotalFavors();
    let favorsAsked = this.context.favors.filter(f => 
      f.from_user_id === this.context.user.id
      && f.completed === false
      && f.cancelled === false
    );

    // console.log(`Percent of Favors I've Asked for: ${favorsAsked.length/totalFavors * 100}%`);
    return Math.ceil(favorsAsked.length/totalFavors * 100);
  }
  percentDone4Me = () => {
    // returns percent of total favors in/out that user asked of others that were marked 'completed'
    let totalFavors = this.getTotalFavors();
    let favorsAsked = this.context.favors.filter(f => 
      f.from_user_id === this.context.user.id
    );
    let favorsDone = favorsAsked.filter(f =>
      f.completed === true
    );
    // console.log(`Percent of Favors Others Completed For Me: ${Math.floor(favorsDone.length / totalFavors * 100)}%`);
    return Math.ceil(favorsDone.length / totalFavors * 100);
  }
  percentCancelled4Me = () => {
    let totalFavors = this.getTotalFavors();
    let favorsAsked = this.context.favors.filter(f =>
      f.from_user_id === this.context.user.id
      && f.cancelled === true  
    );

    return Math.ceil(favorsAsked.length / totalFavors * 100);
  }

  getOverallRank() {
    let title = "";

    if (this.percentDone() + this.percentToDo() + this.percentCancelled() > this.percentPending() + this.percentDone4Me() + this.percentCancelled4Me()){
      title = "Do-er";
    } else if (this.percentDone() + this.percentToDo() + this.percentCancelled() < this.percentPending() + this.percentDone4Me() + this.percentCancelled4Me()) {
      title = "Task-er";
    } else if (this.percentDone() + this.percentToDo() + this.percentCancelled()  === this.percentPending() + this.percentDone4Me() + this.percentCancelled4Me()) {
      title = "Equalizer";
    } else {
      title = "Newbie";
    }

    return title;
  }
  
  render() {
    console.log(this.getTotalFavors());
    return (
      <div id="RankMeter">
        <div
          id="Cancelled"
          className="meter"
          style={{ width: this.percentCancelled()+"%" }}
        />
        <div
          id="ToDo"
          className="meter"
          style={{ width: this.percentToDo()+"%" }}
        />
        <div
          id="Completed"
          className="meter"
          style={{ width: this.percentDone()+"%" }}
        />
        

        <div id="rankBadge">
          <h4>
            {this.percentDone() + this.percentToDo() + this.percentCancelled() > this.percentPending() + this.percentDone4Me() + this.percentCancelled4Me()
              ? `${this.getOverallRank()}: {${this.percentDone() + this.percentToDo() + this.percentCancelled()}%`
              : `${this.getOverallRank()}: ${(this.percentPending() + this.percentDone4Me() + this.percentCancelled4Me()) || 0}%`
            }
          </h4>
        </div>

        
        <div
          id="Done4Me"
          className="meter"
          style={{ width: this.percentDone4Me()+"%" || 0 }}
        />
        <div
          id="Pending"
          className="meter"
          style={{ width: this.percentPending()+"%" }}
        />
        <div
          id="Cancelled4Me"
          className="meter"
          style={{ width: this.percentCancelled4Me()+"%"}}
        />
      </div>
    )
  }
}

export default RankMeter;
