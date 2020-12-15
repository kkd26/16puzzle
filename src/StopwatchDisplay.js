import React, { Component } from 'react';

class StopwatchDisplay extends Component {
  render() {
    return (
      <span className="stopwatch_display">
        {this.props.formatTime(this.props.currentTimeMin)}:
        {this.props.formatTime(this.props.currentTimeSec)}:
        {this.props.formatTime(this.props.currentTimeMs, 'ms')}
      </span>
    );
  }
}

export default StopwatchDisplay;