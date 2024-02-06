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
				<UserInfo
					name={"first"}
					designation={"Software Engineer I"}
					location={"Bangalore"}
				/>
				<UserInfo
					name={"second"}
					designation={"Software Engineer I"}
					location={"Bangalore"}
				/>
				<UserInfo
					name={"third"}
					designation={"Software Engineer I"}
					location={"Bangalore"}
				/>
			</>
		);
	}
}

export default About;
