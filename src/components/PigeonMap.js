import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

export default class PigeonMap extends Component {
  render() {
    return (
      <Map
        center={[41.751365, -74.0834664]}
        zoom={15}
        width={500}
        height={400}
        metaWheelZoom={true}
        twoFingerDrag={true}
      >
        <Marker anchor={[41.751365, -74.0834664]} payload={1} />
      </Map>
    );
  }
}
