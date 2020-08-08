import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x: props.x,
            y: props.y
        }
    }

    render() {
        const n = this.props.num;
        return <div className="board-cell" id={n}>{n}</div>;
    }
}

export default Square;