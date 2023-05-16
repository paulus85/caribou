import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroImage from '../../public/hero.png'
import Dish1Image from '../../public/dish1.png'
import CoffeeImage from '../../public/coffee.png'
import Brunch2Image from '../../public/brunch2.png'
import BrunchImage from '../../public/brunch.png'
import WhiskyImage from '../../public/whisky.png'
import MapleImage from '../../public/maple.png'
import React, { Fragment } from 'react'
import PlusIcon from '../../public/icon/plus.svg'
import MenuItem from '@/components/MenuItem'
import Layout from '@/components/layout'
import ImageButton from '@/components/ImageButton'
import Arrow from '../../public/icon/arrow.svg'
import ArrowClear from '../../public/icon/arrow-clear.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <Layout heroImage={HeroImage}>
            <div className="grid grid-cols-[minmax(0,_5fr)_minmax(0,_8fr)] my-32 max-w-4xl mx-auto gap-x-14 px-5 items-center">
                <Image src={Dish1Image} alt="Image of a dish" className="" />
                <div className="text-[#442412] text-lg font-light">
                    <h3 className="uppercase font-bold tracking-wider text-2xl mb-5">
                        Icitte, c'est Bretagne + Québec&nbsp;!
                    </h3>
                    <p className="mb-3">
                        Chez nous, vous dégusterez des plats élaborés avec des
                        produits locaux selon des recettes parfois plus
                        lointaines.
                    </p>
                    <p className="mb-3">
                        Le midi, dînez chez nous ! Une carte réduite de plats
                        préparés avec des produits locaux et tout fait maison
                        également vous attend.
                    </p>
                    <p>
                        Et si l’envie vous prend de sortir le week-end, notre
                        brunch aux saveurs québécoises n’attend que vous !
                    </p>
                </div>
            </div>
            <div className="bg-[#584C43] text-white py-28">
                <div className="max-w-4xl mx-auto flex justify-around h-72">
                    <ImageButton
                        text={'Café'}
                        image={CoffeeImage}
                        onClick={() => {}}
                    />
                    <ImageButton
                        text={'Déjeuner'}
                        image={Brunch2Image}
                        onClick={() => {}}
                    />
                </div>
            </div>
            <div className="bg-[#EEE9DC] text-[#EEE9DC] py-28">
                <div className="max-w-5xl mx-auto h-96 flex flex-col">
                    <div className="relative w-full h-full">
                        <Image
                            src={BrunchImage}
                            alt="Image of the interior of the restaurant."
                            fill
                            className="object-cover"
                        />
                        <div
                            className="absolute h-full w-full"
                            style={{ background: 'rgba(39, 48, 54, 0.41)' }}
                        />
                        <div className="text-6xl uppercase font-bold drop-shadow-md z-50 tracking-widest h-full flex items-center justify-center">
                            <span>Brunch</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto h-20 flex mt-8 bg-[#63869F] px-10 items-center">
                    <div className="text-2xl uppercase font-bold tracking-widest flex-1 relative top-0.5">
                        Voir la carte
                    </div>
                    <Image
                        src={ArrowClear}
                        alt="Arrow"
                        height={24}
                        className="flex-0"
                    />
                </div>
            </div>
            <div className="bg-white text-white py-28">
                <div className="max-w-4xl mx-auto grid grid-rows-2 grid-cols-2 grid-flow-col gap-10">
                    <div className="w-full h-72 relative">
                        <Image
                            src={MapleImage}
                            alt="Image of the interior of the restaurant."
                            fill
                            className="object-cover object-top"
                        />
                        <div className="text-4xl uppercase font-bold drop-shadow-md z-50 tracking-[.4em] h-full flex items-center justify-center">
                            <span>Faites</span>
                        </div>
                    </div>
                    <div className="w-full relative">
                        <Image
                            src={MapleImage}
                            alt="Image of the interior of the restaurant."
                            fill
                            className="object-cover object-bottom"
                        />
                        <div className="text-4xl uppercase font-bold drop-shadow-md z-50 tracking-[.4em] h-full flex items-center justify-center">
                            <span>le plein</span>
                        </div>
                    </div>
                    <div className="row-span-2 w-full relative">
                        <Image
                            src={WhiskyImage}
                            alt="Image of the interior of the restaurant."
                            fill
                            className="object-cover object-bottom"
                        />
                        <div className="text-4xl uppercase font-bold drop-shadow-md z-50 tracking-[.4em] h-full flex flex-col items-center justify-around py-28">
                            <span>dans</span>
                            <span>l'épicerie</span>
                        </div>
                        <Image
                            src={ArrowClear}
                            alt="Arrow"
                            height={30}
                            className="absolute bottom-2 right-2"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
