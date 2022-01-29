import ReactMapGL, { Marker } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import api from '../api_key';

interface MapProps {
  latitude: number | undefined,
  longitude: number | undefined,
}

const MapContainer = ({ latitude, longitude }: MapProps) => (
  <ReactMapGL
    latitude={latitude}
    longitude={longitude}
    width="100%"
    height="100%"
    mapStyle={api.mapsStylesUrl}
    mapboxApiAccessToken={api.mapsAPIkey}
  >
    {/* <Marker */}
    {/*   latitude={0} */}
    {/*   longitude={0} */}
    {/*   offsetLeft={-20} */}
    {/*   offsetTop={-10} */}
    {/* > */}
    {/*   <FaMapMarkerAlt /> */}
    {/* </Marker> */}
  </ReactMapGL>
);

export default MapContainer;
