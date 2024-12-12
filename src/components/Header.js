import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header =()=>{
    const [btnName, setbtnName]=useState("login");
    const {loggedInUser}=useContext(UserContext);
    //subscribing to the store using the selector
     const cartItems=useSelector((store)=>store.cart.items);
     console.log(cartItems);
     
    return (
        <div className="flex justify-between items-center bg-orange-400 shadow-lg">
            <div className="logo-container">
            <img className="w-20 h-20 object-contain" src={LOGO_URL}></img>
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
                    <li className="px-4">
                    <Link to="/cart" >Cart({cartItems.length})</Link>
                    </li>
                    {/*
                    <li className="px-4"><button 
                    onClick={()=>{
                        btnName==="login" 
                        ?setbtnName("logout")
                        :setbtnName("login")}}
                        >
                        {btnName}
                        </button></li>
                    <li>{loggedInUser}</li>
                    */}
                </ul>
                
            </div>
        </div>
    )
}
export default Header;