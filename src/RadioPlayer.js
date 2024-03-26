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
        <p className="radio-version">playing rare soul and disco for friends and music lovers</p>
        <button className="play-button" onClick={this.togglePlay}>
          <img src={this.state.isPlaying ? pauseButtonImg : playButtonImg} alt={this.state.isPlaying ? 'Pause' : 'Play'} />
        </button>
        <div className="photo-credit">Background: Hiroshi Nagai</div>
        {/* Here is the added description */}
        <div className="radio-description">
        beta 1.03, live from gigi's village
        </div>
      </div>
    );
  }
}

export default RadioPlayer;
