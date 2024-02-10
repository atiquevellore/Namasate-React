import { useState, useEffect } from "react";

const useResturantMenu = (id) => {
	const [menuInfo, setMenuInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.2733209&lng=76.389701&restaurantId=" +
				id
		);
		const menudata = await data.json();
		setMenuInfo(menudata);
	};

	return menuInfo;
};

export default useResturantMenu;
