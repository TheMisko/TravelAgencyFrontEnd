import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const GMaps = ({ google, first, second, width, height }) => {
  const mapStyles = {
    width: width,
    height: height
  };
  return (
    <Map
      google={google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: first, lng: second }}
    >
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDw64XziSM3HM_vLC-ovtXFU9zZPEFHlqs"
})(GMaps);
