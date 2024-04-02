import React from 'react';
import './RadioPlayer.css';
import backgroundImage from './background-2.webp';
import playButtonImg from './play-button-2.png';
import pauseButtonImg from './pause-button-2.png';

class RadioPlayer extends React.Component {
  audio = new Audio("https://s2.radio.co/s83482c97d/listen");

  state = {
    isPlaying: false,
    isBuffering: false, // Add a buffering state
  };

  componentDidMount() {
    // Listen to the audio events for buffering
    this.audio.addEventListener('playing', this.handleAudioPlay);
    this.audio.addEventListener('waiting', this.handleAudioWaiting);
  }

  componentWillUnmount() {
    // Clean up to avoid memory leaks
    this.audio.removeEventListener('playing', this.handleAudioPlay);
    this.audio.removeEventListener('waiting', this.handleAudioWaiting);
    this.audio.pause();
  }

  handleAudioPlay = () => {
    this.setState({ isBuffering: false });
  };

  handleAudioWaiting = () => {
    this.setState({ isBuffering: true });
  };

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      this.state.isPlaying ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    const { isPlaying, isBuffering } = this.state;
  
    return (
      <div className="radio-player" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="radio-title">Talas Radio</h1>
        <p className="radio-version">rare soul & disco for friends and music lovers</p>
        <button className="play-button" onClick={this.togglePlay}>
          <img src={isPlaying ? pauseButtonImg : playButtonImg} alt={isPlaying ? 'Pause' : 'Play'} />
        </button>
        {isBuffering && (
          <div className="loader"></div> // Here is where the loader is included instead of the "Buffering..." text
        )}
        <div className="radio-description">beta 1.03 | live from gigi's village</div>
        <div className="photo-credit">Background: Hiroshi Nagai</div>
      </div>
    );
  }
}

export default RadioPlayer;
