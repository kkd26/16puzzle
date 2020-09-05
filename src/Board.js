import React from 'react';
import Square from './Square';

function Board({ n, arr }) {
    const style = { gridTemplateColumns: ("1fr ".repeat(n)) };
    var tab = [];
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            tab.push(<Square key={arr[i][j]} id={arr[i][j]} />);
        }
    }
    return (
        <div className="board" style={style}> {tab} </div>
    );
}

export default Board;