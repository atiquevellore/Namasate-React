import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/nav-items/Header";
import Body from "./Components/Body";
import About from "./Components/nav-items/About";
import Error from "./Components/Error";
import Help from "./Components/nav-items/Help";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/Restaurant/RestaurantMenu";

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
			{
				path: "/resturants/:id",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

root.render(<RouterProvider router={appRoutes} />);
