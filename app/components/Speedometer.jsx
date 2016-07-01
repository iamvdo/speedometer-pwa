import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store.js';

import Switch from 'react-switch-button';

class Speedometer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
      accuracy: 10,
      unit: true,
      geoStatus: false
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (p) => this._onPosition(p),
        (err) => this._onErrorPosition(err),
        { enableHighAccuracy: true }
      );
    }
  }

  render() {
    const speed = this._setSpeed();
    const geoStatus = this.state.geoStatus ? 'on' : 'off';
    const accuracy = Math.min(this.state.accuracy, 50);
    const angleLimit = 180;
    const angleFactorOne = 1.5;
    const angleFactorTwo = .4;
    let angle = 0;
    if (speed < angleLimit) {
      angle = (speed % angleLimit) * angleFactorOne;
    } else {
      angle = (angleLimit * angleFactorOne) + ((speed - angleLimit) * angleFactorTwo);
    }
    angle = Math.min(angle, 340);
    return (
      <div className="Speedometer">
        <div className="Speedometer-speed">
          <div className="Speedometer-status">
            <div className="Speedometer-accuracy"
                 style={{transform: 'scale(' + accuracy / 40 + ')'}}></div>
            <div className={"Speedometer-led Speedometer-led--" + geoStatus}></div>
          </div>
          {speed}
          <Switch 
            theme="Speedometer-unit"
            name="switch-units"
            label="mph"
            labelRight="km/h"
            checked={this.state.unit ? 'checked' : ''}
            onChange={(e) => this._onSwitch(e)} />
        </div>
        <div className="Speedometer-speedo">
          <div 
            className="Speedometer-arrow"
            style={{transform: 'rotate(' + angle + 'deg)'}}></div>
        </div>
      </div>
    );
  }

  _onPosition(position) {
    this.setState({
      speed: position.coords.speed,
      accuracy: position.coords.accuracy,
      geoStatus: true
    });
  }

  _onErrorPosition(error) {
    this.setState({
      geoStatus: false
    });
  }

  _onSwitch(evt) {
    const checked = evt.currentTarget.checked;
    this.setState({
      unit: checked
    });
  }

  _setSpeed() {
    let speed = this.state.speed;
    // if speed is null OR
    // if accuracy is not accurate
    if (speed == null || this.state.accuracy >= 30) {
      return 0;
    }
    // speed is meter per second, convert kmh
    speed *= 3.6;
    // if !unit, convert to mph
    if ( !this.state.unit ) {
      speed /= 1.609344;
    }
    return parseFloat(speed).toFixed(0);
  }

}

Speedometer.displayName = 'Speedometer';

export default Store(Speedometer, ['unit']);
