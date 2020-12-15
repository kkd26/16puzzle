import React, { Component } from 'react';
import $ from 'jquery';
import Square from './Square';
import { FaPlay, FaStop, FaStopwatch } from 'react-icons/fa'
import Stopwatch from './Stopwatch';

class Board extends Component {
  constructor(props) {
    super(props);
    this.stopwatch = React.createRef();
    this.startCurrentGame = props.startCurrentGame;
    this.move = props.move;
    this.state = {
      running: false,
      started: false
    };
  }

  start(){
    this.startCurrentGame();
    $(document).on("keydown", async (e) => {
      await this.move(e.which);
    });
    this.stopwatch.current.start();
    this.setState({
      running: true,
      started: true
    });
  }

  pause(){
    $(document).off("keydown");
    this.stopwatch.current.stop();
    this.setState({
      running: false
    });
  }

  resume(){
    $(document).on("keydown", async (e) => {
      await this.move(e.which);
    });
    this.stopwatch.current.start();
    this.setState({
      running: true
    });
  }

  resetGame(){
    $(document).off("keydown");
    this.stopwatch.current.stop();
    this.stopwatch.current.reset();
    this.setState({
      running: false,
      started: false
    });
  }

  render() {
    const { n, arr } = this.props;
    const running = this.state.running;
    const started = this.state.started;
    const text = started ? (running ? "Pause" : "Resume") : "Start";
    const onClickHandler = started ? (running ? this.pause : this.resume) : this.start;

    const style = { gridTemplateColumns: ("1fr ".repeat(n)) };
    var tab = [];
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        tab.push(<Square key={arr[i][j]} id={arr[i][j]} />);
      }
    }
    return (
      <>
        <div className="game-control-bar">
          <div className="icon-container" onClick={onClickHandler.bind(this)}>
            {running ? <FaStop /> : <FaPlay />}
            <span>{text} Game</span>
          </div>
          <div>
          <div className="icon-container">
            <FaStopwatch />
            <Stopwatch ref={this.stopwatch}/>
          </div>
          </div>
        </div>
        <main className="board" style={style}> {tab} </main>
      </>
    );
  }
}

export default Board;