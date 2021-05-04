import React from 'react';
import cn from 'classnames';
import css from './Faq.module.css';
import {DropDownIcon} from '@components/icons'

export interface FaqCardProps{
    title:string,
    description:string,
}

function Card(props:FaqCardProps) {
    const [answer,setAnswer]=React.useState(false)
    const DropIconClass=cn(
        css.dropIcon,
       {
           [css.dropIconClose]:!answer
       }
    )
    const descritonClass=cn(
        css.cardDescription,
        {
            ['hidden']:!answer
        }
    )
    return (
        <div className={css.FaqCard}>
            <div className="text-secondary flex items-center justify-between text-lg font-semibold">
           {props.title} 
           <DropDownIcon onClick={()=>setAnswer(!answer)} className={DropIconClass}/>
            </div>
           <div className={descritonClass}>
           {props.description}
           </div>
        </div>
    )
}

export default Card;
