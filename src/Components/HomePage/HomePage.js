import React, { Component } from 'react'

import './HomePage.css';
import Hero from '../Hero/Hero';

import Context from '../../Context'

export class HomePage extends Component {
  static contextType = Context;

  render() {
    return (
      <div id="HomePage">
        <Hero />
        <ul id="HomeInfo">
          <li>
            <h3>Heading 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, nisi vel aliquet cursus, nunc augue sodales est, sit amet consequat elit libero et tellus. Donec mollis ipsum sed sollicitudin aliquet. Maecenas sem purus, hendrerit ac pharetra in, elementum eget ex. Cras tincidunt risus tincidunt, consectetur turpis eget, dictum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet dui magna, iaculis gravida ipsum aliquam nec. Fusce finibus cursus ante, ac mollis mi lobortis et.</p>
          </li>
          <li>
            <h3>Heading 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, nisi vel aliquet cursus, nunc augue sodales est, sit amet consequat elit libero et tellus. Donec mollis ipsum sed sollicitudin aliquet. Maecenas sem purus, hendrerit ac pharetra in, elementum eget ex. Cras tincidunt risus tincidunt, consectetur turpis eget, dictum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet dui magna, iaculis gravida ipsum aliquam nec. Fusce finibus cursus ante, ac mollis mi lobortis et.</p>
          </li>
          <li>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, nisi vel aliquet cursus, nunc augue sodales est, sit amet consequat elit libero et tellus. Donec mollis ipsum sed sollicitudin aliquet. Maecenas sem purus, hendrerit ac pharetra in, elementum eget ex. Cras tincidunt risus tincidunt, consectetur turpis eget, dictum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet dui magna, iaculis gravida ipsum aliquam nec. Fusce finibus cursus ante, ac mollis mi lobortis et.</p>
          </li>
          <li>
            <h3>Heading 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, nisi vel aliquet cursus, nunc augue sodales est, sit amet consequat elit libero et tellus. Donec mollis ipsum sed sollicitudin aliquet. Maecenas sem purus, hendrerit ac pharetra in, elementum eget ex. Cras tincidunt risus tincidunt, consectetur turpis eget, dictum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet dui magna, iaculis gravida ipsum aliquam nec. Fusce finibus cursus ante, ac mollis mi lobortis et.</p>
          </li>
          <li>
            <h3>Heading 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, nisi vel aliquet cursus, nunc augue sodales est, sit amet consequat elit libero et tellus. Donec mollis ipsum sed sollicitudin aliquet. Maecenas sem purus, hendrerit ac pharetra in, elementum eget ex. Cras tincidunt risus tincidunt, consectetur turpis eget, dictum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet dui magna, iaculis gravida ipsum aliquam nec. Fusce finibus cursus ante, ac mollis mi lobortis et.</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default HomePage