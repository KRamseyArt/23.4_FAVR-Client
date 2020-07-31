import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FavorsPage.css';
import Context from '../../Context';

import FavorIn from '../FavorIn/FavorIn';
import FavorOut from '../FavorOut/FavorOut';

export class FavorsPage extends Component {
  static contextType = Context;

  render() {

    const { favors } = this.context;

    return (
      <div id="FavorsPage">
        <h1>Favors To Do:</h1>
        <div className="favorList">
          <ul>
            {favors.map(f => {
              if (
                f.to_user_id === this.context.user.id
                && f.cancelled === false
                && f.completed === false
              ){
                return (
                  <FavorIn
                    id={f.id}
                    key={f.id}
                    favor={f}
                  />
                )
              }
            })}
          </ul>
        </div>

        <h1>Favors For Others:</h1>
        <Link to="/new-favor">
          <button className="btn">Create New</button>
        </Link>

        <div className="favorList">
            <ul>
              {favors.map(f => {
                if (
                  f.from_user_id === this.context.user.id
                  && f.completed === false
                  && f.cancelled === false
                ){
                  return (
                    <FavorOut
                      id={f.id}
                      key={f.id}
                      favor={f}
                    />
                  )
                }
              })}
            </ul>
        </div>
      </div>
    )
  }
}

export default FavorsPage;
