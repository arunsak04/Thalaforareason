import React, { useState } from 'react';
import './style.css';
const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const resetInput = () => {
    setInputValue('');
    setShowVideo(false);

    // Reset the video to the beginning and pause it
    const video = document.querySelector(
      '.app-video'
    ) as HTMLVideoElement | null;
    if (video) {
      video.currentTime = 0;
      video.pause();
    }
  };
  const checkInput = () => {
    if (!isNaN(Number(inputValue))) {
      const digitSum = inputValue
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

      if (digitSum === 7) {
        setShowVideo(true);
      } else {
        alert('Addition of numbers is not 7');
      }
    } else {
      const stringLength = inputValue.length;

      if (stringLength === 7) {
        setShowVideo(true);
      } else {
        alert('string length is not 7');
      }
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Thala For a Reason</h1>
      <label htmlFor="inputValue" className="app-label">
        Enter a name or number (counts 7):
      </label>
      <br />
      <br />
      <input
        required
        type="text"
        id="inputValue"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="app-input"
      />
      <br />
      <br />
      <button className="btn btn-primary app-button" onClick={checkInput}>
        Check Input
      </button>

      {showVideo && (
        <div className="container">
          <div className="video-container">
            <video
              src="https://github.com/arunsak04/bolejokoyal/raw/main/98cbb274.mp4"
              autoPlay
              loop
              controls={false}
              muted={false}
              width={400}
              height={300}
              className="app-video"
            />
          </div>
          <div>
            <button
              className="reset btn btn-secondary mt-2"
              onClick={resetInput}
            >
              Reset
            </button>
          </div>
        </div>
      )}

      <footer className="mt-5 text-center app-footer">
        <p>&copy; {getCurrentYear()} Arun Kumar. All rights reserved. 🚀</p>
      </footer>
    </div>
  );
};

export default App;
