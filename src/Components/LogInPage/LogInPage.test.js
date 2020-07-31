import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import LogInPage from './LogInPage';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <LogInPage/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
