import React, { createContext } from 'react'
import Call2 from './Call2'


const mycontext = createContext() 

function Call1() {
    let name = "jaish kunjadiya"
  return (
    <div>
        <h1>This is Call1 componet</h1>

        <mycontext.Provider value={name}>
            <Call2/>
        </mycontext.Provider>
    </div>
  )
}

export default Call1
export {mycontext}
