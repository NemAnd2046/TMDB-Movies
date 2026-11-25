import React from "react";
import {
	getActorCredits,
	getActorDetails,
	getCredits,
	getTrailer,
	img_500,
} from "../utils";
import { FaYoutube } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "./Carousel";

const MyModal = ({ isOpen, setIsOpen, media, type }) => {
	const [trailer, setTrailer] = useState([]);
	const [credits, setCredits] = useState([]);

	const [details, setDetails] = useState([]);
	const [actorCredits, setActorCredits] = useState([]);

	const person = type == "person";

	useEffect(() => {
		if (person) {
			getActorDetails(media.id).then(setDetails);
			getActorCredits(media.id).then(setActorCredits);
		} else {
			getTrailer(media.media_type || type, media.id).then(setTrailer);
			getCredits(media.media_type || type, media.id).then(setCredits);
		}
	}, []);

	return (
		<dialog
			key={"modal"}
			ref={(dialog) => {
				if (dialog && !dialog.open) dialog.showModal();
			}}
			onCancel={() => setIsOpen(false)}
			onClose={() => setIsOpen(false)}
			className="modal"
		>
			<div className="modal-box text-gray-800 bg-gray-300 flex flex-col items-center max-w-200 h-fit">
				<div className="p-4 flex flex-col items-center gap-2 max-w-200">
					<img
						className="w-full"
						src={img_500 + (media.backdrop_path || media.profile_path)}
						alt={media.title || media.name}
					/>
					<h3 className="font-bold text-lg">
						<span>{media.title || media.name}</span>
						{!person && (
							<span> ({media.release_date || media.first_air_date}) </span>
						)}
					</h3>
					{person ? (
						<div>
							<div className="flex flex-row justify-center p-3 font-bold gap-4">
								<span>{details.birthday}</span>
								<span>{details.place_of_birth}</span>
							</div>
							<span>{details.biography}</span>
						</div>
					) : (
						<p className="py-4">{media.overview}</p>
					)}
				</div>
				<div className="modal-action p-2 w-full">
					{credits.length > 0 && <Carousel credits={credits.slice(0, 10)} />}
					{actorCredits.length > 0 && (
						<Carousel person={person} credits={actorCredits.slice(0, 10)} />
					)}
				</div>
				<div className="modal-action p-2 flex justify-around w-full">
					{!person && trailer.length > 0 && trailer[0].site == "YouTube" && (
						<a
							href={`https://youtube.com/watch?v=${trailer[0].key}`}
							target="_blank"
							className="btn"
						>
							<FaYoutube /> Trailer
						</a>
					)}
					<form method="dialog">
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
};

export default MyModal;
