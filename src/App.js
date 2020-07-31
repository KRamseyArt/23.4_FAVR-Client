import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import STORE from './STORE';
import Config from './Config';
import Context from './Context';

import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import LogInPage from './Components/LogInPage/LogInPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import FavorsPage from './Components/FavorsPage/FavorsPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import NewFavorPage from './Components/NewFavorPage/NewFavorPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Footer from './Components/Footer/Footer';
import TokenService from './Services/token-service';
import idleService from './Services/idle-service';


export class App extends Component {
  state = {
    user: {},
    allUsers: [],
    favors: []
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentWillUnmount() {
    idleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    idleService.unRegisterIdleResets();

    this.forceUpdate();
  }
  
  componentDidMount() {
    idleService.setIdleCallback(this.logoutFromIdle);
    
    if (TokenService.hasAuthToken()){
      idleService.registerIdleTimerResets();
      this.handleSuccessfulLogin();
    }

    fetch(`${Config.API_ENDPOINT}/users`)
      .then(res => {
        
        if(!res.ok){
          return res
            .json()
            .then(e => Promise.reject(e));
        }

        return res.json()
      })
      .then(allUsers => {
        this.getAllUsers(allUsers);
      })
      .catch(error => {
        console.error({error});
      });
  }

  setUser = (user) => {
    this.setState({
      user: {...this.state.user, ...user}
    });
  }
  getAllUsers = (allUsers) => {
    this.setState({
      allUsers
    });
  }
  addFavor = (favor) => {
    this.setState({
      favors: [...this.state.favors, favor]
    });
  }
  setFavors = (favors) => {
    this.setState({
      favors
    });
  }
  cancelFavor = (favor) => {
    const favorPatch = {
      id: favor.id,
      completed: favor.completed,
      cancelled: true,
      end_date: new Date()
    }

    console.log(favorPatch);

    fetch (`${Config.API_ENDPOINT}/favors/${favor.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify( favorPatch )
        
    })
      .then(res => {
        this.setState({
          favors: this.state.favors.map(f =>{
            if (f.id === favorPatch.id){
              return favorPatch;
            }
            return f;
          })
        });
      })
      .catch(error => {
        console.error(error);
      })
  }
  deleteFavor = (favorId) => {
    fetch (`${Config.API_ENDPOINT}/favors/${favorId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        this.setState({
          favors: this.state.favors.filter(f =>
            f.id !== favorId  
          )
        });
      })
      .catch(error => {
        console.error(error);
      })
  }
  completeFavor = (favor) => {
    const favorPatch = {
      id: favor.id,
      completed: true,
      cancelled: favor.cancelled,
      end_date: new Date()
    }

    console.log(favorPatch);

    fetch (`${Config.API_ENDPOINT}/favors/${favor.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify( favorPatch )
        
    })
      .then(res => {
        this.setState({
          favors: this.state.favors.map(f =>{
            if (f.id === favorPatch.id){
              return favorPatch;
            }
            return f;
          })
        });
      })
      .catch(error => {
        console.error(error);
      })
  }

  handleSuccessfulLogin = () => {
    if (TokenService.hasAuthToken()){
      const ENDPOINT = Config.API_ENDPOINT;

      Promise.all([
        fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}`),
        fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}/favors`),
      ])
        .then(([ userRes, favorsRes]) => {
          if (!userRes.ok){
            return userRes
              .json()
              .then(e => Promise.reject(e));
          }
          if (!favorsRes.ok){
            return favorsRes
              .json()
              .then(e => Promise.reject(e));
          }
          return Promise.all([userRes.json(), favorsRes.json()]);
        })
        .then(([ user, favors ]) => {
          this.setUser(user);
          this.setFavors(favors);
        })
        .catch(error => {
          console.error({ error });
        })
    }
  }
  render() {
    console.log(this.state);

    const contextValue = {
      user: this.state.user,
      allUsers: this.state.allUsers,
      favors: this.state.favors,
      addFavor: this.addFavor,
      setUser: this.setUser,
      setFavors: this.setFavors,
      patchUser: this.patchUser,
      getAllUsers: this.getAllUsers,
      cancelFavor: this.cancelFavor,
      deleteFavor: this.deleteFavor,
      completeFavor: this.completeFavor,
      handleSuccessfulLogin: this.handleSuccessfulLogin,
    };
    
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
              path='/users/:userId'
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
            <Route
              component={ NotFoundPage }
            />
          </Switch>

          <Footer />
        </main>
      </Context.Provider>
    )
  }
}

export default App;
