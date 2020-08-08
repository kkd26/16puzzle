import React from 'react';
import Square from './Square';
import $ from 'jquery';

window.$ = $;

const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const LEFT = 41;
var p;

class Board extends React.Component {
    constructor(props) {
        super(props);

        const n = this.props.n
        const arr = new Array(n).fill(0).map((_, i) => i).map((i) => new Array(n).fill(0).map((_, j) => i * n + j));

        this.state = {
            n: n,
            arr: arr,
            emptyCell: {
                x: 0,
                y: 0
            }
        }

        p = 100 / this.state.n;

        $(document).keydown((e) => {
            this.move(e.which);
        });
    }

    move(direction) {
        const emptyCell = this.state.emptyCell;
        var {x,y} = emptyCell;
        console.log(x,y);
        switch (direction) {
            case UP:
                break;
            case RIGHT:
                break;
            case DOWN:
                break;
            case LEFT:
                break;
        }
    }

    render() {
        const n = this.props.n;
        var tab = [];
        for (var i = 0; i < n; i++) {
            var arr = [];
            for (var j = 0; j < n; j++) {
                arr.push(< Square num={i * n + j} x={j} y={i}/>);
            }
            tab.push(<div className="board-row" > {arr} </div>);
        }
        return <div className="board" > {tab} </div>;
    }
}
export default Board;