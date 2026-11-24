import React from "react";

const Pagination = ({ page, setPage, maxPage = 10 }) => {
	const numbers = [...Array(maxPage > 10 ? 10 : maxPage)].map((_, i) => i + 1);

	return (
		<div className="flex justify-center p-4">
			<div className="join">
				{numbers.map((num) => (
					<button
						className={`join-item btn ${page == num && "btn-active"}`}
						key={num}
						onClick={() => setPage(num)}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	);
};

export default Pagination;
