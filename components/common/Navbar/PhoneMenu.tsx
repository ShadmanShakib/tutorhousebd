import React from 'react';
import cn from 'classnames';
import {DropDownIcon} from "@components/icons"
import css from './Navbar.module.css'

interface CardProps{
    title:string,
    arr?:{id:number,text:string} [],
}

const PhoneMenu:React.FC<CardProps>=(props)=>{
    const {title, arr}=props
    const [isOpen,setIsOpen]=React.useState(false)
   
    const OptionsCn=cn(
        css.options,
        { 
            ["hidden"]:!isOpen
        }
    )
    const DropIconCn=cn(css.dropIcon,
        {
            [css.dropIconClose]:!isOpen
        }
    )
    return(
        <div  className={css.PhoneMenu}>
            <div onClick={()=>setIsOpen(!isOpen)} className="flex py-3 items-center justify-between ">
            <h1   >{title}</h1>
            <DropDownIcon className={DropIconCn}/>
            </div>
            <div className={OptionsCn}>
            {arr && arr.map(i=>{
                        return <h1 className="py-3 cursor-pointer hover:bg-gray-200 px-4" key={i.id}>{i.text}</h1>
                    } 
             )
            }

            </div>
                   
         
        </div>
     )
}
export default PhoneMenu;