import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Geolocation, ViewportProps } from '../interfaces';
import api from '../api_key';

const MapContainer = (
  { lat, lon }: Geolocation,
) => {
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: lat,
    longitude: lon,
    zoom: 1,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle={api.mapsStylesUrl}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_API_KEY}
      onViewportChange={(viewPort: ViewportProps) => {
        setViewport(viewPort);
      }}
    >
      {lat !== 0 && lon !== 0
        ? (
          <>
            <Marker
              latitude={lat}
              longitude={lon}
              offsetLeft={-8}
              offsetTop={-18}
            >
              <FaMapMarkerAlt
                onClick={() => { setShowPopup(true); }}
              />
            </Marker>

            {showPopup
                && (
                <Popup
                  latitude={lon}
                  longitude={lat}
                  onClose={() => setShowPopup(false)}
                >
                  <div>
                    <span>Popuuuuup</span>
                    <span>{lat}</span>
                    <span>{lon}</span>
                  </div>

                </Popup>
                )}
          </>
        )
        : null}

    </ReactMapGL>
  );
};

export default MapContainer;
