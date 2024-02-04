import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import Help from "./Components/Help";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppmainLayout = () => {
	return (
		<div className="main-comp">
			<Header />
			<Outlet />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <AppmainLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/help",
				element: <Help />,
			},
		],
		errorElement: <Error />,
	},
]);

<RouterProvider />;

root.render(<RouterProvider router={appRoutes} />);
