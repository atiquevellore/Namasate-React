import { useParams } from "react-router";
import MenuItem from "./MenuItem";
import ShimmerRestaurantCard from "../Shimmer/ShimmerRestaurantCard";
import useResturantMenu from "../../Utils/useResturantMenu";
import { useState } from "react";
const RestaurantMenu = () => {
	const params = useParams();
	const [displayItem, setDisplayItem] = useState(null);
	const menuinfo = useResturantMenu(params?.id);

	if (menuinfo === null) {
		return <ShimmerRestaurantCard />;
	}
	const { name, cuisines, areaName, avgRating, totalRatingsString } =
		menuinfo?.data?.cards[0].card?.card?.info;
	const groupedCards =
		menuinfo?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;
	console.log(groupedCards);
	const categories = groupedCards.filter(
		(card) =>
			card.card.card?.["@type"] ===
			"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
	);

	return (
		<div className="   w-6/12 mx-3 ">
			<div className="  my-10  ">
				<div className="flex  justify-between">
					<div className=" pr-40">
						<h2 className=" font-bold">{name}</h2>
						<h3>{cuisines.join(",")}</h3>
						<h3>{areaName}</h3>
					</div>
					<div className="  border border-gray-400    max-h-max  px-2   rounded-md ">
						<h3 className="   text-green-700  font-bold m-2 text-sm">
							⭐ {avgRating}
						</h3>
						<hr />
						<h4 className=" m-2 text-sm">{totalRatingsString}</h4>
					</div>
				</div>
			</div>
			<div>
				{categories.map((ItemCategory, index) => (
					<MenuItem
						ItemCategory={ItemCategory}
						key={index}
						showItem={index === displayItem ? true : false}
						setDisplayItem={() => {
							setDisplayItem(index);
						}}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
