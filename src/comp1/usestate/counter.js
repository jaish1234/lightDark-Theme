// hooks
// useState means state management

import React, { useState } from "react";

function Counter() {
  let [color, changeColor] = useState();
  let [counter, setCounter] = useState(0);

  return (
    <>
    <div style={{backgroundColor: color,paddingBottom: 482}}>
      <button
        onClick={() => {
          changeColor("red");
          console.log("your color is == ", color);
          setCounter(counter - 1);
          console.log("your counter is == ", counter);
        }} >
        Decrement
      </button>

        <h2>{counter}</h2>

      <button
        onClick={() => {
        changeColor("green");
        console.log("your color is == ", color);
        setCounter(counter + 1);
        console.log("your counter is == ", counter);
        }} >
        Increment
      </button>
      </div>
    </>
  );
}

export default Counter;





// random

// console.log(Math.random());

// console.log(Math.round(Math.random() * 10));

// let max=999999 , min = 1000
// console.log(Math.trunc(Math.random() * (max-min)));

