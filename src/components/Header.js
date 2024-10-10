import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header =()=>{
    const [btnName, setbtnName]=useState("login");
    const {loggedInUser}=useContext(UserContext);
    return (
        <div className="flex justify-between bg-orange-400 shadow-lg">
            <div className="logo-container">
            <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                      <Link to="" >Home</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/about" >About</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact" >Contact</Link>
                    </li>
                    <li className="px-4"><button 
                    onClick={()=>{
                        btnName==="login" 
                        ?setbtnName("logout")
                        :setbtnName("login")}}
                        >
                        {btnName}
                        </button></li>
                    <li>{loggedInUser}</li>
                </ul>
                
            </div>
        </div>
    )
}
export default Header;