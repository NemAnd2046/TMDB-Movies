import React from "react";

const Rating = ({ vote }) => {
	return (
		<div className="rating">
			{[1, 2, 3, 4, 5].map((num) => (
				<div
					key={num}
					className="mask mask-star bg-orange-400"
					aria-label={`${num} star`}
					aria-current={`${num == Math.floor(vote / 2)}`}
				></div>
			))}
		</div>
	);
};

export default Rating;
