import React from "react";
class UserInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		console.log(this.props.name + "constructor");
	}

	componentDidMount() {
		console.log(this.props.name + "Component DidMount");
	}
	render() {
		const { name, designation, location } = this.props;
		console.log(name + "render");
		const { count } = this.state;
		return (
			<div>
				<h4>Count: {count}</h4>
				<button
					onClick={() => {
						this.setState({
							count: count + 1,
						});
					}}>
					{" "}
					Increase count value
				</button>
				<h2>{name}</h2>
				<h3>{designation}</h3>
				<h3>{location}</h3>
			</div>
		);
	}
}

export default UserInfo;
