import React from "react";
import { getCredits, getTrailer, img_500 } from "../utils";
import { FaYoutube } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "./Carousel";

const MyModal = ({ isOpen, setIsOpen, media, type }) => {
	const [trailer, setTrailer] = useState([]);
	const [credits, setCredits] = useState([]);

	useEffect(() => {
		getTrailer(media.media_type || type, media.id).then(setTrailer);
		getCredits(media.media_type || type, media.id).then(setCredits);
	}, []);

	return (
		<dialog className={`modal ${isOpen && "modal-open"}`}>
			<div className="modal-box text-gray-800 bg-gray-300 flex flex-col items-center max-w-200 w-fit">
				<div className="p-4 flex flex-col items-center gap-2 max-w-200">
					<img
						className="w-full"
						src={img_500 + media.backdrop_path}
						alt={media.title || media.name}
					/>
					<h3 className="font-bold text-lg">
						<span>{media.title || media.name}</span>
						<span> ({media.release_date || media.first_air_date}) </span>
					</h3>
					<p className="py-4">{media.overview}</p>
				</div>
				<div className="modal-action p-2 w-full">
					{credits.length > 0 && <Carousel credits={credits.slice(0, 10)} />}
				</div>
				<div className="modal-action p-2 flex justify-around w-full">
					{trailer.length > 0 && trailer[0].site == "YouTube" && (
						<a
							href={`https://youtube.com/watch?v=${trailer[0].key}`}
							target="_blank"
							className="btn"
						>
							<FaYoutube /> Trailer
						</a>
					)}
					<button
						type="button"
						className="btn"
						onClick={() => setIsOpen(false)}
					>
						Close
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default MyModal;
