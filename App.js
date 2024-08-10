import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard= (props) => {
    return (<div className="res-card">
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.5</h4>
        <h4>40 minutes</h4>
    </div>
    );
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Asian, Biryani, Meals"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Drinks"/>

            </div>
             
        </div>
    );
}

const AppLayout=()=>{
    return (
        <div class="app">
            <Header/>
            <Body/>
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


