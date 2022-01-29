// @ts-nocheck

import Map, { Marker } from 'react-map-gl';
import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import api from '../api_key';

const MapContainer = () => {
  const [viewport, setViewport] = useState({
    longitude: -100,
    latitude: 40,
  });
  return (
    <Map
      initialViewState={viewport}
      width="100%"
      height="100%"
      style={{ width: 600, height: 400 }}
      mapStyle={api.mapsStylesUrl}
      mapboxApiAccessToken={api.mapsAPIkey}
    >
      <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
        <FaMapMarkerAlt />
      </Marker>
    </Map>
  );
};
export default MapContainer;
