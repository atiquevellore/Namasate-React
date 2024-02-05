import "./styles/restaurant.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuItem from "./MenuItem";
import ShimmerRestaurantCard from "../Shimmer/ShimmerRestaurantCard";
const RestaurantMenu = () => {
	const [menuinfo, setMenuInfo] = useState(null);
	const params = useParams();
	console.log(params);
	useEffect(() => {
		fetchMenu();
	}, []);

	console.log("usestate" + useState());

	const fetchMenu = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.2733209&lng=76.389701&restaurantId=" +
				params?.id
		);
		console.log(data);
		const menudata = await data.json();
		setMenuInfo(menudata);
		console.log(menudata);
		console.log(menuinfo?.data?.cards[0].card.card.info);
	};

	if (menuinfo === null) {
		return <ShimmerRestaurantCard />;
	}
	const { name, cuisines, areaName, avgRating } =
		menuinfo?.data?.cards[0].card?.card?.info;

	const { itemCards } =
		menuinfo?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
			.card;
	return (
		<div className="menu-container">
			<div className="menu-name">
				<div>
					<h1>{name}</h1>
					<h3>{cuisines.join(",")}</h3>
					<h3>{areaName}</h3>
				</div>
				<div>
					<h3>{avgRating}</h3>
				</div>
			</div>
			<hr className="hr"></hr>
			<div>
				{itemCards.map((item) => (
					<MenuItem key={item.card.info.id} info={item} />
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
