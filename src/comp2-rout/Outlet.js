import React from 'react'
import {Outlet} from 'react-router-dom'
import Header11 from './Header11'

function Outlet() {
  return (
    <div>
        <Header11/>
        <Outlet/>
    </div>
  )
}

export default Outlet
