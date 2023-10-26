import { useRef, useEffect, useState } from "react";
import "./App.css";

function App() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      if (buttonRef.current) {
        buttonRef.current.style.color = "red";
      }
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", handleClick);
    }
  }, []);

  useEffect(() => {
    setResult(`${TextAndNumber(count)} ${count} `);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleTextToggle = () => {
    setResult("Count Cells With Text");
  };

  const handleTextRemove = () => {
    setResult("");
  };

  // Function to convert a number to its text representation
  const TextAndNumber = (number: any) => {
    const textArray = [
      "Zero:-",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const numDigits = String(number).split("").map(Number);

    if (numDigits.length === 0) {
      return "zero";
    }

    return numDigits.map((number) => textArray[number]).join(" ");
  };

  return (
    <div className="body">
      <div className="container">
          <h1>Increment</h1>
          <button ref={buttonRef} onClick={handleTextToggle}>
            Add Me
          </button>
          <button onClick={handleTextRemove}>Delete</button>
          <button onClick={handleIncrement}>+</button>
      </div>
      <div className="container1">
          <h1>{result}</h1>
      </div>
    </div>
  );
}

export default App;
