import React, { useEffect } from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
import { useState } from "react";
import { RESTAURANT_API_URL } from "../Utils/Constants";
import ShimmerContainer from "./Shimmer/ShimmerContainer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
	const [listofrestaurants, setListOfRestaurants] = useState([]);
	const [filteredrestaurants, setFilterRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	const onlineStatus = useOnlineStatus();

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const data = await fetch(RESTAURANT_API_URL);
		const resturantdata = await data.json();
		setListOfRestaurants(
			resturantdata?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
		setFilterRestaurants(
			resturantdata?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
	}

	if (listofrestaurants.length === 0) {
		return <ShimmerContainer />;
	}

	if (onlineStatus === false) {
		return <h1>Looks Like You are offline 😢</h1>;
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
							const filrestaurants = listofrestaurants.filter((item) =>
								item.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilterRestaurants(filrestaurants);
						}}>
						{" "}
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						setFilterRestaurants(
							listofrestaurants
								.filter((res) => res.info.avgRating >= 4.3)
								.sort()
						);
					}}>
					filter Top Rated resturants
				</button>
			</div>
			<div className="restaurant-container">
				{filteredrestaurants.map((resitem) => (
					<Link
						to={"/resturants/" + resitem.info.id}
						key={resitem.info.id}
						className="CardLink">
						<RestaurantCard resdata={resitem.info} />
					</Link>
				))}
				;
			</div>
		</div>
	);
};

export default Body;
