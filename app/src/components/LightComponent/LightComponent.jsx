import React, { Component } from 'react';
import styles from './LightComponent.module.scss';
import cssModules from 'react-css-modules';
import classNames from 'classnames/bind';

const styleNames = classNames.bind(styles);

class LightComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { on: false };
  }

  render() {
    const tileClasses = styleNames(styles.container, {
      on: this.state.on,
      off: !this.state.on
    });

    return (
      <div className={tileClasses} onClick={this.onTileClick}>
        <div className={styles.title}>Living Room</div>
        <div className="icon fi-lightbulb"></div>
      </div>
    );
  }

  onTileClick = (event) => {
    this.setState({ on: !this.state.on });
  }
}

export default LightComponent;
