import React, { useState, useEffect } from 'react'
import "./nav.scss"
import DateTime from "./DateTime";

const Nav= () =>{
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar-icons/apple.svg" />        
                </div>

                <div className="nav-items">
                    <p>Devashish Kubade</p>
                </div>

                 <div className="nav-items">
                    <p>File</p>
                </div>

                <div className="nav-items">
                    <p>Window</p>
                </div>

                <div className="nav-items">
                    <p>Terminal</p>
                </div>


            </div>
            <div className ="right">
                <div className="nav-icons">
                    <img src="/navbar-icons/wifi.svg" alt="" />
                </div>

            <div className="nav-item">
                <DateTime/>
            </div>

            </div>
        </nav>
    )
}

export default Nav