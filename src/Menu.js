import React, { Component } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import $ from 'jquery';
import './Menu.scss';
import Settings from './Settings';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.changeBoardSize = props.changeBoardSize;
  }

  open(e) {
    const menu = $(e.target).closest('.icon-container').next('.menu');
    menu.addClass("open");
  }

  close(e) {
    const menu = $(e.target).closest('.menu');
    menu.removeClass("open");
  }

  render() {
    var { name, classes } = this.props;
    var content;

    if (name === "Menu") {
      name = <><FaBars /><span className="desktop">{name}</span></>;
      content =
        <>
          <Menu name="Start new game" />
          <Menu name="Profile" />
          <Menu name="Settings" changeBoardSize={this.changeBoardSize} />
        </>;
    }
    else if (name === "Start new game") {
      content =
        <>
          <div>Game 1</div>
          <div>Game 2</div>
          <div>Game 3</div>
        </>;
    }
    else if (name === "Settings") {
      content = <Settings changeBoardSize={this.changeBoardSize} />;
    }

    return (
      <>
        <div className={`icon-container ${classes}`} onClick={this.open} onTouchEndCapture={this.open}>
          {name}
        </div>

        <div className="menu">
          <div className="icon-container" onClick={this.close} onTouchEndCapture={this.close}><FaTimes /> Close</div>
          <div className="menu-list">
            {content}
          </div>
        </div>
      </>
    );
  }
}

export default Menu;