import React, { Component } from 'react';
import styles from './ControlCenterComponent.module.scss';
import cssModules from 'react-css-modules';
import TileComponent from '../../components/TileComponent/TileComponent';

const ControlCenterComponent = (props) => {
  const tiles = props.tiles.map((value, index) => {
    return <TileComponent key={index} name={value} />
  });

  return (
    <div className={`row ${styles.container}` }>
      {tiles}
    </div>
  );
};

export default cssModules(ControlCenterComponent, styles);
