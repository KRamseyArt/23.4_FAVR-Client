import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import NewFavorPage from './NewFavorPage';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <NewFavorPage/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
