import Image from "next/image";
import React from "react";
import HeroImage from "../../public/hero.png";

export default function Hero() {
	return (
		<div className="absolute h-full w-full z-[-10]">
			<Image
				src={HeroImage}
				alt="Image of the interior of the restaurant."
				fill
				className="object-cover"
			/>
			<div className="absolute h-full w-full bg-[#E5E5E5] bg-opacity-50" />
		</div>
	);
}
