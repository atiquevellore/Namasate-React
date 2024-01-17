import { LOGO_URL } from "../Utils/constants";

const Header = () => {
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
					<li>Home</li>
					<li>About Us</li>
					<li>Help</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
