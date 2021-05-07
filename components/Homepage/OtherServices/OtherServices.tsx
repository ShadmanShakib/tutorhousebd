import React from 'react';
import {TitleText} from "@components/ui";
import {constData} from './constData'

export interface CardProps{
    title:string,
    description:string,
    imgSrc:string,
}

const Card:React.FC<CardProps>=(props)=>{
    const {
        title,
        description,
        imgSrc,
         }=props
return(
    <React.Fragment>
        <div className=" rounded-3xl w-96  shadow-lg p-6 bg-white">
            <img src={imgSrc} alt=""/>
            <h1 className="text-center text-xl font-semibold text-gray-600">{title}</h1>
            <div className="text-gray-600 mt-5">
                {description}
            </div>
            <div className=" underline text-secondary font-bold text-center text-2xl mt-8">
                Find Out More
            </div>
        </div>
    </React.Fragment>
)
}

function OtherServices() {
    return (
        <div className="bg-gray-100 pt-10 pb-20   mx-auto">
            <TitleText text="Our other Services"/>
            <div className="grid xl:grid-cols-3 justify-items-center mt-10  ">
                {
                    constData.map(i=>{
                        return(
                            <Card 
                            key={i.id} 
                            title={i.title} 
                            imgSrc={i.imgSrc}
                            description={i.description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OtherServices
