import React, { useState } from 'react';
import FileInput from './FileInput';
import Map from './Map';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const App = () => {
  const [data, setData] = useState([]);

  const handleDataLoaded = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>CSV Map App</h1>
      <FileInput onDataLoaded={handleDataLoaded} />
      <Map data={data} />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
};

export default App;