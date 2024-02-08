import UserInfo from "./UserInfo";
import { Component } from "react";

class About extends Component {
	constructor(props) {
		super(props);

		console.log("parent constructor");
	}

	componentDidMount() {
		console.log("Parent Component did mount");
	}
	render() {
		console.log("parent render");
		return (
			<>
				<h1>About Me</h1>
				<UserInfo />
			</>
		);
	}
}

export default About;
