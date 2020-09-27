import React, { Component } from "react";
import "../App.css";

export default class Keypad extends Component {
  render() {
    let buttons;
    const { name, length, onClick } = this.props;
    if (length !== 0 && length % 4 === 0) {
      buttons = (
        <div className="button-div">
          <br />
          <button name={name} onClick={onClick}>
            {name}
          </button>
        </div>
      );
    } else {
      buttons = (
        <div className="button-div">
          <button name={name} onClick={onClick}>
            {name}
          </button>
        </div>
      );
    }
    return <div className="button">{buttons}</div>;
  }
}
