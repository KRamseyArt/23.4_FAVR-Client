import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import RankMeter from './RankMeter';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <RankMeter/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
