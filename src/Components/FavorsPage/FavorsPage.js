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
        <div className="favorList">
          <h1 id="forMe">Favors To Do:</h1>

          <ul>
            {favors.map(f => {
              let favorIn;
              if (
                f.to_user_id === this.context.user.id
                && f.cancelled === false
                && f.completed === false
              ){
                favorIn = 
                  <FavorIn
                    id={f.id}
                    key={f.id}
                    favor={f}
                  />
              }
              return favorIn;
            })}
          </ul>
        </div>
        
        <div className="favorList">
          <h1 id="forThem">Favors For Others:</h1>
          <Link to="/new-favor">
            <button className="fav btn">Create New</button>
          </Link>
            <ul>
              {favors.map(f => {
                let favorOut;
                if (
                  f.from_user_id === this.context.user.id
                  && f.completed === false
                  && f.cancelled === false
                ){
                  favorOut =
                    <FavorOut
                      id={f.id}
                      key={f.id}
                      favor={f}
                    />
                }
                return favorOut;
              })}
            </ul>
        </div>
      </div>
    )
  }
}

export default FavorsPage;
