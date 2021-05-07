import React from 'react';
import {DropDownIcon} from '@components/icons';
import cn from 'classnames';
import css from "./Faq.module.css";
import {constData} from './data';
import Card from './Card'


function Faq() {
    const [openFaq,toggleFaq]=React.useState(false)
    const DropIconClass=cn(
        css.dropIcon,
        {
            [css.dropIconClose]: !openFaq
        });

    const CardClass=cn(
        {
            ['hidden']:!openFaq
        }
    )

    return (
        <React.Fragment >
            <div className="bg-gray-200">
            <div className="  grid py-20 mx-auto max-w-screen-lg  "> 
            <div className="flex items-center justify-between py-5 ">
            <h1 className="text-secondary font-semibold">How Tutorhouse works FAQ?</h1>
            <div onClick={()=>toggleFaq(!openFaq)} className="bg-secondary cursor-pointer w-8 h-8 rounded-full  text-white flex justify-center items-center">
            <DropDownIcon  className={DropIconClass}/>
            </div> 
            </div>
         <div className={CardClass}>
             {constData.map(i=>{
                 return(
                     <Card 
                     key={i.id} 
                     title={i.qus}
                     description={i.ans}
                     />
                 )
             })}
         </div>
         </div>
         </div>
        </React.Fragment>
    )
}

export default Faq
