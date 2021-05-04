import React from 'react'
import TutorCard from './TutorCard';
import Tutorlist from './Tutorlist'

const Badge=({text}:{text:string})=>{
    return(
        <div className=" bg-transparent rounded-xl  py-1 border-secondary border text-lg text-secondary text-center px-5 hover:bg-secondary hover:text-white transition duration-200">
            {text}
        </div>
    )
}

function Tutors() {
    return (
        <div className="bg-gray-200">
           <h1 className="text-secondary font-bold">Meet some of our tutors with 100+ lessons</h1> 
           <div className="flex justify-center">
           {
               Tutorlist.map(i=>{
                   return(
                       <TutorCard 
                       key={i.id}
                       name={i.name} 
                       subject={i.subject} 
                       lessionCompleted={i.lessionCompleted}
                       exprience={i.exprience}
                       price={i.price}
                       />
                   )
               })
           }

           </div>
   <div className="flex justify-center">
   <button className="bg-secondary px-10 py-2 rounded-md shadow-md text-white foucus:outline-none font-semibold">View all tutors</button>
   </div>
   <h1 className='text-secondary text-center font-bold text-2xl'>Click below for our Top Subjects</h1>
   <div className="flex justify-center">
   <div className="grid max-w-screen-xl items-center grid-cols-4 xl:grid-cols-6 mt-5  gap-3  ">
   <Badge text='Maths'/>
   <Badge text="English"/>
   <Badge text='Latin'/>
   <Badge text='Chemistry'/>
   <Badge text="Histroy"/>
   <Badge text="Pshycology"/>
   <Badge text="Economics"/>
   <Badge text='Business Studies'/>
   <Badge text="French"/>
   </div>
   </div>
        </div>
    )
}

export default Tutors


