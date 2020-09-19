import React, { Component } from 'react';
import { HuePicker, SliderPicker } from 'react-color';
import { setMainColor } from './utils';
import $ from 'jquery';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: localStorage.getItem('main-color')
        }
        this.changeBoardSize = props.changeBoardSize;
    }

    handleColorChange(color) {
        this.setState({ color: color });
    }

    handleBoarSizeChange(e){
        const num = Math.floor(Number($(e.target).val()));
        if(num && num > 1){
            localStorage.setItem('board-size', num);
            this.changeBoardSize(num);
        }
    }

    render() {
        return (
            <>
                <div>Change main color:</div>
                <SliderPicker
                    color={this.state.color}
                    onChange={this.handleColorChange.bind(this)}
                    onChangeComplete={(x => setMainColor(x.hex))}
                    width="unset"
                />
                <div>Change default board size:</div>
                <input id="board-size-input" type="number" onChange={this.handleBoarSizeChange.bind(this)} placeholder={localStorage.getItem('board-size')}/>
            </>
        );
    }
}

export default Settings;