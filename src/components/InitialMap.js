import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  minHeight: 400,
  maxHeight: 400
};

const center = {
	lat:40.7867845, lng:-73.7269618
};

function InitialMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCMug18gO0iTE_bza_lTtj3S9c_hbOnlRA"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
	map.setZoom(16)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
		center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      	<Marker position={{ lat:40.7867845, lng:-73.7269618 }} />
      </GoogleMap>
  ) : <></>
}

export default InitialMap