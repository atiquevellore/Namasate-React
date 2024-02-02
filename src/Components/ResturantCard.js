import { IMAGE_CDN_URL } from "../Utils/Constants";
const ResturantCard = ({ resdata }) => {
	const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
		resdata;
	const { slaString } = resdata?.sla;
	return (
		<div className="res-card">
			<img className="res-logo" src={IMAGE_CDN_URL + cloudinaryImageId} />
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRatingString}</h4>
			<h4>{costForTwo}</h4>
			<h4>{slaString}</h4>
		</div>
	);
};

export default ResturantCard;
