import { IMAGE_CDN_URL } from "../Utils/constants";
const ResturantCard = ({ resdata }) => {
	const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
		resdata;
	return (
		<div className="res-card">
			<img className="res-logo" src={IMAGE_CDN_URL + cloudinaryImageId} />
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRatingString}</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

export default ResturantCard;
