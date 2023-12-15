import React, { useState } from 'react';
import FileInput from './FileInput';
import Map from './Map';
const DUMMY =[]

const App = () => {
  const [data, setData] = useState(DUMMY);

  const handleDataLoaded = (newData) => {
    setData(newData);
    // console.log(newData);
    // const extractedCoordinates = newData.map(({ __parsed_extra: [Latitude, Longitude]   }) => ({ Latitude, Longitude }));
    // console.log(extractedCoordinates)
  };

  return (
    <div>
      <h1>CSV Map App</h1>
      <FileInput onDataLoaded={handleDataLoaded} />
       <Map data={data} /> 
    </div>
  );
};

export default App;