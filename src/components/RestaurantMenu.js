import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
    //const [resInfo, setresInfo]=useState(null);
    const { resId }=useParams();
    //console.log(resId);
    /*useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu=async ()=>{
        const data=await fetch(MENU_API+ resId);
        console.log(MENU_API+ resId);

        const json=await data.json();
        
        setresInfo(json.data);
    };*/
    const resInfo=useRestaurantMenu(resId);
    const [showIndex, setShowIndex]=useState(0);
    //console.log(resInfo);
    
    if(resInfo==null) return <Shimmer />
    const {name,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      console.log(categories);
    return(
        <div className="text-center">
            
             <div class="font-bold my-6 text-9xt">{name}</div>
             <div>Cuisines:{cuisines.join(",")}</div>
             {
                categories.map((category,index) => (
                  
                    <RestaurantCategory 
                    key={category?.caed?.card.title}
                    data={category?.card?.card}
                    showItems={index===showIndex}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)} 
                    />

                ))}      
             
        </div>
    );
};
export default RestaurantMenu;