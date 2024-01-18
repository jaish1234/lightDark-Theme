// topic = condition randaring

import React, { useState } from 'react'

function Con_rander() {
    const [langflag, setlangflag] = useState()
  return (
    <>
        <button onClick={() => {
            setlangflag(true)
        }}>English</button>

        <button onClick={() => {
            setlangflag(false)
        }}>ગુજરાતી</button>

        {
            (langflag === true)?<h1>jaish kunjadiya</h1>: <h1>જૈશ કુંજડીયા</h1>

            // (langflag === true)&& <h1>jaish kunjadiya</h1>
        }
    </>
  )
}

export default Con_rander
