import RestaurantCard, {withVegNonVegLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withVegNonVegLabel } from "./RestaurantCard";

const Body=()=>{
    const [listOfRestaurants,setlistOfRestaurants]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchItem,setsearchItem]=useState("");
    const RestaurantCardWithVegNonVeg = withVegNonVegLabel(RestaurantCard);
    useEffect(()=>{fetchData()},[]);
   

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //console.log(json);
       //optional chaining
       //const restaurants1=json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
       setlistOfRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
      
       setfilteredRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //conditional rendering
    
    const onlineStatus=useOnlineStatus();
    if(!onlineStatus) return <h1>Looks like you are offline</h1>
    return listOfRestaurants.length===0 ? (
    <Shimmer />
    ):(
        <div className="body">
          <div className="flex">
              <div className="search">
                <input
                  type="text"
                  className="border border-black"
                  value={searchItem}
                  onChange={(e)=>setsearchItem(e.target.value)}/>
              <button className="px-4 py-1 bg-orange-200 mx-2 my-2 rounded"
                  onClick={()=>{
                    const filteredRest=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchItem.toLowerCase())
                       
                    );
                
                    setfilteredRestaurant(filteredRest);
                  }}>
                Search
               </button>
              </div>
            <div className="filter">

                <button 
                  className="px-4 py-1 bg-orange-100 mx-2 my-2 rounded"
                  onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4.4                       
                    );
                    setfilteredRestaurant(filteredList);
                  }}>
                    Top Rated restaurants
                  </button>
                  <button
            className="px-4 py-1 bg-orange-100 mx-2 my-2 rounded"
            onClick={() => {
              setfilteredRestaurant(listOfRestaurants); // Reset to the original list
              setsearchItem(""); // Clear the search input
            }}
          >
            Remove Filter
          </button>
                  
            </div>
            </div>
            <div className="flex flex-wrap">
                {
                  filteredRestaurant.map((restaurant)=>(
                    <Link
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}
                  >
                    {/* Display Veg/Non-Veg label by calling the HOC */}
                    <RestaurantCardWithVegNonVeg resData={restaurant} />
                  </Link>
                    ))}
                

            </div>
             
        </div>
    );
}
export default Body;