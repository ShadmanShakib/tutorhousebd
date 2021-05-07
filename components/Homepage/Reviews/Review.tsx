import React from 'react';
import { TitleText,Button } from '@components/ui'
import {ReviewData} from './constants';
import ReviewCard from './ReviewCard';


function Review() {
    return (
        <div className="bg-gray-200 pt-16 ">
          <TitleText text="What our Happy Customer Say" /> 
          <div className="flex justify-center ">
          <div className="grid xl:grid-cols-3 mt-10 justify-items-center gap-3">
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
    <div className="grid grid-cols-2 pt-10 justify-items-center">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-third text-center mb-10 text-4xl font-bold">Trusted by thousands of students and tutors across the World.</h1>
       <div className="flex flex-col  w-80">

       <Button text="Browse All Tutors" variant="primary"/>
        <Button text="Become a Tutor" variant="secondary"/>

       </div>

        </div>
      
       <img src="/images/hero.jpg" alt="" />
        

    </div>
         
        </div>
    )
}

export default Review
