import { useParams } from "react-router";
import MenuItem from "./MenuItem";
import ShimmerRestaurantCard from "../Shimmer/ShimmerRestaurantCard";
import useResturantMenu from "../../Utils/useResturantMenu";
const RestaurantMenu = () => {
	const params = useParams();

	const menuinfo = useResturantMenu(params?.id);

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
