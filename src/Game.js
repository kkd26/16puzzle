import $ from 'jquery';
import React, { Component } from 'react';
import Board from './Board';
import { swipeDetect } from './swipeDetect';
import { DIR, constructCorrectArray, getFromStorageOrDefault, isSorted } from './utils';
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
      arr: arr,
      emptyCell: {
        x: 0,
        y: 0
      },
      moves: 0
    }

    $(document).on("keydown", async (e) => {
      await this.move(e.which);
    });
  }

  componentDidMount() {
    swipeDetect($('.board')[0], this.move.bind(this));
  }

  resetGame(e) {
    e.preventDefault();
    this.setState({
      arr: initialArr.map(x => x.slice()),
      emptyCell: { x: 0, y: 0 },
      moves: 0
    });
  }

  startNewGame(n) {
    const arr = constructCorrectArray(n);
    initialArr = arr.map(x => x.slice());
    this.setState({
      n: n,
      arr: arr,
      emptyCell: {
        x: 0,
        y: 0
      },
      moves: 0
    })
  }

  checkWin(arr) {
    if (isSorted(arr)) {
      alert("won");
    }
  }

  async move(direction) {
    $(document).off("keydown");
    var arr = this.state.arr;
    var { x, y } = this.state.emptyCell;
    var id;
    var keyFrame = undefined;
    try {
      switch (direction) {
        case DIR.UP:
          id = arr[x + 1][y];
          if (id === undefined) throw new Error();
          keyFrame = [{ "top": "100%" }, { "top": "0%" }];

          var temp = arr[x][y];
          arr[x][y] = arr[x + 1][y];
          arr[x + 1][y] = temp;
          x++;
          break;
        case DIR.RIGHT:
          id = arr[x][y - 1];
          if (id === undefined) throw new Error();
          keyFrame = [{ "left": "-100%" }, { "left": "0%" }];

          temp = arr[x][y];
          arr[x][y] = arr[x][y - 1];
          arr[x][y - 1] = temp;
          y--;
          break;
        case DIR.DOWN:
          id = arr[x - 1][y];
          if (id === undefined) throw new Error();
          keyFrame = [{ "top": "-100%" }, { "top": "0%" }];

          temp = arr[x][y];
          arr[x][y] = arr[x - 1][y];
          arr[x - 1][y] = temp;
          x--;
          break;
        case DIR.LEFT:
          id = arr[x][y + 1];
          if (id === undefined) throw new Error();
          keyFrame = [{ "left": `100%` }, { "left": "0%" }];

          temp = arr[x][y];
          arr[x][y] = arr[x][y + 1];
          arr[x][y + 1] = temp;
          y++;
          break;
        default:
          throw new Error();
      }
    } catch (err) {
      $(document).on("keydown", async (e) => {
        await this.move(e.which);
      });
      return;
    }
    this.setState({
      emptyCell: { x, y },
      arr: arr,
      moves: this.state.moves + 1
    });
    const tempArr = [...arr];
    if (keyFrame) await $(`#${id}`)[0].animate(keyFrame, duration).finished;
    this.checkWin(tempArr);

    $(document).on("keydown", async (e) => {
      $(document).off("keydown");
      await this.move(e.which);
    });
  }

  render() {
    const { moves, arr, n } = this.state;
    return (
      <>
        <header>
          <div className="reset icon-container" onClick={this.resetGame.bind(this)} onTouchEndCapture={this.resetGame.bind(this)}><FaUndo /><span className="desktop">Reset game</span></div>
          <div className="moves">Moves: {moves}</div>
          <Menu name="Menu" classes="menu-button" changeBoardSize={this.startNewGame.bind(this)} />
        </header>
        <Board n={n} arr={arr} />
      </>
    )
  }
}

export default Game;