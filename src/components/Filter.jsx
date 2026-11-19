import React from "react";

const Filter = ({ type, setType }) => {
	return (
		<div className="flex justify-center gap-4 p-4">
			<label>
				<input
					type="radio"
					className="radio radio-warning"
					value="movie"
					checked={type == "movie"}
					onChange={(e) => setType(e.target.value)}
				/>
				&nbsp; Movies
			</label>
			<label>
				<input
					type="radio"
					className="radio radio-warning"
					value="tv"
					checked={type == "tv"}
					onChange={(e) => setType(e.target.value)}
				/>
				&nbsp;TV Shows
			</label>
		</div>
	);
};

export default Filter;
