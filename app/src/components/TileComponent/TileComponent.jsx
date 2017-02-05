import React from 'react';
import styles from './TileComponent.module.scss';
import cssModules from 'react-css-modules';
import LightComponent from '../LightComponent/LightComponent';

const TileComponent = (props) => {
  return (
    <div className={`small-3 columns`}>
      <div className={styles.tile}>
        <LightComponent />
      </div>
    </div>
  );
}

export default cssModules(TileComponent, styles);
