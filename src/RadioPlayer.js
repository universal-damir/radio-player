// src/RadioPlayer.js
import React from 'react';
import './RadioPlayer.css';
import backgroundImage from './background-2.webp';
import playButtonImg from './play-button-1.png'; // Make sure this is the correct path
import pauseButtonImg from './pause-button-1.png'; // Add a pause button image and make sure this is the correct path

class RadioPlayer extends React.Component {
  audio = new Audio("https://s2.radio.co/s83482c97d/listen");

  state = {
    isPlaying: false,
  };

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      this.state.isPlaying ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <div className="radio-player" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="radio-title">Talas Radio</h1>
        <p className="radio-version">test version 1.02,live from gigi's village</p> {/* Additional text */}
        <button className="play-button" onClick={this.togglePlay}>
          {/* Toggle between play and pause button images */}
          <img src={this.state.isPlaying ? pauseButtonImg : playButtonImg} alt={this.state.isPlaying ? 'Pause' : 'Play'} />
        </button>
        <div className="photo-credit">Background: Hiroshi Nagai</div> {/* Add your photo credit text here */}

      </div>
    );
  }
}

export default RadioPlayer;
