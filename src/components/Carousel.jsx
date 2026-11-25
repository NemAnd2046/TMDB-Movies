import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300 } from "../utils";
import AliceCarouselImport from "react-alice-carousel";

const AliceCarousel = AliceCarouselImport.default ?? AliceCarouselImport;

export const Carousel = ({ person = false, credits }) => {
	const items = credits.map((obj) => (
		<div key={obj.id} className="px-1">
			<img
				src={
					obj.profile_path
						? img_300 + obj.profile_path
						: obj.backdrop_path
							? img_300 + obj.backdrop_path
							: "ImagePlaceholder.png"
				}
				alt={obj.name || obj.title}
				className="w-full max-h-40 object-contain"
			/>
			<div className="flex flex-col justify-center">
				<span className="text-center text-sm">{obj.name || obj.title}</span>
				{person && (
					<span className="text-center text-sm">
						{obj.release_date || obj.first_air_date}
					</span>
				)}
				{person && <span className="text-center text-sm">{obj.character}</span>}
			</div>
		</div>
	));

	return (
		<AliceCarousel
			mouseTracking
			items={items}
			responsive={
				person
					? { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 4 } }
					: { 0: { items: 2 }, 600: { items: 3 }, 1024: { items: 6 } }
			}
			controlsStrategy="alternative"
		/>
	);
};
