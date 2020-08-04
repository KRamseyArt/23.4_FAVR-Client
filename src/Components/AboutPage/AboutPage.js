import React, { Component } from 'react';

import './AboutPage.css';

export class AboutPage extends Component {
  render() {
    return (
      <div id="AboutPage">
        <div id="profileCard">
          

          <div id="profileContact">
            <div id="profileImg"/>
            <h3>Kalin Ramsey</h3>
            <p>Tucson, AZ</p>
          </div>
          

          <ul id="aboutInfo">
            <li>
              <a
                href="https://kramseyart.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  Portfolio
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KRamseyArt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  GitHub
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kalinramsey/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  LinkedIn
                </button>
              </a>
            </li>
            <li>
              <a
                href="mailto:kalinramsey@gmail.com?subject=About%20FAVR%20App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  Email
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div id="aboutDetails">
          <h3>About the Author</h3>
          <ul>
            <li>As a Software Engineer with a background in Illustration, Branding, and UI / UX design, Kalin Ramsey takes pride in his abilty to create apps that are both functional and attractive.</li>
            <li>With an education and mentorship from Thinkful's online Software Engineering program, Kalin is currently exploring new opportunities within the tech sector to combine his technical and artistic craft.</li>
            <li>To get in touch and view recent work, select any option from the menu above</li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default AboutPage;
