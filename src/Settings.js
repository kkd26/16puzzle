import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import { setMainColor } from './utils';

class Settings extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: localStorage.getItem('main-color')
        }
    }

    handleChange(color){
        this.setState({color: color});
    }

    render() {
        return (
            <>
            Change main color:
            <HuePicker
                color={this.state.color}
                onChange={this.handleChange.bind(this)}
                onChangeComplete={(x => setMainColor(x.hex))}
            />
            </>
        );
    }
}

export default Settings;