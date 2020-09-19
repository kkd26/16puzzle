import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.scss';
import Game from './Game';
import * as serviceWorker from './serviceWorker';
import { getFromStorageOrDefault, setMainColor } from './utils';

window.$ = $;

var mainColor = getFromStorageOrDefault('main-color');

setMainColor(mainColor);

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

$("#0").css({"visibility": "hidden", "z-index": "-1"});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
