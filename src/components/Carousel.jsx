import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300 } from "../utils";
import AliceCarouselImport from "react-alice-carousel";

const AliceCarousel = AliceCarouselImport.default ?? AliceCarouselImport;

export const Carousel = ({ credits }) => {
	const items = credits.map(({ id, profile_path, name }) => (
		<div key={id}>
			<img
				src={profile_path ? img_300 + profile_path : "ImagePlaceholder.png"}
				alt={name}
				className="w-full h-40 object-contain"
			/>
			<p className="text-center text-sm">{name}</p>
		</div>
	));

	return (
		<AliceCarousel
			mouseTracking
			items={items}
			responsive={{ 0: { items: 2 }, 600: { items: 3 }, 1024: { items: 6 } }}
			controlsStrategy="alternative"
		/>
	);
};
