import { useState } from "react";
import "./App.css";

function App() {
  const [result, useResult] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const getInput1 = (event) => {
    const inputNumber = parseInt(event.target.value);

    setInput1(inputNumber);

    console.log("value is:", event.target.value);
  };
  const getInput2 = (event) => {
    const inputNumber = parseInt(event.target.value);
    setInput2(inputNumber);

    console.log("value is:", event.target.value);
  };

  const Add = () => {
    useResult(input1 + input2);
  };
  const Sub = () => {
    useResult(input1 - input2);
  };
  const Divison = () => {
    useResult(input1 / input2);
  };
  const Multiply = () => {
    useResult(input1 * input2);
  };

  return (
    <>
      <h1>Basic Calculator</h1>
      <h2>Result {result}</h2>
      <p>Input One</p>
      <div>
        <input type="number" onChange={getInput1} value={input1}></input>
      </div>
      <p>Input Two</p>

      <div>
        <input type="number" onChange={getInput2} value={input2}></input>
      </div>
      <br></br>
      <button onClick={Add}>Add</button>
      <button onClick={Sub}>Sub</button>
      <button onClick={Divison}>Division</button>
      <button onClick={Multiply}>Multiplier</button>
    </>
  );
}

export default App;
