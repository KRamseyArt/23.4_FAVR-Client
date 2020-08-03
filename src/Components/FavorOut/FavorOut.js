import React, { Component } from 'react';

import './FavorOut.css';
import Context from '../../Context';

export class FavorOut extends Component {
  static contextType = Context;

  static defaultProps = {
    favor: {
      favor_title: "",
      favor_content: "",
      from_user_id: null,
      date: new Date()
    }
  }

  state = {
    viewDetails: false
  }

  getUsername = () => {    
    let askedByID = this.context.allUsers.filter(u => 
      u.id === this.props.favor.to_user_id
    )[0] || { username: "Null" };
    

    return askedByID.username;
  }
  toggleDetails = () => {
    this.setState({
      viewDetails: !this.state.viewDetails
    })
  }
  renderDetailTag = () => {
    return (
      <div className="detailTag">
        <p>{this.props.favor.favor_content}</p>
      </div>
    );
  }

  render() {
    const favor = this.props.favor;
    const username = this.getUsername();
    const formattedDate = new Date(favor.assigned_date).toLocaleDateString();

    return (
      <li className="FavorOut">
        <div className="simpleTagOut">
          <div className="favorOutInfo">
          <p className="dateOutAsked">{formattedDate}</p>
            <div className="infoOutText">
              <p>You asked <span className="altUser">{username}</span> to...</p>
              <h4>{favor.favor_title}</h4>  
              
            </div>
            <button
              className="detailsOut btn"
              onClick={() => this.toggleDetails()}
            >
              View Details...
            </button>
          </div>
          <button
            className="favorOutQuit"
            onClick={() => this.context.deleteFavor(favor.id)}
          >
            <span className="fa fa-times" />
          </button>
        </div>
        { this.state.viewDetails
          ? this.renderDetailTag()
          : <></>
        }
      </li>
    )
  }
}

export default FavorOut;
