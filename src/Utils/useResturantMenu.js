import { useState, useEffect } from "react";
import { Menu_INFO_URL } from "./Constants";

const useResturantMenu = (id) => {
	const [menuInfo, setMenuInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(Menu_INFO_URL + id);
		const menudata = await data.json();
		setMenuInfo(menudata);
	};

	return menuInfo;
};

export default useResturantMenu;
