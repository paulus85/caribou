import React from 'react'

interface MenuItemProps {
    title: string
    price?: number
    description: string
}

const MenuItem = ({ title, price, description }: MenuItemProps) => {
    return (
        <div>
            <div className="flex flex-row mt-2">
                <h5 className="flex-grow-0 flex-shrink-0 mr-1 text-xl font-normal">
                    {title}
                </h5>
                <div className="flex-1 border-dotted border-b-2 border-[#584C43] h-2 self-center" />
                <div className="flex-shrink-0 flex-grow-0 ml-1 text-xl ">
                    {price}€
                </div>
            </div>
            <div className="text-s italic font-light mb-4">{description}</div>
        </div>
    )
}

export default MenuItem
