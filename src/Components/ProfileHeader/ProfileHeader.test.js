import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ProfileHeader from './ProfileHeader';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <ProfileHeader/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
