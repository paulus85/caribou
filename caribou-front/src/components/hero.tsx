import Image, {StaticImageData} from "next/image";
import React from "react";
import HeroImage from "../../public/hero.png";

interface HeroProps {
    image?: StaticImageData,
    text?: string
}

export default function Hero(props: HeroProps) {
    return (
        <div className="absolute h-full w-full z-[-10]">
            <Image
                src={props.image ?? HeroImage}
                alt="Image of the interior of the restaurant."
                fill
                className="object-cover"
            />
            <div className="absolute h-full w-full bg-[#E5E5E5] bg-opacity-50"/>
            <div className="flex h-full w-full items-center justify-center">
                <div className="text-[64px] font-bold uppercase tracking-[0.38em] text-white drop-shadow-md z-50">{props.text}</div>
            </div>
        </div>
    );
}
