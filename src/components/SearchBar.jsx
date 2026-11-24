import React from "react";

const SearchBar = ({ searchText, setSearchText, handleSearch }) => {
	return (
		<div className="flex justify-center p-4 text-gray-300">
			<label className="input">
				<svg
					className="h-[1em] opacity-50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2.5"
						fill="none"
						stroke="currentColor"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="m21 21-4.3-4.3"></path>
					</g>
				</svg>
				<input
					type="search"
					required
					placeholder="Search"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSearch();
						}
					}}
				/>
			</label>
			<button className="btn btn-primary" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
