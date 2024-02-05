import { useState } from "react";
import { LOGO_URL } from "../../Utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
	const [val, setValue] = useState("login");
	return (
		<div className="header-container">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
				<h2 className="logo-text">
					<i>Food Order Hub</i>
				</h2>
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/help">Help</Link>
					</li>
					<button
						className="login-btn"
						onClick={() => {
							val === "login" ? setValue("logout") : setValue("login");
						}}>
						{val}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
