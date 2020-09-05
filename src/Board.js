import React from 'react';
import Square from './Square';
import $ from 'jquery';
import { DIR } from './utils';
import { swipeDetect } from './swipeDetect';

window.$ = $;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        const n = this.props.n
        var arr = new Array(n * n).fill(0).map((_, i) => i);
        shuffleArray(arr);
        const newArr = [];
        while (arr.length) newArr.push(arr.splice(0, n));
        arr = newArr;
        var x, y;
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (arr[i][j] === 0) {
                    x = i;
                    y = j;
                }
            }
        }

        this.state = {
            n: n,
            arr: arr,
            emptyCell: {
                x: x,
                y: y
            }
        }

        $(document).keydown(async (e) => {
            await this.move(e.which);
        });

        swipeDetect(document, this.move.bind(this));
    }

    async move(direction) {
        const emptyCell = this.state.emptyCell;
        var arr = this.state.arr;
        var { x, y } = emptyCell;
        var id;
        console.log(x, y);
        try {
            switch (direction) {
                case DIR.UP:
                    console.log("up");
                    id = arr[x + 1][y];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{"top": "100%"}, {"top": "0%"}], 2000);
                    var temp = arr[x][y];
                    arr[x][y] = arr[x + 1][y];
                    arr[x + 1][y] = temp;
                    x++;
                    break;
                case DIR.RIGHT:
                    id = arr[x][y - 1];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{"left": "-100%"}, {"left": "0%"}], 2000);
                    temp = arr[x][y];
                    arr[x][y] = arr[x][y - 1];
                    arr[x][y - 1] = temp;
                    y--;
                    break;
                case DIR.DOWN:
                    console.log("down");
                    id = arr[x - 1][y];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{"top": "-100%"}, {"top": "0%"}], 2000);
                    temp = arr[x][y];
                    arr[x][y] = arr[x - 1][y];
                    arr[x - 1][y] = temp;
                    x--;
                    break;
                case DIR.LEFT:
                    console.log("left");
                    id = arr[x][y + 1];
                    if (id === undefined) return;
                    $(`#${id}`)[0].animate([{"left": `100%`}, {"left": "0%"}], 2000);
                    temp = arr[x][y];
                    arr[x][y] = arr[x][y + 1];
                    arr[x][y + 1] = temp;
                    y++;
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err);
        }
        this.setState({
            emptyCell: { x, y },
            arr: arr
        });
    }

    render() {
        const n = this.props.n;
        const style = { gridTemplateColumns: ("1fr ".repeat(n)) };
        var arr = this.state.arr;
        var tab = [];
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                tab.push(<Square key={arr[i][j]} num={arr[i][j]} x={j} y={i} />);
            }
        }
        $(".board-cell").css("left", "0%");
        $(".board-cell").css("top", "0%");
        $("#0").css("background-color", "white");
        return <div className="board" style={style}> {tab} </div>;
    }
}
export default Board;