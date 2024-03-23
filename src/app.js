import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/nav-items/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/Restaurant/RestaurantMenu";
import ShimmerRestaurantCard from "./Components/Shimmer/ShimmerRestaurantCard";
import userContext from "./Utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import Cart from "./Components/Restaurant/Cart.js";

const AppmainLayout = () => {
	const [userName, setUserName] = useState("default");
	return (
		<Provider store={appStore}>
			<userContext.Provider value={{ userName, setUserName }}>
				<Header />
				<Outlet />
			</userContext.Provider>
		</Provider>
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
				path: "/cart",
				element: <Cart />,
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
