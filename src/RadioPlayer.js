import React from 'react';
import './RadioPlayer.css';
import backgroundImage from './background-2.webp';
import playButtonImg from './play-button-2.png';
import pauseButtonImg from './pause-button-2.png';
// Import the FM search noise sound
import fmSearchNoise from './fm-search-noise.mp3';

class RadioPlayer extends React.Component {
  audio = new Audio("https://s2.radio.co/s83482c97d/listen");
  fmNoise = new Audio(fmSearchNoise); // FM search noise audio object

  state = {
    isPlaying: false,
    isBuffering: false,
  };

  componentDidMount() {
    this.audio.addEventListener('playing', this.handleAudioPlay);
    this.audio.addEventListener('waiting', this.handleAudioWaiting);
  }

  componentWillUnmount() {
    this.audio.removeEventListener('playing', this.handleAudioPlay);
    this.audio.removeEventListener('waiting', this.handleAudioWaiting);
    this.audio.pause();
    this.fmNoise.pause(); // Ensure FM noise is also paused
    this.fmNoise.currentTime = 0; // Reset FM noise position
  }

  handleAudioPlay = () => {
    this.setState({ isBuffering: false }, () => {
      this.fmNoise.pause(); // Stop the FM noise when playback starts
      this.fmNoise.currentTime = 0; // Reset the FM noise audio to start
      this.fmNoise.loop = false; // Ensure the FM noise does not loop
    });
  };

  handleAudioWaiting = () => {
    this.setState({ isBuffering: true }, () => {
      if (this.state.isPlaying) {
        this.fmNoise.play(); // Play the FM noise only if the radio was playing
        this.fmNoise.loop = true; // Loop the FM noise if buffering is longer than the audio file
      }
    });
  };

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      if (this.state.isPlaying) {
        this.audio.play();
        if (this.state.isBuffering) {
          this.fmNoise.play(); // Ensure FM noise plays if buffering while play was pressed
          this.fmNoise.loop = true; // Loop the FM noise during playback
        }
      } else {
        this.audio.pause();
        this.fmNoise.pause(); // Ensure FM noise stops when pausing the radio
        this.fmNoise.currentTime = 0; // Reset FM noise position
        this.fmNoise.loop = false; // Disable looping when paused
      }
    });
  };

  render() {
    const { isPlaying } = this.state;
  
    return (
      <div className="radio-player" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="radio-title">Talas Radio</h1>
        <p className="radio-version">rare soul & disco for friends and music lovers</p>
        <button className="play-button" onClick={this.togglePlay}>
          <img src={isPlaying ? pauseButtonImg : playButtonImg} alt={isPlaying ? 'Pause' : 'Play'} />
        </button>
        {/* Removed buffering visual indication to rely on FM noise for buffering feedback */}
        <div className="radio-description">beta 1.03 | live from gigi's village</div>
        <div className="photo-credit">Background: Hiroshi Nagai</div>
      </div>
    );
  }
}

export default RadioPlayer;
