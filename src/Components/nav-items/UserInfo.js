import React from "react";
class UserInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			UserData: {
				name: "dummy",
				avatar_url: "https://picsum.photos/200/300?random=1",
				bio: "",
				location: "",
			},
		};
	}

	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/atiquevellore");
		const json = await data.json();
		this.setState({
			UserData: json,
		});
	}

	componentDidUpdate() {
		console.log("componentDidUpdate Called");
	}

	componentWillUnmount() {
		console.log("componentWillUmount called");
	}
	render() {
		return (
			<div style={{ border: "1px solid black", width: "500px" }}>
				<img src={this.state.UserData.avatar_url} />
				<h2>{this.state.UserData.name}</h2>
				<h3>{this.state.UserData.bio}</h3>
				<h3>{this.state.UserData.location}</h3>
			</div>
		);
	}
}

export default UserInfo;
