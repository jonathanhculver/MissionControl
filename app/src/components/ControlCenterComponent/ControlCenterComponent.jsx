import React, { Component } from 'react';
import styles from './ControlCenterComponent.module.scss';
import cssModules from 'react-css-modules';

const ControlCenterComponent = (props) => {
  return (
    <div className={styles.container}> Control Center </div>
  );
};

export default cssModules(ControlCenterComponent, styles);
