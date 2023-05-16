import React from 'react'
import Image, { StaticImageData } from 'next/image'
import HeroImage from '../../public/hero.png'
import Arrow from '../../public/icon/arrow.svg'

interface ImageButtonProps {
    image?: StaticImageData
    text?: string
    onClick: VoidFunction
}

const ImageButton = (props: ImageButtonProps) => {
    return (
        <div className="relative aspect-square">
            <Image
                src={props.image ?? HeroImage}
                alt="Image of the interior of the restaurant."
                fill
                className="object-cover"
            />
            <div className="absolute h-full w-full bg-stone-600 bg-opacity-40" />
            <div className="flex h-full w-full items-center justify-center">
                <div className="text-2xl uppercase text-white drop-shadow-md z-50 tracking-wide">
                    {props.text}
                </div>
            </div>
            <Image
                src={Arrow}
                alt="Arrow"
                height={24}
                className="absolute bottom-2 right-2"
            />
        </div>
    )
}

export default ImageButton
