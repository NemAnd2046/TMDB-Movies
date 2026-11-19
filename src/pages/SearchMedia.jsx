import React from "react";
import { useState } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { getMedia } from "../utils";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";

const SearchMedia = () => {
	const [type, setType] = useState("movie");
	const [searchText, setSearchText] = useState("");
	const [media, setMedia] = useState(null);

	const handleSearch = () => {
		if (searchText.length == 0) return;
		getMedia(type, searchText).then(setMedia);
	};

	return (
		<div className="min-h-screen">
			<Filter type={type} setType={setType} />
			<SearchBar
				searchText={searchText}
				setSearchText={setSearchText}
				handleSearch={handleSearch}
			></SearchBar>
			{media ? <MediaList data={media} type={type} /> : <Loading />}
		</div>
	);
};

export default SearchMedia;
