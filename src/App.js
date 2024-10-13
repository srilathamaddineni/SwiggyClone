import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/Appstore";
import Cart from "./components/Cart";


const AppLayout=()=>{
    
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    );

};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
                errorElement:< Error />,
            },
            {
                path:"/contact",
                element:<Contact />,
                errorElement:< Error />,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,

            },
            {
                path:"/cart",
                element:<Cart />,
            },
        ],
        errorElement:< Error />,

    } ,
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


