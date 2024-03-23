import ItemCard from "./ItemCard";

const MenuItem = ({ ItemCategory, showItem, setDisplayItem, index }) => {
	const { title, itemCards } = ItemCategory.card.card;

	function handleClick() {
		if (showItem) {
			setDisplayItem(null);
		}
		setDisplayItem();
	}
	return (
		<div>
			<div className="flex  justify-between my-5 " onClick={handleClick}>
				<span className=" font-bold">
					{title} ({itemCards.length})
				</span>
				<span>
					<button>🔽</button>
				</span>
			</div>
			<hr className=" bg-gray-500 border-2" />
			{showItem &&
				itemCards.map((item, index) => (
					<div>
						<ItemCard item={item} key={index} />
						<hr className=" border bg-gray-400" />
					</div>
				))}
			<hr />
		</div>
	);
};

export default MenuItem;
