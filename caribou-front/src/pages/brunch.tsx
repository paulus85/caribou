import React, {Fragment} from 'react';
import Layout from "@/components/layout";
import HeroImage from "../../public/brunch.png";
import Image, {StaticImageData} from "next/image";
import ForkIcon from "../../public/icon/fork.svg"
import ClockIcon from "../../public/icon/clock.svg"
import CalendarIcon from "../../public/icon/calendar.svg"
import PlusIcon from '../../public/icon/plus.svg'

const gridContent = [
    {
        text: <>Un brunch copieux, à base de produits <b>frais et locaux</b>, et avec un bon goût de <b>Québec</b> !</>,
        image: ForkIcon
    },
    {
        text: <>Le <b>samedi et dimanche</b>, de <b>10h30 à 14h00</b></>,
        image: ClockIcon
    },
    {
        text: <>Pensez à <b>réserver</b> (surtout pour le dimanche) au 02&nbsp;00&nbsp;00&nbsp;00&nbsp;00 ou sur
            Instagram.</>,
        image: CalendarIcon
    }
]


function Brunch() {
    return (
        <Layout heroImage={HeroImage} text={"Brunch"}>
            <div
                className="grid grid-cols-[minmax(0,_4fr)_minmax(0,_7fr)] my-32 max-w-2xl mx-auto gap-y-5 px-5 items-center">
                {gridContent.map(value => <Fragment key={value.text.key}>
                    <Image src={value.image} width={50} alt={"Fork"} priority className="justify-self-center"/>
                    <div>{value.text}</div>
                </Fragment>)}
            </div>
            <div className="bg-[#EEE9DC] py-24">
                <div className="flex flex-col max-w-2xl px-5 mx-auto text-center items-center">
                    <h2 className="text-[#63869F] uppercase font-bold tracking-wider text-4xl mb-16">FORMULE UNIQUE —
                        26&nbsp;€</h2>
                    <h3 className="text-[#584C43] uppercase tracking-widest mb-3 text-2xl">À boire</h3>
                    <p className="text-[#584C43]">Un café/thé et jus d’orange</p>
                    <Image src={PlusIcon} width={50} alt={"Plus"} className="my-12"/>
                    <h3 className="text-[#584C43] uppercase tracking-widest mb-3 text-2xl">Pour commencer</h3>
                    <p className="text-[#584C43]">Une verrine de panna cotta et un scone</p>
                    <Image src={PlusIcon} width={50} alt={"Plus"} className="my-12"/>
                    <h3 className="text-[#584C43] uppercase tracking-widest mb-4 text-2xl">Un plat au choix</h3>
                </div>
            </div>
        </Layout>
    );
}

export default Brunch;