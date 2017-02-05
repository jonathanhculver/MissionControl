import React, { Component } from 'react';
import styles from './ControlCenterComponent.module.scss';
import cssModules from 'react-css-modules';
import TileComponent from '../../components/TileComponent/TileComponent';

const ControlCenterComponent = (props) => {
  const tiles = props.tiles.map((index) => {
    return <TileComponent key={index} />
  });

  return (
    <div className={`row ${styles.container}` }>
      {tiles}
    </div>
  );
};

export default cssModules(ControlCenterComponent, styles);
