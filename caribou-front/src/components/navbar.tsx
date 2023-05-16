import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Navbar() {
    return (
        <div className="flex justify-center items-start pt-4 px-14 w-full h-48 bg-gradient-to-b from-[#EEE9DC] text-[#442412]">
            <div className="flex items-center justify-around w-full">
                <div className="text-lg uppercase font-bold">
                    <a href="#">Home</a>
                </div>
                <div className="text-lg uppercase font-bold">
                    <a href="#">Café</a>
                </div>
                <div className="relative w-28 h-28">
                    <Image src={Logo} alt="Logo" fill={true} />
                </div>
                <div className="text-lg uppercase font-bold">
                    <a href="#">Lunch</a>
                </div>
                <div className="text-lg uppercase font-bold">
                    <a href="#">Brunch</a>
                </div>
            </div>
        </div>
    )
}
