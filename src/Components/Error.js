import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<img src="https://i.gifer.com/AfRp.gif" />;
		</div>
	);
};

export default Error;
