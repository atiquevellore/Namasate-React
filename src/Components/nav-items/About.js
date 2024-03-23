import UserInfo from "./UserInfo";
import React, { Component } from "react";
import userContext from "../../Utils/userContext";

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
				<userContext.Consumer>
					{({ userName }) => (
						<h1 className=" font-semibold">Username: {userName}</h1>
					)}
				</userContext.Consumer>
				<h1>About Me</h1>
				<UserInfo />
			</>
		);
	}
}

export default About;
