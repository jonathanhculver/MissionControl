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

  }

  render() {
    return (
      <ControlCenterComponent />
    );
  }
}

export default ControlCenterContainer;
