import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashborad from "./Pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./Pages/Support/Support";
import Transaction from "./Pages/Transaction/Transaction";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Dashborad />,
		},
		{
			path: "/transaction",
			element: <Transaction />,
		},
		{
			path: "/Support",
			element: <Support />,
		},
	]);
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
