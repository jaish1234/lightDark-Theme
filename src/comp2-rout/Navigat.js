// Router -->  npm install react-router-dom

import React from 'react'
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Home11 from './Home11'
import About11 from './About11'
import Contact11 from './Contact11'
 
function Navigat() {
  return (
    <div>
        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Home11/>}></Route>
                <Route path='/About' element={<About11/>}></Route>
                <Route path='/Contact' element={<Contact11/>}></Route>

            </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Navigat



// outlet mate

{/* <BrowserRouter>

<Routes>

    <Route path='/' element={<Home11/>}></Route>

    <Route element={<Outlet/>}>
      <Route index element={<Home11/>}></Route>
      <Route path='/About' element={<About11/>}></Route>
      <Route path='/Contact' element={<Contact11/>}></Route>
    </Route>

</Routes>

</BrowserRouter> */}

