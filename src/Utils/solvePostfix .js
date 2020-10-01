function computeResults(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
}

function isOperator(ch) {
  return ch === "+" || ch === "-" || ch === "*" || ch === "/";
}

export default function evaluatePostfix(outputQueue) {
  let seq = outputQueue.split(" ");
  console.log(seq);
  let stack = [];
  for (let i = 0; i < seq.length; i++) {
    if (isOperator(seq[i])) {
      let val1 = stack.pop();
      let val2 = stack.pop();
      console.log(seq[i]);
      console.log(val1, val2);
      stack.push(computeResults(parseFloat(val2), parseFloat(val1), seq[i]));
    } else {
      stack.push(seq[i]);
    }
    console.log(stack);
  }
  return stack.pop();
}
