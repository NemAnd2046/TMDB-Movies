import React from "react";
import { getTv } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";

const TVShows = () => {
	const [tv, setTv] = useState(null);

	useEffect(() => {
		getTv().then(setTv);
	}, []);

	return <div>{tv ? <MediaList data={tv} type={"tv"} /> : <Loading />}</div>;
};

export default TVShows;
