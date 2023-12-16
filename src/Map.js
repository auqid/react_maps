import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';



const Map = ( {data} ) => {
 console.log(data)
 
  return (

    <div>
      
        <MapContainer
        
        center={[0,0]}
        zoom={2}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
       {data.map((entry, index) => {
        // Access Latitude and Longitude from __parsed_extra array
        const latitude = parseFloat(entry.__parsed_extra[0]);
        const longitude = parseFloat(entry.__parsed_extra[1]);
        const getColor = (aqs) => {
          if (aqs >= 81 && aqs <= 100) {
            return '#00B0f0';
          } else if (aqs >= 61 && aqs <= 80) {
            return '#5ED2A';
          } else if (aqs >= 41 && aqs <= 60) {
            return '#edb91e';
          } else if (aqs >= 21 && aqs <= 40) {
            return '#EE6B38';
          } else if (aqs >= 0 && aqs <= 20) {
            return '#FF2323';
          } else {
            return 'gray';
          }
        };
        // Check if both Latitude and Longitude are valid numbers
        if (!isNaN(latitude) && !isNaN(longitude)) {
          return (
            <CircleMarker
              key={index}
              position={[latitude, longitude]}
              center={[latitude, longitude]}
              radius={6} // Adjust the radius as needed
              fillColor={getColor(entry.AQS)} // Adjust the color as needed
              fillOpacity={1}
              weight={0.5}
              
            >
              <Popup>
                {/* Date: {entry.Date}<br /> */}
                VOC, ppm: {entry['VOC, ppm']}<br />
                AQS: {entry.AQS}<br />
                {/* Temperature, °C: {entry['Temperature, °C']}<br /> */}
                {/* Humidity, %: {entry['Humidity, %']}<br /> */}
                {/* Add other properties as needed */}
              </Popup>
            </CircleMarker>
          );
        }
        return null; // Skip rendering the marker if Latitude or Longitude is not a valid number
      })}
      </MapContainer>







        
    
    </div>


  );
};

export default Map;