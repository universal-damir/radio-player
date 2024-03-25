// src/RadioPlayer.js
import React from 'react';
import './RadioPlayer.css';
import backgroundImage from './background.jpeg';
import playButtonImg from './play-button.png'; // Make sure this is the correct path
import pauseButtonImg from './pause-button.png'; // Add a pause button image and make sure this is the correct path

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
        <h1 className="radio-title">Palm Radio</h1>
        <p className="radio-version">test version 1.01</p> {/* Additional text */}
        <button className="play-button" onClick={this.togglePlay}>
          {/* Toggle between play and pause button images */}
          <img src={this.state.isPlaying ? pauseButtonImg : playButtonImg} alt={this.state.isPlaying ? 'Pause' : 'Play'} />
        </button>
      </div>
    );
  }
}

export default RadioPlayer;
