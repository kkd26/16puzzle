import React from 'react';

function Square({ id }) {
    return <div className="board-cell" id={id}>{id}</div>;
}
export default Square;