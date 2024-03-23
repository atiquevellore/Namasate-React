import { useDispatch } from "react-redux";
import { ITEM_CDN_URL } from "../../Utils/Constants";
import { addItem } from "../../store/cartSlice";

const ItemCard = ({ item }) => {
	const { name, price, defaultPrice, description, imageId } = item.card.info;

	const dispatch = useDispatch();

	const addToCart = (item) => {
		dispatch(addItem(item));
	};
	return (
		<>
			<div className="mx-5 flex justify-between">
				<div>
					<h3 className=" font-bold my-2">{name}</h3>
					<h4>₹{price ? price / 100 : defaultPrice / 100}</h4>
					<p className=" my-2">{description}</p>
				</div>
				<div className="relative">
					<img
						src={ITEM_CDN_URL + imageId}
						className=" mx-2 my-2 rounded-lg  "
					/>
					<button
						className=" absolute bottom-0  right-5 px-2 py-2 bg-white text-black rounded-md "
						onClick={() => addToCart(item)}>
						ADD
					</button>
				</div>
			</div>
		</>
	);
};

export default ItemCard;
