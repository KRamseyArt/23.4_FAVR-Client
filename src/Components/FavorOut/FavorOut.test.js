import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FavorOut from './FavorOut';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <FavorOut/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
