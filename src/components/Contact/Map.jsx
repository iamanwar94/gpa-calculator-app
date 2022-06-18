import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBy2xYT5B6bsPOI2Wg3dfkGYykwmE8R81A",
  });
  const center = { lat: 6.524379, lng: 3.379206 };
  const Map = () => {
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map_container"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };
  return (
    <div className="contact_map">
      {!isLoaded ? (
        <div>
          <h1 className="text-center">Loading. . .</h1>
        </div>
      ) : (
        <Map />
      )}
    </div>
  );
};

export default Map;
