import React from 'react';
import BenefitCard from './BenefitCard';
import {Benefitlist} from './constant'

function Benefits() {
    return (
        <div className="flex ">
            <div className="">
            <h1 className="text-secondary text-3xl font-semibold text-center">Tutor House Benefits</h1>
          <div className="xl:grid grid-cols-2">
          {Benefitlist.map(i=>{
                return(
                    <BenefitCard 
                    key={i.id} 
                    imgSrc={i.imgSrc}
                    title={i.title}
                    description={i.description}

                    />
                )
            })}

          </div>
          </div>
          <div className="hidden relative ml-3 xl:block">
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-primary opacity-70">
                  
              </div>
              <div className="absolute top-40 right-24 left-24 bottom-0">
              <h1 className=" text-center text-4xl mx-2  text-white font-bold ">Tutor House students <span className="text-secondary">imporve</span> on average by <span className="text-secondary">3 grades</span></h1>
                  <button className="bg-secondary focus:outline-none px-10 py-4 shadow-md text-white font-bold rounded-md mt-10 ml-48">Browse All Tutors</button> 
              </div>
          <img src="/images/hero.jpg" alt=""/>
          </div>
          
        </div>
    )
}

export default Benefits
