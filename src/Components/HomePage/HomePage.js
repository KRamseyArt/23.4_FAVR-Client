import React, { Component } from 'react';

import './HomePage.css';
import Hero from '../Hero/Hero';

import Context from '../../Context';

export class HomePage extends Component {
  static contextType = Context;

  render() {
    return (
      <div id="HomePage">
        <Hero />
        <ul id="HomeInfo">
          <li>
            <h3>Welcome to FAVR!</h3>
            <p>FAVR was developed as a way to help users keep track of the various tasks they dole out to others, and that others ask of themselves. By having a visual representation of the frequency with which others depend upon you, users are provided a tool to help gague and manage their social interactions.</p>
          </li>
          <li>
            <h3>The Problem</h3>
            <p>The  psycho-social phenomenon known as <strong>'the bystander effect'</strong> is, in simplest terms, the lack of action taken by a collective group of people during times of crisis, due to each individual assuming that one of the other members of the group will take it upon themselves to act.</p>
            <p>The partial anonymity and impersonal nature of most social media outlets today create a virtual version of this mentality, and allow most users to go about their day unphased when they ignore a broadcast plea for help from someone on their friends list. If you see your sister asking for babysitter recommendations, or a friend asking for a ride somewhere, it is easy to ignore them, assuming that one of their 500 other friends will take note and act on your behalf.</p>
          </li>
          <li>
            <h3>The Solution</h3>
            <p>In a real-life crisis situation, it is advised to point directly to one person in the crowd and assign them a task, such as 'call the police', or 'bring me a pair of scissors'.</p>
            <p>FAVR is a platform that allows users to override the innate bystander effect of social media, and target specific individuals for favors - creating a sense of duty, ownership, and responsibility that is more likely to yield results.</p>
          </li>
          <li>
            <h3>The Results</h3>
            <p>FAVR allows users to keep a record of all the favors they've asked of other users, and see who among their contacts has or has not responded to their requests favorably. By keeping track of which of their friends actually follow through to provide support in times of need, users can more effectively gauge which of their friends are more trustworthy and reliable, vs which tend to request more assistance than they are willing to reciprocate.</p>
          </li>
          
        </ul>
      </div>
    );
  }
}

export default HomePage;
