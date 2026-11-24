import axios from "axios";

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";
export const baseURL = "https://api.themoviedb.org/3";

const api = axios.create({
	baseURL,
	params: {
		api_key: import.meta.env.VITE_TMDB_API_KEY,
		language: "hu-HU",
		include_adult: false,
		sort_by: "popularity.desc",
	},
});

export const getTrending = async (page) => {
	const response = await api.get("/trending/all/week", { params: { page } });
	return response.data.results;
};

export const getMedia = async (type, searchText, page) => {
	const response = await api.get(`/search/${type}?query=${searchText}`, {
		params: { page },
	});
	return {
		results: response.data.results,
		totalPages: response.data.total_pages,
	};
};

const pageTitle = [
	{ type: "trending", title: "Popular This Week" },
	{ type: "movie", title: "Movies" },
	{ type: "tv", title: "TV Series" },
	{ type: "search", title: "Search Shows" },
];

export const getTitle = (type) => {
	return pageTitle.find((obj) => obj.type == type).title;
};

export const getCategories = async (type) => {
	const response = await axios.get(
		`${baseURL}/genre/${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
	);

	return response.data.genres;
};

export const getSelectedMediaByCateg = async (type, categs, page = 1) => {
	const response = await api.get(
		`/discover/${type}?with_genres=${categs.join(",")}`,
		{ params: { page } },
	);
	return response.data.results;
};

export const getTrailer = async (type, id) => {
	const response = await api.get(`/${type}/${id}/videos`);
	return response.data.results;
};
