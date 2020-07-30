import React, { Component } from 'react';

import './FavorOut.css';
import STORE from '../../STORE';
import Context from '../../Context';

export class FavorOut extends Component {
  static contextType = Context;

  static defaultProps = {
    title: "",
    to: null,
    date_asked: null
  }

  state = {
    viewDetails: false
  }

  getUsername = () => {
    let askedByID = STORE.users.filter(u =>
      u.id === this.props.to
    )[0];

    return askedByID.username || null;
  }
  toggleDetails = () => {
    this.setState({
      viewDetails: !this.state.viewDetails
    })
  }
  renderDetailTag = () => {
    return (
      <div className="detailTag">
        <p>{this.props.content}</p>
      </div>
    );
  }

  render() {
    const favor = this.props;
    const username = this.getUsername();
    const formattedDate = new Date(favor.assigned_date).toLocaleDateString();

    return (
      <li className="FavorOut">
        <div className="simpleTagOut">
          <div className="favorOutInfo">
          <p className="dateOutAsked">{formattedDate}</p>
            <div className="infoOutText">
              <p>You asked <span className="altUser">{username}</span> to...</p>
              <h4>{favor.title}</h4>  
              
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
            X
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
