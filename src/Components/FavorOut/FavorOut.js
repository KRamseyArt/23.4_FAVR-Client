import React, { Component } from 'react'

import './FavorOut.css'
import STORE from '../../STORE'
import Context from '../../Context'

export class FavorOut extends Component {
  static contextType = Context;

  static defaultProps = {
    title: "",
    to: null,
    date_asked: null
  }

  getUsername = () => {
    let askedByID = STORE.users.filter(u =>
        u.id === this.props.to
      )[0]

    return askedByID.username || null;
  }

  render() {
    const favor = this.props;
    const username = this.getUsername();

    return (
      <li className="Favor">
        <button
          className="favorComplete"
          onClick={() => this.context.completeFavor(favor.id)}
        >
          O
        </button> 
        <div className="favorInfo">
          <h4>{favor.title}</h4>
          <p>Given to user: {username}</p>
          <p>{favor.date_asked}</p>
        </div>
        <button
          className="favorQuit"
          onClick={() => this.context.cancelFavor(favor.id)}
        >
          X
        </button>
      </li>
    )
  }
}

export default FavorOut
