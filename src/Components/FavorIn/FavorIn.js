import React, { Component } from 'react'

import './FavorIn.css'
import STORE from '../../STORE'
import Context from '../../Context'

export class FavorIn extends Component {
  static contextType = Context;
  
  static defaultProps = {
    title: "",
    from: null,
    date_asked: null
  }

  getUsername = () => {
    let askedByID = STORE.users.filter(u =>
        u.id === this.props.from
      )[0]

    return askedByID.username;
  }

  render() {
    const favor = this.props;
    const askedBy = this.getUsername();

    return (
      <li className="Favor">
        <button
          className="favorComplete"
          onClick={() => this.context.completeFavor(favor.id)}
        >
          O
        </button> 
        <div className="favorInfo">
        <p>{askedBy} Asked You to...</p>
        <h4>{favor.title}</h4>
          
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

export default FavorIn
