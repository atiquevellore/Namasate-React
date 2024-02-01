import React, { useEffect } from "react";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { RESTURANT_API_URL } from "../Utils/Constants";
import ShimmerContainer from "./Shimmer/ShimmerContainer";
const Body = () => {
	const [listofresturants, setListOfResturants] = useState([]);
	const [filteredresturants, setFilterResturants] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, [1]);

	async function fetchData() {
		const data = await fetch(RESTURANT_API_URL);
		const resturantdata = await data.json();
		setListOfResturants(
			resturantdata?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
		setFilterResturants(
			resturantdata?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
	}

	if (listofresturants.length === 0) {
		return <ShimmerContainer />;
	}
	return (
		<div>
			<div className="filter-container">
				<div>
					<input
						type="text"
						className="searchbox"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<button
						className="search-btn"
						onClick={() => {
							const filresturants = listofresturants.filter((item) =>
								item.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilterResturants(filresturants);
						}}>
						{" "}
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						setFilterResturants(
							listofresturants.filter((res) => res.info.avgRating >= 4.3).sort()
						);
					}}>
					filter Top Rated resturants
				</button>
			</div>
			<div className="resturant-container">
				{filteredresturants.map((resitem) => (
					<ResturantCard key={resitem.info.id} resdata={resitem.info} />
				))}
				;
			</div>
		</div>
	);
};

export default Body;
