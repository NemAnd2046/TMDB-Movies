import React from "react";
import MediaCard from "../components/MediaCard";
import { getTitle } from "../utils";

const MediaList = ({ data, type }) => {
	return (
		<div>
			<h2 className="text-center font-bold text-gray-300 p-2 text-2xl">
				{getTitle(type)}
			</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center mt-10 pb-10">
				{data && data.map((obj) => <MediaCard key={obj.id} media={obj} />)}
			</div>
		</div>
	);
};

export default MediaList;
