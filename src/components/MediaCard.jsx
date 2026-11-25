import React from "react";
import { img_300, img_500 } from "../utils";
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
								: media.profile_path
									? img_500 + media.profile_path
									: "ImagePlaceholder.png"
						}
						alt={media.title || media.name}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title" onClick={() => setIsOpen(true)}>
						{media.title || media.name}
					</h2>
					<div className="flex justify-between pt-2">
						{media.media_type && <span>{media.media_type}</span>}
						{media.release_date ||
							(media.first_air_date && (
								<span>{media.release_date || media.first_air_date}</span>
							))}
						{type != "person" ? (
							<span>
								<Rating vote={media.vote_average} />
							</span>
						) : (
							<div className="flex flex-col">
								{media.known_for?.slice(0, 3).map((item) => (
									<span key={item.id}>{item.title || item.name}</span>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
			{isOpen && <MyModal {...{ isOpen, setIsOpen, media, type }} />}
		</>
	);
};

export default MediaCard;
