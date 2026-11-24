import React from "react";
import { getSelectedMediaByCateg } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";
import Category from "../components/Category";
import Pagination from "../components/Pagination";

const TVShows = () => {
	const [tv, setTv] = useState(null);
	const [selectedCategs, setSelectedCategs] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		getSelectedMediaByCateg("tv", selectedCategs, page).then(setTv);
	}, [selectedCategs, page]);

	useEffect(() => {
		setPage(1);
	}, [selectedCategs]);

	return (
		<div>
			{<Category type={"tv"} {...{ setSelectedCategs }} />}
			{tv ? <MediaList data={tv} type={"tv"} /> : <Loading />}
			<Pagination {...{ page, setPage }} />
		</div>
	);
};

export default TVShows;
