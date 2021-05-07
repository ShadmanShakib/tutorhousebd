import { Button } from '@components/ui';
import React from 'react';
import BenefitCard from './BenefitCard';
import {Benefitlist} from './constant';
import css from './Benefit.module.css'

function Benefits() {
    return (
        <div className="flex py-10  ">
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
              <div className="absolute top-0 right-24 flex flex-col justify-center items-center left-24 bottom-0">
              <h1 className=" text-center text-4xl mx-2  text-white font-bold ">Tutor House students <span className="text-secondary">imporve</span> on average by <span className="text-secondary">3 grades</span></h1>
                <Button text="Browse All Tutors" variant="secondary"/>
              </div>
          <img className={css.fadeIn} src="/images/hero.jpg" alt=""/>
          </div>
          
        </div>
    )
}

export default Benefits
