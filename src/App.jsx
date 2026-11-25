import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MyHeader from "./components/MyHeader";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import SearchMedia from "./pages/SearchMedia";
import NotFound from "./pages/NotFound";
import Actors from "./components/Actors";

const myRouter = createBrowserRouter([
	{
		element: <MyHeader />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/movies", element: <Movies /> },
			{ path: "/tv", element: <TVShows /> },
			{ path: "/search", element: <SearchMedia /> },
			{ path: "/actors", element: <Actors /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

function App() {
	return <RouterProvider router={myRouter} />;
}

export default App;
