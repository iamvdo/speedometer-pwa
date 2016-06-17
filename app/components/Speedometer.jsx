import React from 'react';
import ReactDOM from 'react-dom';

import Switch from 'react-switch-button';

export default class Speedometer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unit: true
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((p) => this._onPosition(p));
    }
  }

  render() {
    const speed = this._setSpeed();
    return (
      <div className="Speedometer">
        <div className="Speedometer-speed">
          {speed}
          <Switch 
            theme="Speedometer-unit"
            name="switch-units"
            label="mph"
            labelRight="km/h"
            defaultChecked="checked"
            onChange={(e) => this._onSwitch(e)} />
        </div>
        <div className="Speedometer-speedo">
          <div 
            className="Speedometer-arrow"
            style={{transform: 'rotate(' + speed * 1.5 + 'deg)'}}></div>
        </div>
      </div>
    );
  }

  _onPosition(position) {
    if ( this.state.position ) {
      this.setState({
        oldPosition: this.state.position
      });
    }
    this.setState({
      position: position
    });
  }

  _onSwitch(evt) {
    var checked = evt.currentTarget.checked;
    this.setState({
      unit: checked
    });
  }

  _setSpeed() {
    if (!this.state.position || !this.state.oldPosition) {
      return 0;
    }
    var latlng1 = {
      lat: this.state.position.coords.latitude,
      lng: this.state.position.coords.longitude
    };
    var latlng2 = {
      lat: this.state.oldPosition.coords.latitude,
      lng: this.state.oldPosition.coords.longitude
    };
    var timeElapsedInMs = (this.state.position.timestamp - this.state.oldPosition.timestamp);
    var distanceInMeters = this._distance(latlng1, latlng2);
    var distanceInMetersByHours = distanceInMeters * (1000 * 60 * 60) / timeElapsedInMs;
    var speed = distanceInMetersByHours / 1000;

    if ( !this.state.unit ) {
      speed /= 1.609344;
    }

    return parseFloat(speed).toFixed(0);
  }

  _distance(latlng1, latlng2) {
    var R = 6371000;
    var rad = Math.PI / 180,
        lat1 = latlng1.lat * rad,
        lat2 = latlng2.lat * rad,
        a = Math.sin(lat1) * Math.sin(lat2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);

    return R * Math.acos(Math.min(a, 1));
  }

}
