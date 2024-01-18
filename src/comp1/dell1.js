// Data passing

import React from 'react'
import Dell2 from './dell2'


function Dell1() {

  let name = "jaish kunjadiya"

  function h1() {
    console.log("this is h1 function");
    return "j.k. bhadiyad"
  }

  return (
    <>
      <h1>
        This is first component
      </h1>

      <h2>
        and the name is == {h1()} 
      </h2>

      <Dell2 myData={name} myData2={345}/>
    </>
  )
}

export default Dell1