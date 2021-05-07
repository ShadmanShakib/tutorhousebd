import React from 'react'
import {TitleText,Button} from '@components/ui';
import Tutorlist from './Tutorlist';
import { RatingYellow } from '@components/icons';
import css from './Tutor.module.css';


const Badge=({text}:{text:string})=>{
    return(
        <div className={css.badge}>
            {text}
        </div>
    )
}

export interface TutorCardTypes{
    name:string,
    subject:string,
    lessionCompleted:number,
    exprience:number,
    price:number,

}

const Card:React.FC<TutorCardTypes>=({name,subject,lessionCompleted,exprience,price})=>{
    return(
        <React.Fragment>
                <div className={css.card}>
            <div className="flex">
            <img className={css.cardImg}
            src="/images/person-placeholder.jpg" alt=""/>
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
        </React.Fragment>
    )
}

function Tutors() {
    return (
        <div className="bg-gray-200 pt-16 pb-10 ">
           <TitleText text="Meet some of our tutors with 100+ lessons"/>
           <div className="grid xl:grid-cols-5 content-center  max-w-screen-lg mx-auto">
           {
               Tutorlist.map(i=>{
                   return(
                       <Card 
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
   <div className="flex justify-center mt-10">
 <Button text='View all tutors' variant='secondary'/>
   </div>
   <h1 className='text-secondary text-center font-bold text-2xl mt-10'>Click below for our Top Subjects</h1>
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


