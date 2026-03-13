import React from "react";
import Counter from "./Counter";
import Batsman from "./Batsman";

const App = () => {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <div>
      <h3>React Core Concepts</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Clicked 2");
        }}
      >
        Click Me
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert("click 4")}>Click me</button>
      <button onClick={() => handleAdd5(15)}>Clicked Add 5</button>
    </div>
  );
};

export default App;
