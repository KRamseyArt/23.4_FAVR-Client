import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import './App.css'
import STORE from './STORE';
import Context from './Context';

import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import LogInPage from './Components/LogInPage/LogInPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import FavorsPage from './Components/FavorsPage/FavorsPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import NewFavorPage from './Components/NewFavorPage/NewFavorPage';
import Footer from './Components/Footer/Footer';


export class App extends Component {
  state = {
    user: {},
    favors: []
  }
  
  componentDidMount() {
    const user = STORE.users[0]
    this.setState({
      user
    });

    const favors = STORE.favors
    this.setState({
      favors
    })
  }

  setUser = (user) => {
    this.setState({
      user
    })
  }
  addFavor = (favor) => {
    this.setState({
      favors: [...this.state.favors, favor]
    })
  }
  setFavors = (favors) => {
    this.setState({
      favors
    })
  }
  cancelFavor = (favorId) => {
    this.state.favors.map(f => {
      if (f.id === favorId){
        f.cancelled = true;
      }
    })
    this.setState({
      favors: [...this.state.favors]
    })
    
    // this.setState({
    //   favors: [...this.state.favors, favor]
    // })
  }
  completeFavor = (favorId) => {
    this.state.favors.map(f => {
      if (f.id === favorId){
        f.completed = true;
      }
    })
    this.setState({
      favors: [...this.state.favors]
    })
    // this.setState({
    //   favors: [...this.state.favors, favor]
    // })
  }

  render() {
    console.log(this.state);

    const contextValue = {
      user: this.state.user,
      favors: this.state.favors,
      addFavor: this.addFavor,
      setUser: this.setUser,
      setFavors: this.setFavors,
      cancelFavor: this.cancelFavor,
      completeFavor: this.completeFavor
    }
    
    return (
      <Context.Provider
        value={ contextValue }
      >
        <main id="App">
          <NavBar />

          <Switch>
            <Route
              path="/new-favor"
              component={ NewFavorPage }
            />
            <Route
              path="/favors"
              component={ FavorsPage }
            />
            <Route
              path='/my-profile'
              component={ ProfilePage }
            />
            <Route
              path='/log-in'
              component={ LogInPage }
            />
            <Route
              path='/sign-up'
              component={ SignUpPage }
            />
            <Route
              path='/about'
              component={ AboutPage }
            />
            <Route 
              exact
              path='/'
              component={ HomePage }
            />
          </Switch>

          <Footer />
        </main>
      </Context.Provider>
    )
  }
}

export default App
