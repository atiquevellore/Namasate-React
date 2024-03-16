import { useState } from "react";
import { LOGO_URL } from "../../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";

const Header = () => {
	const [val, setValue] = useState("login");
	const onlineStatus = useOnlineStatus();
	return (
		<div className="flex justify-between  mx-2 my-2 bg-red-300  shadow-lg">
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
					<div className=" bg-blue-300  font-sans m-2 p-2 rounded-lg">
						<button
							onClick={() => {
								val === "login" ? setValue("logout") : setValue("login");
							}}>
							{val}
						</button>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Header;
