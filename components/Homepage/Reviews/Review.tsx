import React from 'react';
import { TitleText,Button } from '@components/ui'
import {ReviewData} from './constants';
import ReviewCard from './ReviewCard';


function Review() {
    return (
        <div className="bg-gray-200 ">
          <TitleText text="What our Happy Customer Say" /> 
          <div className="flex justify-center ">
          <div className="grid xl:grid-cols-3 justify-items-center gap-3">
          {ReviewData.map(i=>{
              return(
                  <ReviewCard 
                  key={i.id} 
                  tutor={i.tutor}
                  note={i.note}
                  subject={i.subject}
                  identity={i.identity}
                  />
              )
          })}
          </div>
          </div>
    <div className="">
        <h1 className="text-third text-3xl font-bold">Trusted by thousands of students and tutors across the World.</h1>
        <Button text="Browse All Tutors" variant="primary"/>
        <Button text="Become a Tutor" variant="secondary"/>

    </div>
         
        </div>
    )
}

export default Review
