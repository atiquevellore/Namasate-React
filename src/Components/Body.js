import React, { useEffect } from "react";
import ResturantCard from "./ResturantCard";
import restaurants from "../Utils/mockdata";
import { useState } from "react";
import { RESTURANT_API_URL } from "../Utils/constants";
const Body = () => {
	const [listofresturants, setResturants] = useState([]);

	useEffect(() => {
		fetchData();
	}, [1]);

	const fetchData = async () => {
		const data = await fetch(RESTURANT_API_URL);
		const resturantdata = await data.json();
		// setResturants(resturantdata);
		setResturants(
			resturantdata.data.cards[3].card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	return (
		<div>
			<div>
				<button
					className="filter-btn"
					onClick={() => {
						setResturants(
							listofresturants.filter((res) => res.info.avgRating >= 4.3).sort()
						);
					}}>
					filter Top Rated resturants
				</button>
				<button className="search-btn"> Search</button>
			</div>
			<div className="resturant-container">
				{listofresturants.map((rest) => (
					<ResturantCard key={rest.info.id} resdata={rest.info} />
				))}
			</div>
		</div>
	);
};

export default Body;
