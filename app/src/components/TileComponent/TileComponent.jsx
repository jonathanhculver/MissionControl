import React from 'react';
import styles from './TileComponent.module.scss';
import cssModules from 'react-css-modules';

const TileComponent = (props) => {
  return (
    <div className={`small-3 columns`}>
      <div className={styles.tile}></div>
    </div>
  );
}

export default cssModules(TileComponent, styles);
