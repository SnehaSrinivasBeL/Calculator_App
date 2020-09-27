import React, { Component } from "react";
import Keypad from "../src/components/Keypad";
import Results from "../src/components/Results";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      result: "",
      keytype: [
        "(",
        "CE",
        ")",
        "C",
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "*",
        "sin",
        "cos",
        "tan",
        "÷",
        ".",
        "0",
        "=",
        "copy",
      ],
    };
    this.onClick = this.onClick.bind(this);
  }
  clear = () => {
    this.setState({
      result: "",
    });
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }
    debugger;
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  trigonometric = (value) => {
    let exp = eval(`Math.${value}(this.state.result)`);
    debugger;
    this.setState({
      result: exp,
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  onClick(e) {
    debugger;
    let btn_value = e.target.name;
    if (btn_value === "copy") {
      navigator.clipboard.writeText(this.state.result);
    } else if (btn_value === "=") {
      this.calculate();
    } else if (btn_value === "C") {
      this.clear();
    } else if (btn_value === "CE") {
      this.backspace();
    } else if (
      btn_value === "sin" ||
      btn_value === "cos" ||
      btn_value === "tan"
    ) {
      this.trigonometric(btn_value);
    } else {
      this.setState({
        result: this.state.result + btn_value,
      });
    }
  }
  render() {
    return (
      <div className="calculator-body">
        <h1>My Calculator</h1>
        <Results result={this.state.result} />
        {this.state.keytype.map((elm, index) => {
          return (
            <Keypad
              name={elm}
              key={index}
              length={index}
              onClick={this.onClick}
            />
          );
        })}
      </div>
    );
  }
}
