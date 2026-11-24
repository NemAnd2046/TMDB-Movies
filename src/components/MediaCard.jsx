import React from "react";
import { img_300 } from "../utils";
import Rating from "./Rating";
import { useState } from "react";
import MyModal from "./MyModal";

const MediaCard = ({ media, type }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="card bg-gray-300 text-gray-800 w-full shadow-sm">
				<figure onClick={() => setIsOpen(true)}>
					<img
						src={
							media.poster_path
								? img_300 + media.poster_path
								: "ImagePlaceholder.png"
						}
						alt={media.title || media.name}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{media.title || media.name}</h2>
					<div className="flex justify-between pt-2">
						{media.media_type && <span>{media.media_type}</span>}
						<span>{media.release_date || media.first_air_date}</span>
						<span>
							<Rating vote={media.vote_average} />
						</span>
					</div>
				</div>
			</div>
			{isOpen && <MyModal {...{ isOpen, setIsOpen, media, type }} />}
		</>
	);
};

export default MediaCard;
