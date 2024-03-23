import React, { useContext, useEffect } from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
import { useState } from "react";
import { RESTAURANT_API_URL } from "../Utils/Constants";
import ShimmerContainer from "./Shimmer/ShimmerContainer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userContext from "../Utils/userContext";
const Body = () => {
	const [listofrestaurants, setListOfRestaurants] = useState([]);
	const [filteredrestaurants, setFilterRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	const { userName, setUserName } = useContext(userContext);

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
			<div className="filter-container ">
				<input
					className="placeholder:italic
						 placeholder:text-slate-400 
						  bg-white  border border-slate-300 
						  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
						   focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm 
						   m-2   w-auto inline-block"
					placeholder="Search for Resturants..."
					type="text"
					name="search"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button
					className=" bg-blue-300  font-sans m-3 p-1 rounded-lg"
					onClick={() => {
						const filrestaurants = listofrestaurants.filter((item) =>
							item.info.name.toLowerCase().includes(searchText.toLowerCase())
						);
						setFilterRestaurants(filrestaurants);
					}}>
					{" "}
					Search
				</button>
				<button
					className=" bg-blue-300   font-sans  m-3 p-1 rounded-lg"
					onClick={() => {
						setFilterRestaurants(
							listofrestaurants
								.filter((res) => res.info.avgRating >= 4.3)
								.sort()
						);
					}}>
					Top Rated Resturants
				</button>
				<input
					className="placeholder:italic
						 placeholder:text-slate-400 
						  bg-white  border border-slate-300 
						  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
						   focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm 
						   m-2   w-auto inline-block"
					placeholder="add username for context"
					type="text"
					name="search"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</div>
			<div className="flex  flex-wrap">
				{filteredrestaurants.map((resitem) => (
					<Link
						to={"/resturants/" + resitem.info.id}
						key={resitem.info.id}
						className="CardLink">
						<RestaurantCard resdata={resitem.info} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
