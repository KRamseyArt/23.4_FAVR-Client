import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <p id="copyright">© Kalin Ramsey</p>
        
        <Link
          to="/about"
          id="aboutBtn"
        >
          <button className="btn">
            About the Author
          </button>
        </Link>
      </footer>
    );
  }
}

export default Footer;
