import React, { Component } from "react";

export default class Results extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}
