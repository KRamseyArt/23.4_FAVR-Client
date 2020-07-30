import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

export class NotFoundPage extends Component {
  render() {
    return (
      <div id="notFound">
        <div>
          <h3>404 NOT FOUND</h3>
          <p>The page you are searching for does not exist...</p>
        </div>

        <Link
          to={"/"}
        >
          <button
            className="btn"
          >
            Return Home
          </button>
        </Link>
      </div>
    );
  }
}

export default NotFoundPage;
