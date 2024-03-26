import React from 'react';
import './RadioPlayer.css';
import backgroundImage from './background-2.webp';
import playButtonImg from './play-button-1.png';
import pauseButtonImg from './pause-button-1.png';

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
        <p className="radio-version">beta 1.03, live from gigi's village</p>
        <button className="play-button" onClick={this.togglePlay}>
          <img src={this.state.isPlaying ? pauseButtonImg : playButtonImg} alt={this.state.isPlaying ? 'Pause' : 'Play'} />
        </button>
        <div className="radio-description">playing rare soul and disco for friends and music lovers</div>
        <div className="photo-credit">Background: Hiroshi Nagai</div>
      </div>
    );
  }
}

export default RadioPlayer;
