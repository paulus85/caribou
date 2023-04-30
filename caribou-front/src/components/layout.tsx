import React, { ReactNode } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import { StaticImageData } from 'next/image'

type Props = {
    children?: React.ReactNode
    heroImage?: StaticImageData
    text?: string
}

export default function Layout({ children, heroImage, text }: Props) {
    return (
        <>
            <div className="w-screen min-h-screen flex flex-col">
                <Navbar />
                <Hero image={heroImage} text={text} />
            </div>
            {children}
        </>
    )
}
