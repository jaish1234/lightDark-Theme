// hooks me useEffect

import React from 'react'
import { useEffect, useState } from 'react'

function EffApi() {

    let [counter, setCounter] = useState(0)

    let [colorCode, setColorCode] = useState(0)

    useEffect(() => {
        console.log("this is effApi in and this useEffect hooks")
    }, [colorCode, counter])

    const colorNameArray = ["blue", "gray", "aqua", "maroon", "red", "pink", "green", "yello", "purple", "greenyellow"]

    
    // document.getElementsByTagName('body')\.style.backgroundcolor = colorNameArray[colorCode]
    document.body.style.backgroundColor = colorNameArray[colorCode]


    return (
    <>
    <h1>this is use effect example</h1>


    <button onClick={() => {
        setCounter(counter - 1)
        console.log("your counter == ", counter);
      }}>Decrement</button>
      {counter}
      <button onClick={() => {
        counter += 1
        setCounter(counter + 1)
        console.log("your counter == ", counter);
      }}>Increment</button>
      

      <button onClick={() => {
        console.log("this is change color button");
        setColorCode(Math.floor(Math.random() * 10) + 0)
      }}>change color</button>

    </>
  )
}

export default EffApi