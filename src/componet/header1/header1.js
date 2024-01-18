import "./header1.css";
import React, { useState } from "react";
import logo from "../i-v/img/logo1.png";
import Home from "../home/home";

function Header() {
  let [color, changecolor] = useState();
  let [color1, changecolor1] = useState();
  return (
    <>
      <div    
        style={{
          color: color1,
          paddingBottom: 20,
          backgroundColor: color,
        }}  
      >
        <div className="header">
          <nav>
            <img src={logo} className="logo"></img>
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">login</a>
              </li>
              <li>
                <a href="#">Footer</a>
              </li>
              <li className="btn">sign up</li>
              <button
                className="dark"
                onClick={() => {
                  changecolor1("white")
                  changecolor("black");
                  console.log("your color is == ", color);
                }}
              >
                Dark Them
              </button>

              <button
                className="light"
                onClick={() => {
                  changecolor("white");
                  changecolor1("black");
                  console.log("your color is == ", color);
                }}
              >
                Light Them
              </button>
            </ul>
          </nav>
        </div>
        <Home/>
      </div>
    </>
  );
}

export default Header;
