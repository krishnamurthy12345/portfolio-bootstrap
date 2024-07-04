import React from "react";
import bgImage from '../video/video.mp4';
import './Menu.css';

export function Bg() {
  return (<>
    <div className="App video">
      <div className="overlay"></div>
      <video src={bgImage} autoPlay loop muted />
    </div>
    </>
    
  );
}
