import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";
import Category from "../components/Category";
import { getSelectedMediaByCateg } from "../utils";
import Pagination from "../components/Pagination";

const Movies = () => {
	const [movies, setMovies] = useState(null);
	const [selectedCategs, setSelectedCategs] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		getSelectedMediaByCateg("movie", selectedCategs, page).then(setMovies);
	}, [selectedCategs, page]);

	useEffect(() => {
		setPage(1);
	}, [selectedCategs]);

	return (
		<div>
			{<Category type={"movie"} {...{ setSelectedCategs }} />}
			{movies ? <MediaList data={movies} type={"movie"} /> : <Loading />}
			<Pagination {...{ page, setPage }} />
		</div>
	);
};

export default Movies;
