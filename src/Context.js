import React from 'react';

const Context = React.createContext({
  user: {},
  favors: [],
  setUser: () => {},
  addFavor: () => {},
  setFavors: () => {},
  cancelFavor: () => {},
  completeFavor: () => {},
})

export default Context;