import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu=()=>{
    const [resInfo, setresInfo]=useState(null);
    const { resId }=useParams();
    console.log(resId);
    useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu=async ()=>{
        const data=await fetch(MENU_API+ resId);
        console.log(MENU_API+ resId);

        const json=await data.json();
        
        setresInfo(json.data);
    };
    console.log(resInfo);
    
    if(resInfo==null) return <Shimmer />
    const {name,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    console.log(itemCards);
    return(
        <div className="menu">
            
             <div>Restaurant name:{name}</div>
             <div>cuisines:{cuisines.join(",")}</div>
             <div><h1>MENU</h1></div>
             <div>{itemCards.map((items)=>(
                <li key={items.card.info.id}>{items.card.info.name}</li>
                ))}</div>
             
             
        </div>
    );
};
export default RestaurantMenu;