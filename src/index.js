import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.scss';
import Game from './Game';
import * as serviceWorker from './serviceWorker';
import { setMainColor } from './utils';

window.$ = $;

const n = 4;

var mainColor = localStorage.getItem("main-color");
if(mainColor === null || !mainColor){
    mainColor = "#61DAFB";
}

setMainColor(mainColor);

ReactDOM.render(
    <Game n={n}/>,
    document.getElementById('root')
);

$("#0").css({"visibility": "hidden", "z-index": "-1"});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
