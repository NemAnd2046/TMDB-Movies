import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getActors, getMedia } from "../utils";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import MediaList from "../components/MediaList";

const Actors = () => {
	const [actors, setActors] = useState([]);
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(10);

	const [searchText, setSearchText] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [type, setType] = useState("person");

	useEffect(() => {
		if (searchQuery.length === 0) {
			getActors(page).then(setActors);
			setMaxPage(10);
			return;
		}

		getMedia(type, searchQuery, page).then((data) => {
			setActors(data.results);
			setMaxPage(data.totalPages);
		});
	}, [page, searchQuery, type]);

	const handleSearch = () => {
		setSearchQuery(searchText.trim());
		setPage(1);
	};

	return (
		<div className="min-h-screen">
			<SearchBar
				searchText={searchText}
				setSearchText={setSearchText}
				handleSearch={handleSearch}
			></SearchBar>
			{actors ? <MediaList data={actors} type={type} /> : <Loading />}
			{actors && actors.length > 0 && (
				<Pagination {...{ page, setPage, maxPage }} />
			)}
		</div>
	);
};

export default Actors;
