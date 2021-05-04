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
            <div className=" bg-gray-200 grid py-20 justify-center  "> 
            <div className="flex items-center ">
            <h1 className="text-secondary">How Tutorhouse works FAQ?</h1>
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
        </React.Fragment>
    )
}

export default Faq
