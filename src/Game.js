import $ from 'jquery';
import React, { Component } from 'react';
import Board from './Board';
import { swipeDetect } from './swipeDetect';
import { DIR, constructCorrectArray } from './utils';
import { FaUndo } from 'react-icons/fa';
import Menu from './Menu';

const duration = 100;
var initialArr;

class Game extends Component {
    constructor(props) {
        super(props);

        const n = this.props.n
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

        $(document).keydown(async (e) => {
            await this.move(e.which);
        });
    }

    componentDidMount(){
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

    async move(direction) {
        var arr = this.state.arr;
        var { x, y } = this.state.emptyCell;
        var id;
        try {
            switch (direction) {
                case DIR.UP:
                    id = arr[x + 1][y];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{ "top": "100%" }, { "top": "0%" }], duration);
                    var temp = arr[x][y];
                    arr[x][y] = arr[x + 1][y];
                    arr[x + 1][y] = temp;
                    x++;
                    break;
                case DIR.RIGHT:
                    id = arr[x][y - 1];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{ "left": "-100%" }, { "left": "0%" }], duration);
                    temp = arr[x][y];
                    arr[x][y] = arr[x][y - 1];
                    arr[x][y - 1] = temp;
                    y--;
                    break;
                case DIR.DOWN:
                    id = arr[x - 1][y];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{ "top": "-100%" }, { "top": "0%" }], duration);
                    temp = arr[x][y];
                    arr[x][y] = arr[x - 1][y];
                    arr[x - 1][y] = temp;
                    x--;
                    break;
                case DIR.LEFT:
                    id = arr[x][y + 1];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{ "left": `100%` }, { "left": "0%" }], duration);
                    temp = arr[x][y];
                    arr[x][y] = arr[x][y + 1];
                    arr[x][y + 1] = temp;
                    y++;
                    break;
                default:
                    return;
            }
        } catch (err) {
            console.log(err);
            return;
        }
        this.setState({
            emptyCell: { x, y },
            arr: arr,
            moves: this.state.moves + 1
        });
    }

    render() {
        const { moves, arr, n } = this.state;
        return (
            <>
                <header>
                    <div className="reset icon-container" onClick={this.resetGame.bind(this)} onTouchEndCapture={this.resetGame.bind(this)}><FaUndo /><span className="desktop">Reset game</span></div>
                    <div className="moves">Moves: {moves}</div>
                    <Menu name="Menu" classes="menu-button"/>
                </header>
                <Board n={n} arr={arr} />

            </>
        )
    }
}

export default Game;