import { IMAGE_CDN_URL } from "../../Utils/Constants";
const RestaurantCard = ({ resdata }) => {
	const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
		resdata;
	const { slaString } = resdata?.sla;
	return (
		<div className=" my-3 mx-3   h-auto w-72 bg-white  rounded-md   border-2 shadow-xl  border-gray-300  ">
			<img
				className="rounded-lg  px-6 py-3  "
				src={IMAGE_CDN_URL + cloudinaryImageId}
			/>
			<h2 className=" px-3 font-semibold">{name}</h2>
			<ul className=" block px-3 list-none  font-sans">
				<li>{avgRatingString}</li>
				<p className=" whitespace-normal text-wrap">{cuisines.join(", ")}</p>
				<li>{costForTwo}</li>
				<li>{slaString}</li>
			</ul>
		</div>
	);
};

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label>Promoted</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
