import React, { Component } from 'react';

import './AboutPage.css';

export class AboutPage extends Component {
  render() {
    return (
      <div id="AboutPage">
        <div id="profileCard">
          <div
            id="profileImg"
          />

          <div id="profileContact">
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
          <h3>About FAVR</h3>
          <ul>
            <li>As a Software Engineer with a background in Illustration and UI / UX design, Kalin Ramsey takes pride in his abilty to create apps that are both functional and attractive.</li>
            <li>FAVR was created as a way to help users keep track of the various tasks that they negotiate with their friends on a day-to-day basis.</li>
            <li>To address a mass-spread bystander effect created by the partial anonymity of social networking, FAVR is a platform that allows users to target specific individuals and ask them directly.</li>
            <li>Being able to see the balance between favors performed for and by specific people also creates more incentive to accept a favor from someone, or provides justification in rejecting their proposal.</li>
            <li>Provided a visual representaion of the give-and-take relation with others, users can be better prepared to avoid being taken advantage of, or the monitor their own dependence on others.</li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default AboutPage;
