import React from 'react'
import Image from 'next/image'
import PhoneIcon from '../../public/icon/phone.svg'
import FacebookIcon from '../../public/icon/facebook.svg'
import InstagramIcon from '../../public/icon/instagram.svg'

const timeTable = [
    {
        day: 'Mercredi - jeudi',
        time: '8h30 - 14h00',
    },
    {
        day: 'Vendredi',
        time: '8h30 - 17h00',
    },
    {
        day: 'Samedi',
        time: '10h00 - 18h00',
    },
    {
        day: 'Dimanche',
        time: '10h00 - 14h00',
    },
]

const FootBar = () => {
    return (
        <div className="py-12 bg-[#584C43] text-[#FDFCFA]">
            <div className="max-w-3xl px-5 mx-auto flex text-sm">
                <div className="flex-1">
                    <h3 className="uppercase text-xl font-bold tracking-wider mb-2">
                        Nous sommes ouverts
                    </h3>
                    <div className="grid grid-cols-[auto_auto_auto] gap-x-2 justify-start mb-2">
                        {timeTable.map((value) => (
                            <>
                                <div className="font-light justify-self-end">
                                    {value.day}
                                </div>
                                <div className="font-light">:</div>
                                <div>{value.time}</div>
                            </>
                        ))}
                    </div>
                    <p className="">Lunch en semaine, de 12h00 à 14h00.</p>
                    <p className="">Brunch le week-end, de 10h00 à 14h00.</p>
                </div>
                <div className="flex-1 text-end">
                    <h3 className="uppercase text-xl font-bold tracking-wider mb-2">
                        Pour nous trouver
                    </h3>
                    <p className="">
                        41 Rue Vasselot
                        <br />
                        35000 Rennes
                    </p>
                    <div className="flex justify-end mb-4">
                        <Image
                            src={PhoneIcon}
                            width={16}
                            alt={'Téléphone'}
                            className="mr-2"
                        />
                        <span>02 99 79 73 37</span>
                    </div>
                    <a
                        href={'https://www.facebook.com/cariboucoffeeshop'}
                        className="block mb-1"
                    >
                        <Image
                            src={FacebookIcon}
                            width={16}
                            alt={'Téléphone'}
                            className="mr-2 inline-block align-sub"
                        />
                        <span>facebook.com/cariboucoffeeshop</span>
                    </a>
                    <a
                        href={'https://www.facebook.com/cariboucoffeeshop'}
                        className="block"
                    >
                        <Image
                            src={InstagramIcon}
                            width={16}
                            alt={'Téléphone'}
                            className="mr-2 inline-block align-sub"
                        />
                        <span>@caribou</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FootBar
