import React, { useContext } from 'react'
import Call5 from './Call5'
import { mycontext } from './Call1'

function Call4() {
    let name1 = useContext(mycontext)
  return (
    <div>
        <h1>This is Call4 componet</h1>
        <h2>
            data == {name1}
        </h2>

        <Call5/>
    </div>
  )
}

export default Call4