import { useContext, useState } from "react";
import { LOGO_URL } from "../../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import userContext from "../../Utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [val, setValue] = useState("login");

	const { userName } = useContext(userContext);
	const onlineStatus = useOnlineStatus();

	const cartItems = useSelector((store) => store.cart.items);

	console.log("cart items", cartItems);
	return (
		<div className="flex justify-between  mx-3 my  bg-white shadow-xl">
			<div>
				<img className=" h-16 " src={LOGO_URL} />
				<h2 className=" italic font-bold">Food Order Hub</h2>
			</div>
			<div>
				<ul className="flex  m-5">
					<li className="m-4">Status: {onlineStatus ? "🟢" : "🔴"}</li>
					<li className="m-4">
						<Link to="/">Home</Link>
					</li>
					<li className="m-4">
						<Link to="/about">About</Link>
					</li>
					<li className="m-4">
						<Link to="/help">Help</Link>
					</li>
					<li className="m-4">
						<Link to="/cart">Cart ( {cartItems.length}) </Link>
					</li>

					<div className=" bg-blue-300     m-2 p-2 rounded-lg">
						<button
							onClick={() => {
								val === "login" ? setValue("logout") : setValue("login");
							}}
							className=" italic ">
							{val}
						</button>
					</div>
					<li className=" m-4 italic font-serif"> {userName}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
