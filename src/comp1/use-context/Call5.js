import React, { useContext } from 'react'
import { mycontext } from './Call1'

function Call5() {
    let name2 = useContext(mycontext)
  return (
    <div>
        <h1>This is Call5 componet == {name2}</h1>
    </div>
  )
}

export default Call5