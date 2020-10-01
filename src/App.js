import React, { Component } from "react";
import Keypad from "../src/components/Keypad";
import Results from "../src/components/Results";
import MathSolver from "./Utils/infixToPostfix";
import evaluatePostfix from "./Utils/solvePostfix ";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      result: "",
      undostack: [],
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
        "Undo",
        "Redo",
      ],
    };
    this.onClick = this.onClick.bind(this);
  }
  clear = () => {
    this.setState({
      result: "",
    });
  };

  Undo = () => {
    this.setState({
      result: "",
    });
  };

  calculate = () => {
    debugger;
    var checkResult = "";
    let postfix = "";
    var ms = new MathSolver();
    console.log(MathSolver);
    if (this.state.result) {
      checkResult = this.state.result;
    }
    debugger;
    postfix = ms.infixToPostfix(checkResult);
    let trimmed = postfix.trim();
    let result = evaluatePostfix(trimmed);
    try {
      debugger;
      this.setState({
        // eslint-disable-next-line
        result: result,
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  trigonometric = (value) => {
    let exp = eval(`Math.${value}(this.state.result)`);
    this.setState({
      result: exp,
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.toString().slice(0, -1),
    });
  };

  isOperator = (ch) => {
    return ch === "+" || ch === "-" || ch === "*" || ch === "/";
  };
  onKeyDown = (e) => {
    debugger;
    let btn_value = e.key;
    if (e.key === "Backspace") {
      this.setState({
        result: this.state.result.toString().slice(0, -1),
      });
    } else if (e.key >= "0" && e.key <= "9") {
      this.setState({
        result: this.state.result + btn_value,
      });
    }
    console.log(this.state.result);
    debugger;
  };

  onChange = (e) => {
    debugger;
    let btn_value = e.target.value;
    // this.setState({
    //   result: this.state.result + btn_value,
    // });
  };

  onClick = (e) => {
    let btn_value = e.target.name;
    if (btn_value === "copy") {
      navigator.clipboard.writeText(this.state.result);
    } else if (btn_value === "=") {
      this.calculate();
    } else if (btn_value === "CE") {
      this.clear();
    } else if (btn_value === "Undo") {
      this.undo();
    } else if (btn_value === "C") {
      this.backspace();
    } else {
      if (!this.isOperator(btn_value)) {
      } else {
      }
      this.setState({
        result: this.state.result + btn_value,
      });
    }
  };
  render() {
    return (
      <div className="calculator-body">
        <h1>My Calculator</h1>
        <Results
          result={this.state.result}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
        />
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
