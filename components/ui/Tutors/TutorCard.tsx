import React from 'react';
import {UserIcon,RatingYellow} from '@components/icons'


export interface TutorCardTypes{
    name:string,
    subject:string,
    lessionCompleted:number,
    exprience:number,
    price:number,

}

function TutorCard({name,subject,lessionCompleted,exprience,price}:TutorCardTypes) {
    return (
        <div className="bg-white mt-20 transform  w-64 shadow-lg rounded-lg p-3 text-center">
            <div className="flex">
            <img className="rounded-full h-20 w-20 shadow-md transform -translate-y-14" src="/images/person-placeholder.jpg" alt=""/>
          <div className="">
          <h1 className="">{name}</h1>
          <h1 className="font-semibold">{subject} Tutor</h1>
          </div>
            </div>
            
          <RatingYellow className="h-6 transform -translate-y-3"/>
          <h1 className="text-gray-700"><span className="text-secondary bg-purple-50">{lessionCompleted}+</span> Lessions completed</h1>
          <h1 className="font-bold text-gray-700">{exprience} years exprience</h1>
          <h1 className="text-gray-700"><span className="font-bold text-gray-900 text-3xl ">${price}</span>/per hour</h1>
        </div>
    )
}

export default TutorCard
