// RTSPPlayer.js
import React, { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const RTSPPlayer = () => {
  useEffect(() => {
    // Initialize Video.js player
    const player = videojs('my-video');

    // Cleanup on component unmount
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <div>
      <video id="my-video" className="video-js vjs-default-skin" controls preload="auto" width="640" height="264">
        <source src="rtsp://localhost:8554/stream" type="application/x-mpegURL" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default RTSPPlayer;
