import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from 'mapbox-gl-geocoder';

class Map extends Component {

  componentDidMount () {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [2.15, 41.36],
      zoom: 7
    });
    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, 'top-left');
    this.map.doubleClickZoom.disable();

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    });
    this.map.addControl(geocoder);

    }

  render () {
    return (
      <div className="Map">
        <div id="map"></div>
      </div>
    )
  }
}

export default Map;
