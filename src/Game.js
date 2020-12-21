import $ from 'jquery';
import React, { Component } from 'react';
import Board from './Board';
import { swipeDetect } from './swipeDetect';
import { DIR, constructCorrectArray, constructSortedArray, getFromStorageOrDefault, isSorted, copy } from './utils';
import { FaUndo } from 'react-icons/fa';
import Menu from './Menu';

const duration = 100;
var initialArr;

class Game extends Component {
  constructor(props) {
    super(props);

    const n = getFromStorageOrDefault('board-size');
    initialArr = constructCorrectArray(n);
    this.state = {
      n: n,
      arr: constructSortedArray(n),
      emptyCell: { x: 0, y: 0 },
      moves: 0
    }
    this.board = React.createRef();
  }

  componentDidMount() {
    swipeDetect($('.board')[0], this.move.bind(this));
  }

  /**
   * Resets the timer, move count, empty cell location.
   * @param {Event} e 
   */
  resetGame(e) {
    e.preventDefault();
    $(document).off("keydown");
    this.setState({
      arr: constructSortedArray(this.state.n),
      emptyCell: { x: 0, y: 0 },
      moves: 0
    });
    this.board.current.resetGame();
  }

  /**
   * Constructs a new game with a new array of size n
   * @param {Number} n size of a new board
   */
  createNewGame(n) {
    initialArr = constructCorrectArray(n);
    this.setState({
      n: n
    });
    this.resetGame(new Event(""));
  }

  /**
   * Starting current game. The game starts always from initialArr
   */
  startCurrentGame() {
    $(document).on("keydown", async (e) => {
      await this.move(e.which);
    });
    this.setState({
      arr: copy(initialArr),
    });
  }

  /**
   * Check if the puzzle is solved.
   * @param {Array<Number>} arr 
   */
  checkWin(arr) {
    if (isSorted(arr)) { // is solved
      this.board.current.pause();
      $(document).off("keydown");

      // TODO: display win message

      this.createNewGame(this.state.n);
    } else {
      $(document).on("keydown", async (e) => {
        await this.move(e.which);
      });
    }
  }

  async move(direction) {
    $(document).off("keydown");
    var { arr, emptyCell: { x, y } } = this.state;
    var step = { x: 0, y: 0 };
    var nx, ny, id;

    try {
      switch (direction) {
        case DIR.UP:
          step.x = 1;
          break;
        case DIR.RIGHT:
          step.y = -1;
          break;
        case DIR.DOWN:
          step.x = -1;
          break;
        case DIR.LEFT:
          step.y = 1;
          break;
        default:
          throw new Error();
      }

      nx = x + step.x;
      ny = y + step.y;
      id = arr[nx][ny];
      if (id === undefined) throw new Error();

    } catch (err) {
      $(document).on("keydown", async (e) => {
        await this.move(e.which);
      });
      return;
    }

    arr[nx][ny] = arr[x][y];
    arr[x][y] = id;

    const keyFrame = [{
      top: step.x * 100 + "%",
      left: step.y * 100 + "%"
    },
    { top: "0%", left: "0%" }];

    this.setState({
      emptyCell: { x: nx, y: ny },
      arr: arr,
      moves: this.state.moves + 1
    });

    if (keyFrame) await $(`#${id}`)[0].animate(keyFrame, duration).finished;

    this.checkWin(arr);
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
          move={this.move.bind(this)} />
      </>
    )
  }
}

export default Game;