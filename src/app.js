import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/nav-items/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/Restaurant/RestaurantMenu";
import ShimmerRestaurantCard from "./Components/Shimmer/ShimmerRestaurantCard";

const AppmainLayout = () => {
	return (
		<div className="main-comp">
			<Header />
			<Outlet />
		</div>
	);
};

const Help = lazy(() => import("./Components/nav-items/Help.js"));

const Aboutlazy = lazy(() => import("./Components/nav-items/About.js"));

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
				element: (
					<Suspense fallback={<ShimmerRestaurantCard />}>
						<Aboutlazy />
					</Suspense>
				),
			},
			{
				path: "/help",
				element: (
					<Suspense fallback={<ShimmerRestaurantCard />}>
						<Help name="atique" />
					</Suspense>
				),
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
