// RTSPComponent.js
import React from 'react';
import ReactPlayer from 'react-player';

const RTSPComponent = () => {
  return (
    <div className="rtsp-container">
      {/* Custom Overlay */}
      <div className="custom-overlay">Your overlay content goes here</div>

      {/* RTSP Video Stream */}
      <ReactPlayer
        url="rtsp://localhost:8554/stream"
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default RTSPComponent;
