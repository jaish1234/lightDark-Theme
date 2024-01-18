import React from 'react'
import {Link} from "react-router-dom"

function Header11() {
  return (
    <div>
        <header>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                width:"240px"
            }}>
                <div>
                    <Link to={"/"}>Home page</Link>
                </div>

                <div>
                    <Link to={"/About"}>About page</Link>
                </div>

                <div>
                    <Link to={"/Contact"}>Contact page</Link>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header11