import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header =()=>{
    const [btnName, setbtnName]=useState("login");
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                      <Link to="" >Home</Link>
                    </li>
                    <li>
                    <Link to="/about" >About</Link>
                    </li>
                    <li>
                    <Link to="/contact" >Contact</Link>
                    </li>
                    <li><button 
                    onClick={()=>{
                        btnName==="login" 
                        ?setbtnName("logout")
                        :setbtnName("login")}}
                        >
                        {btnName}
                        </button></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;