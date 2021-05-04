import React from 'react';
import {RatingYellow} from '@components/icons';

interface IReviewCard{
    tutor: string;
    subject: string;
    note: string;
    identity: string;
}

function ReviewCard(props:IReviewCard) {
    return (
        <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex items-center ">
            <img className="h-20 w-20 rounded-full" src="/images/person-placeholder.jpg" alt={props.tutor}/>
           <div className="ml-4 text-gray-600">
           <h1 className="">{props.tutor}</h1>
           <h1 className="text-lg font-semibold">{props.subject}</h1> 
          <RatingYellow className="mt-1"/> 
           </div>
            </div>
        <h1 className="text-sm mt-4 w-80 text-gray-600">{props.note}</h1>
        <h1 className="font-semibold text-gray-600 mt-8">{props.identity}</h1>
        </div>
    )
}

export default ReviewCard
