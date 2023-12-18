import React, { useState } from 'react';
const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const checkInput = () => {
    // Check if the input is a number
    if (!isNaN(Number(inputValue))) {
      // If it's a number, add all digits
      const digitSum = inputValue
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

      // Check if the sum of digits is 7
      if (digitSum === 7) {
        playMusicAndVideos('video');
      } else {
        alert('Sum of digits is not 7.');
      }
    } else {
      // If it's a string, count the characters
      const stringLength = inputValue.length;

      // Check if the length is 7
      if (stringLength === 7) {
        playMusicAndVideos('video');
      } else {
        alert('Length of string is not 7.');
      }
    }
  };
  const playMusicAndVideos = (type: 'music' | 'video') => {
    if (type === 'music') {
      const audio = new Audio('https://example.com/your-music.mp3');
      audio.play();
    } else {
      const video = document.createElement('video');
      video.src =
        'https://github.com/arunsak04/bolejokoyal/raw/main/98cbb274.mp4';
      video.autoplay = true; // Autoplay the video
      video.controls = false;
      video.muted = false;
      video.width = 400;
      video.height = 300;
      document.body.appendChild(video);
    }
  };
  return (
    <div>
      <h1>Thala For a Rason</h1>
      <label htmlFor="inputValue">
        Enter a name or number(counts 7) :
      </label>{' '}
      <br />
      <br />
      <input
        type="text"
        id="inputValue"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      <button className="btn btn-primary" onClick={checkInput}>
        Check Input
      </button>
    </div>
  );
};

export default App;
