import React, { Component } from 'react';

import './FavorIn.css';
import Context from '../../Context';

export class FavorIn extends Component {
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
    viewDetails: false,
  }

  getUsername = () => {    
    let askedByID = this.context.allUsers.filter(u => 
      u.id === this.props.favor.from_user_id
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
    const askedBy = this.getUsername();
    const formattedDate = new Date(favor.assigned_date).toLocaleDateString();

    return (
      <li className="Favor">
        <div className="simpleTag">
          <button
            className="favorComplete"
            onClick={() => this.context.completeFavor(favor)}
          >
           <span className="fa fa-thumbs-up" />
          </button> 
          <div className="favorInfo">
            <p className="dateAsked">{formattedDate}</p>
            <div className="infoText">
              <p><span className="altUser">{askedBy}</span> asked you to...</p>
              <h4>{favor.favor_title}</h4>
            </div>
            
            <button
              className="details btn"
              onClick={() => this.toggleDetails()}
            >
              View Details...
            </button>
          </div>
          <button
            className="favorQuit"
            onClick={() => this.context.cancelFavor(favor)}
          >
            <span className="fa fa-thumbs-down" />
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

export default FavorIn;
