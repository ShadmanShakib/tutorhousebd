import React from 'react';
import Image from 'next/image'
import {FacebookIcon, GoogleIcon,TrustpilotIcon,RatingBule,RatingYellow} from '@components/icons'
function Hero() {
    return (
        <div className="xl:grid grid-cols-2  pb-2">
            <Image className="w-full" loading="lazy" height={500} width={800} layout="responsive" src="/images/hero.jpg" alt=""/>
           <div className="xl:flex  flex-col justify-center">
           {/* Hero Texts */}
            <div className="pt-6 px-6  text-gray-600">
                <h1 className="text-3xl xl:text-5xl font-semibold font-sans">
                Connect with <span className="text-primary">amazing tutors</span>, today.
                </h1>
              <h1 className="font-semibold text-sm xl:text-lg mt-4 xl:mt-6 ">
                  With more than 150,000 lessons taught, our online tutors get you the grades you deserve. Start with a Free Best-Fit Lesson today...
                  </h1>
            </div> 
            <div className="flex justify-center px-6 flex-col">

                {/* Find Tutor button */}
            <button className="bg-primary focus:outline-none text-white mt-3 xl:mt-10 py-2 px-10 rounded-md  text-lg font-semibold shadow-md">Find a Tutor</button>
         
          {/* Reviews */}
          <div className="flex mt-3 xl:mt-6 justify-between ">
          <TrustpilotIcon className="h-5 xl:h-8 "/>
            <div className="flex items-center">
            <FacebookIcon className="h-4 xl:h-8 xl:w-8 w-4"/>
            <RatingBule className="h-3 ml-1" />
            </div>
            <div className="flex items-center">
            <GoogleIcon className="h-4 w-4 xl:h-8 xl:w-8"/>
            <RatingYellow className="h-3 ml-1"/> 
            </div>

          </div>
           
            
            </div>
            </div>
        </div>
    )
}

export default Hero
