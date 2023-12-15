import React, { useState } from 'react';
import Papa from 'papaparse';

const FileInput = ({ onDataLoaded }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        onDataLoaded(result.data);
      },
      header: true,
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileInput;