const MenuItem = ({ info }) => {
	const { name, price, defaultPrice } = info.card.info;
	return (
		<div>
			<div className="menu-item">
				<h3>{name}</h3>
				<h3>RS {price / 100 || defaultPrice / 100}</h3>
			</div>
			<hr />
		</div>
	);
};

export default MenuItem;
