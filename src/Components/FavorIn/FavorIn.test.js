import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FavorIn from './FavorIn';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <FavorIn/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
