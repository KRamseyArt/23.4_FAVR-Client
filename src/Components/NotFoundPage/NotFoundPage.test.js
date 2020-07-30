import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

describe (`NotFoundPage Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <NotFoundPage />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
