import React from "react";
import { getCategories } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Category = ({ type, setSelectedCategs }) => {
	const [categs, setCategs] = useState(null);

	useEffect(() => {
		getCategories(type).then(setCategs);
	}, []);

	const handleChange = (id) => {
		setSelectedCategs((prev) =>
			prev.includes(id) ? prev.filter((prevId) => prevId != id) : [...prev, id],
		);
	};

	return (
		<div className="flex flex-wrap justify-center gap-2 p-4">
			{categs &&
				categs.map(({ id, name }) => (
					<fieldset
						className="fieldset bg-base-100 border-base-300 rounded-box w-8 border p-1"
						key={id}
					>
						<label className="label">
							<input
								type="checkbox"
								className="checkbox"
								onChange={() => handleChange(id)}
							/>
							{name}
						</label>
					</fieldset>
				))}
		</div>
	);
};

export default Category;
