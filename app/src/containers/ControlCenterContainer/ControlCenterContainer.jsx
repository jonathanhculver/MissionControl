import React, { Component } from 'react';
import ControlCenterComponent from '../../components/ControlCenterComponent/ControlCenterComponent';
import styles from './ControlCenterContainer.module.scss';
import cssModules from 'react-css-modules';


// Containers are used for managing state.
// Whenever possible, write components as stateless functional
// components and use classes for stateful containers.
class ControlCenterContainer extends Component {
  constructor(props) {
    super(props);
    this.tiles = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11];
  }

  render() {
    return (
      <ControlCenterComponent tiles={this.tiles}/>
    );
  }
}

export default ControlCenterContainer;
