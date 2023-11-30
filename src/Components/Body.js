import React from "react";
import ResturantCard from "./ResturantCard";
import restaurants from "../Utils/mockdata";
import { useState } from "react";

const Body  = () => {
    const [listofresturants,setResturants]  = useState(restaurants)
    return (
        <div>
            <div>
                <button className="filter-btn" onClick={() =>{
                    setResturants(restaurants.filter((res)=> res.info.avgRating >= 4.3).sort())
                }}>filter Top Rated resturants</button>
                <button className="filter-btn" onClick={()=>{
                    setResturants(restaurants)
                }}>Show all resturants</button>
            </div>
            <div className="resturant-container">
                { listofresturants.map((rest)=> <ResturantCard key={rest.info.id}  resdata = {rest.info}/>) }
            </div>
        </div>
    )
}

export default Body;