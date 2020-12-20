import $ from 'jquery';
import React, { Component } from 'react';
import Board from './Board';
import { swipeDetect } from './swipeDetect';
import { DIR, constructCorrectArray, constructSortedArray, getFromStorageOrDefault, isSorted } from './utils';
import { FaUndo } from 'react-icons/fa';
import Menu from './Menu';

const duration = 100;
var initialArr;

class Game extends Component {
  constructor(props) {
    super(props);

    const n = getFromStorageOrDefault('board-size');
    const arr = constructCorrectArray(n);
    initialArr = arr.map(x => x.slice());
    this.state = {
      n: n,
      arr: constructSortedArray(n),
      emptyCell: {
        x: 0,
        y: 0
      },
      moves: 0
    }
    this.board = React.createRef();
  }

  componentDidMount() {
    swipeDetect($('.board')[0], this.move.bind(this));
  }

  resetGame(e) {
    e.preventDefault();
    this.setState({
      arr: constructSortedArray(this.state.n),
      emptyCell: { x: 0, y: 0 },
      moves: 0
    });
    this.board.current.resetGame();
  }

  createNewGame(n) {
    this.board.current.resetGame();
    const arr = constructCorrectArray(n);
    initialArr = arr.map(x => x.slice());
    this.setState({
      n: n,
      arr: constructSortedArray(n)
    });
  }

  startCurrentGame() {
    this.setState({
      arr: initialArr.map(x => x.slice()),
      emptyCell: { x: 0, y: 0 },
      moves: 0
    });
  }

  checkWin(arr) {
    if (isSorted(arr)) {
      this.board.current.pause();
      $(document).off("keydown");
      return true;
    }
    return false;
  }

  async move(direction) {
    $(document).off("keydown");
    let {arr, emptyCell: {x, y}} = this.state;
    let step;
    let keyFrame;
    switch (direction) {
      case DIR.UP:
        step = {x:1, y:0};
        keyFrame = [{ "top": "100%" }, { "top": "0%" }];
        break;
      case DIR.DOWN:
        step = {x:-1, y:0};
        keyFrame = [{ "top": "-100%" }, { "top": "0%" }];
        break;
      case DIR.RIGHT:
        step = {x:0, y:-1};
        keyFrame = [{ "left": "-100%" }, { "left": "0%" }];
        break;
      case DIR.LEFT:
        step = {x:0, y:1};
        keyFrame = [{ "left": `100%` }, { "left": "0%" }];
        break;
    }
    const nx = x + step.x;
    const ny = y + step.y;
    const nid = arr[nx][ny];
    if (nid === undefined) {
      $(document).on("keydown", async (e) => {
        await this.move(e.which);
      });
      return;
    }

    arr[nx][ny] = arr[x][y];
    arr[x][y] = nid;
    
    this.setState({
      emptyCell: { nx, ny },
      arr,
      moves: this.state.moves + 1
    });
    await $(`#${id}`)[0].animate(keyFrame, duration).finished;

    if (!this.checkWin(arr)) {
      $(document).on("keydown", async (e) => {
        await this.move(e.which);
      });
    }
  }

  render() {
    const { moves, arr, n } = this.state;
    return (
      <>
        <header>
          <div className="reset icon-container" onClick={this.resetGame.bind(this)} onTouchEndCapture={this.resetGame.bind(this)}>
            <FaUndo />
            <span className="desktop">Reset game</span>
          </div>
          <div className="moves">Moves: {moves}</div>
          <Menu name="Menu" classes="menu-button" changeBoardSize={this.createNewGame.bind(this)} />
        </header>
        <Board ref={this.board} n={n} arr={arr}
          startCurrentGame={this.startCurrentGame.bind(this)} 
          move={this.move.bind(this)}/>
      </>
    )
  }
}

export default Game;