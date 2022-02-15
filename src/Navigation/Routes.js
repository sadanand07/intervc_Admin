import { Navigate } from "react-router-dom";
import Activity from "../pages/Activity";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";

const routes = (authenticated) => [
	{
		path: "/",
		element: authenticated ? <Main /> : <Navigate to="/login" />,
		children: [
			{
				path: "admin",
				element: <Home />,
			},
			{
				path: "admin/activity",
				element: <Activity />,
			},
			{
				path: "admin/contact",
				element: <Contact />,
			},
			{
				path: "/",
				element: <Navigate to="/admin" />,
			},
		],
	},
	{
		path: "/login",
		element: !authenticated ? <Login /> : <Navigate to="/admin" />,
	},
	{
		path: "/register",
		element: !authenticated ? <Register /> : <Navigate to="/admin" />,
	},
];

export default routes;
