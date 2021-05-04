import React from 'react';

export interface IBenefitCard{
    title:string,
    description:string,
    imgSrc:string,
}

export default function BenefitCard({title,description,imgSrc}:IBenefitCard) {
    return (
        <div className='px-6'>
            <div className="flex justify-center mt-8 items-center  text-third font-semibold text-xl">
            <img className="mr-3 h-10" src={imgSrc} alt=""/>
            {title}
            </div>
            <h1 className="text-gray-500 text-sm font-medium mt-6">
            {description}
            </h1>
            
            
         
        </div>
    )
}
