import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import api from '../api_key';
import { Geolocation, ViewportProps } from '../interfaces';

const MapContainer = ({ lat, lon }: Geolocation) => {
  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: lat,
    longitude: lon,
    width: '600px',
    height: '500px',
    zoom: 1,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapStyle={api.mapsStylesUrl}
        mapboxApiAccessToken={api.mapsAPIkey}
        onViewportChange={(viewPort: ViewportProps) => {
          setViewport(viewPort);
        }}
      >
        {lat !== undefined && lon !== undefined
          ? (
            <>
              <Marker
                latitude={lat}
                longitude={lon}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <FaMapMarkerAlt />
              </Marker>
              <Popup
                longitude={lat}
                latitude={lon}
                closeOnClick
              >
                Popuuuuup
              </Popup>
              {' '}
              )
            </>
          )
          : null}

      </ReactMapGL>
    </div>

  );
};

export default MapContainer;
