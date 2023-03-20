import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";

const GoogleMaps = () => {
  const defaultCordinates = { lat: 21.14, lng: 79.08 };

  // const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: "dummyKey",
  //   });

  //   if (!isLoaded) {
  //     return <h2>Loading ...</h2>;
  //   }

  return (
    <div>
      <h1>Home</h1>
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "dummyKey" }}
          defaultCenter={defaultCordinates}
          center={defaultCordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          //@ts-ignore
          options={undefined}
          //@ts-ignore
          onChange={() => {}}
          //@ts-ignore
          onChildClick={"() => {}"}
        >
          <div>Children</div>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMaps;

{
  /* <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -81 }}
        mapContainerClassName="map-container"
      ></GoogleMap> */
}
