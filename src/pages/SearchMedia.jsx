import React from "react";
import { useState } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { getMedia } from "../utils";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useEffect } from "react";

const SearchMedia = () => {
	const [type, setType] = useState("movie");
	const [searchText, setSearchText] = useState("");
	const [media, setMedia] = useState(null);
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);

	const handleSearch = () => {
		if (searchText.length == 0) return;
		getMedia(type, searchText, page).then((data) => {
			setMedia(data.results);
			setMaxPage(data.totalPages);
			setPage(1);
		});
	};

	useEffect(() => {
		getMedia(type, searchText, page).then((data) => {
			setMedia(data.results);
		});
	}, [page]);

	return (
		<div className="min-h-screen">
			<Filter type={type} setType={setType} />
			<SearchBar
				searchText={searchText}
				setSearchText={setSearchText}
				handleSearch={handleSearch}
			></SearchBar>
			{media ? <MediaList data={media} type={type} /> : <Loading />}
			{media && media.length > 0 && (
				<Pagination {...{ page, setPage, maxPage }} />
			)}
		</div>
	);
};

export default SearchMedia;
