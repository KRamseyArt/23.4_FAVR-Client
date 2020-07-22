import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './FavorsPage.css'
import Context from '../../Context'

import FavorIn from '../FavorIn/FavorIn'
import FavorOut from '../FavorOut/FavorOut'

export class FavorsPage extends Component {
  static contextType = Context;

  renderFavors = () => {
    let userFavors = this.context.favors.filter(f => {
      if (f.to_user_id === this.context.user.id){
        return (
          <FavorIn
            favorTitle={f.favor_title}
            askedBy={f.from_user_id}
            dateAsked={f.date_asked}
          />
        )
      }
    });

    return userFavors;
  }

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
                    title={f.favor_title}
                    from={f.from_user_id}
                    date={f.date_asked}
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
                      title={f.favor_title}
                      to={f.to_user_id}
                      date={f.date_asked}
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

export default FavorsPage
