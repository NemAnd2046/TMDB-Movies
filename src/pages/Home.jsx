import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getTrending, img_300 } from "../utils";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";

const Home = () => {
	const [trendings, setTrendings] = useState(null);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);

	useEffect(() => {
		getTrending(page).then(setTrendings);
	}, [page]);

	return (
		<div>
			{error ? (
				<ErrorMessage message={error} />
			) : trendings ? (
				<MediaList data={trendings} type="movie" />
			) : (
				<Loading />
			)}
			<Pagination {...{page, setPage}} />
		</div>
	);
};
export default Home;
