import React, { Component } from "react";

export default class Results extends Component {
  render() {
    const { result, onKeyDown, onChange } = this.props;
    return (
      <div>
        <input
          name="result"
          className="result"
          value={result}
          onKeyDown={onKeyDown}
          onChange={onChange}
        />
      </div>
    );
  }
}
