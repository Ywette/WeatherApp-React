// @ts-nocheck
import ReactMapGL, { Marker } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import api from '../api_key';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '500px',
    height: '500px',
    zoom: 10,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_WEATHER_API_KEY}
      />
    </div>

  );
};

export default Map;
