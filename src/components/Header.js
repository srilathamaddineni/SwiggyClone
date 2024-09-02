import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";


const Header =()=>{
    const [btnName, setbtnName]=useState("login");
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
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