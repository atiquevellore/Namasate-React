import React from "react";

class Help extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		console.log("after" + this.props);
		return <h1>help class component</h1>;
	}
}

export default Help;
