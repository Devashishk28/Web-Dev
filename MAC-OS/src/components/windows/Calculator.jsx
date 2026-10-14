import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./calculator.scss";

const Calculator = ({
  onClose,
  onMinimize,
  isMinimized,
  title,
}) => {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleNumber = (value) => {
    if (resetDisplay) {
      setDisplay(value);
      setResetDisplay(false);
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const handleOperator = (op) => {
    setPrevious(Number(display));
    setOperator(op);
    setResetDisplay(true);
  };

  const calculate = () => {
    if (previous === null || !operator) return;

    const current = Number(display);
    let result;

    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "−":
        result = previous - current;
        break;
      case "×":
        result = previous * current;
        break;
      case "÷":
        result = current === 0 ? "Error" : previous / current;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setPrevious(null);
    setOperator(null);
    setResetDisplay(true);
  };

  const clear = () => {
    setDisplay("0");
    setPrevious(null);
    setOperator(null);
    setResetDisplay(false);
  };

  const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const handleClick = (value) => {
    if (/^\d$/.test(value)) return handleNumber(value);

    if (value === "AC") return clear();

    if (value === "+/-") {
      setDisplay(String(Number(display) * -1));
      return;
    }

    if (value === "%") {
      setDisplay(String(Number(display) / 100));
      return;
    }

    if (value === ".") {
      if (resetDisplay) {
        setDisplay("0.");
        setResetDisplay(false);
      } else if (!display.includes(".")) {
        setDisplay(display + ".");
      }
      return;
    }

    if (value === "=") return calculate();

    handleOperator(value);
  };


return (
  <MacWindow
    title={title || "Calculator"}
    onClose={onClose}
    onMinimize={onMinimize}
    isMinimized={isMinimized}
  >
    <div className="calculator-container">
      <div className="calculator-window">
        <div className="calculator-display">{display}</div>

        <div className="calculator-buttons">
          {buttons.flat().map((value) => (
            <button
              key={value}
              className={`calc-btn ${
                ["÷", "×", "−", "+", "="].includes(value)
                  ? "operator"
                  : ["AC", "+/-", "%"].includes(value)
                  ? "utility"
                  : ""
              } ${value === "0" ? "zero" : ""}`}
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  </MacWindow>
);

}

export default Calculator;
