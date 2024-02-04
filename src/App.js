// App.js
import React from 'react';
import RTSPPlayer from './RTSPPlayer';
import RTSPComponent from './RTSPComponent';

// Your React component
const sendDataToServer = async () => {
  const dataToSend = {
    // Your data fields
    field1: 'value1',
    field2: 42,
    // ...
  };

  try {
    const response = await fetch('http://localhost:5000/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      const savedData = await response.json();
      console.log('Data saved successfully:', savedData);
    } else {
      console.error('Failed to save data:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};


const App = () => {
  return (
    <div>
      <h1>RTSP Streaming App</h1>
      
      <RTSPComponent />
    </div>
  );
};

export default App;
