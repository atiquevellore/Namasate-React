import ResturantCard from "./ResturantCard";
import restaurants from "../Utils/mockdata";

const Body  = () => {
    return (
        <div>
            <div className="search-bar">
                <h4>search</h4>
            </div>
            <div className="resturant-container">
                { restaurants.map((rest)=> <ResturantCard key={rest.info.id}  resdata = {rest.info}/>) }
            </div>
        </div>
    )
}

export default Body;