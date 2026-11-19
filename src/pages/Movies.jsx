import React from "react";
import { getMovies } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";

const Movies = () => {
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		getMovies().then(setMovies);
	}, []);

	return (
		<div>
			{movies ? <MediaList data={movies} type={"movie"} /> : <Loading />}
		</div>
	);
};

export default Movies;
