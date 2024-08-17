import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    const [listOfRestaurants,setlistOfRestaurants]=useState(restList);
    return(
        <div className="body">
            <div className="filter">
                <button 
                  className="filter-btn"
                  onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setlistOfRestaurants(filteredList);
                  }}
                  >
                    Top Rated restaurants
                  </button>
            </div>
            <div className="res-container">
                {
                  listOfRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
                

            </div>
             
        </div>
    );
}
export default Body;