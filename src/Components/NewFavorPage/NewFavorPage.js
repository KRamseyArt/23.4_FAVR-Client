import React, { Component } from 'react'

import './NewFavorPage.css'
import STORE from '../../STORE'
import Context from '../../Context'

export class NewFavorPage extends Component {
  static contextType = Context;

  constructor(props){
    super(props);
    this.state = {
      favor_title: {
        value: "",
        touched: false
      },
      favor_content: {
        value: "",
        touched: false
      },
      to_user_id: {
        value: "",
        touched: false
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const { favor_title, favor_content, to_user_id } = this.state;
    const from_user_id = this.context.user.id;
    const cancelled = false;
    const completed = false;
    const date_asked = new Date().toLocaleString();
    const id = Math.floor(Math.random() * 1000);

    const newFavor = { id, favor_title, date_asked, favor_content, from_user_id, to_user_id, completed, cancelled };

    console.log(newFavor)

    this.context.addFavor(newFavor);
    this.onSubmitSuccess();
  }

  onSubmitSuccess = () => {
    const { history } = this.props;
    const destination = `/favors`;
    history.push(destination);
  }
  
  render() {
    return (
      <div id="newFavorPage">
        <form
          id="newFavorForm"
          onSubmit={e => this.handleSubmit(e)}
        >
          <fieldset>
            <legend>
              Create a New Favor:
            </legend>
            <div className="inputSect">
              <label htmlFor="favorTitle">
                Title *
              </label>
              <input
                required
                type="text"
                id="favorTitle"
                name="favorTitle"
              />
            </div>
            
            <div className="inputSect">
              <label htmlFor="favorContent">
                Details
              </label>
              <textarea
                type="text"
                id="favorContent"
                name="favorContent"
              />
            </div>

            <div className="inputSect">
              <label htmlFor="favorTo">
                Send To *
              </label>
              <select
                required
                id="favorTo"
                name="favorTo"
              >
                <option>Select a user...</option>
                {STORE.users.map(u => {
                  if (u.id !== this.context.user.id){
                    return (
                      <option key={u.id}>
                        {u.username}
                      </option>  
                    )
                }})}
              </select>
            </div>

            <input
              type="submit"
              className="btn"
              value="Submit"
            />
            
          </fieldset>
        </form>
      </div>
    )
  }
}

export default NewFavorPage
