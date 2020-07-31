import React from 'react';

const Context = React.createContext({
  user: {},
  favors: [],
  allUsers: [],
  setUser: () => {},
  addFavor: () => {},
  setFavors: () => {},
  patchUser: () => {},
  cancelFavor: () => {},
  deleteFavor: () => {},
  getAllUsers: () => {},
  completeFavor: () => {},
  handleSuccessfulLogin: () => {},
})

export default Context;