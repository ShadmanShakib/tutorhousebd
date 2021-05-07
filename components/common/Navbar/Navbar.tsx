import React from 'react';
import {WhatIcon,DropDownIcon, MenuIcon} from "@components/icons";
import css from './Navbar.module.css';
import {data} from './constData';
import cn from 'classnames';
import PhoneMenu from './PhoneMenu';
"use strict";

interface CardProps{
    title:string,
    arr?:{id:number,text:string} [],
}

const Card:React.FC<CardProps>=(props)=>{
    const {title, arr}=props
    const [isOpen,setIsOpen]=React.useState(false)
    const ItemClass=cn(
        css.cardItem,
        {
            ["hidden"]:!isOpen
        }
    )
    const cardCn=cn(
        css.card,
        {
            [" border-secondary   "]:isOpen,
            ["border-white"]:!isOpen

        }
    )
    const DropIconCn=cn(css.dropIcon,
        {
            [css.dropIconClose]:!isOpen
        }
    )
    return(
        <div  className={cardCn}>
            <div tabIndex={0} onBlur={()=>setIsOpen(false)} onClick={()=>setIsOpen(!isOpen)} className="flex items-center cursor-pointer py-3">
            <h1   >{title}</h1>
            <DropDownIcon className={DropIconCn}/>
            </div>
           
            <div className={ItemClass}>
                    {arr && arr.map(i=>{
                        return <h1 className="py-3 cursor-pointer hover:bg-gray-200 px-4" key={i.id}>{i.text}</h1>
        
                    } 
                        )}
            </div>  
        </div>
     )
}

      
function Navbar():JSX.Element {
    const [openPM,setOpenPM]=React.useState(false)
   const RequestTutorBtn=<button className={css.btn}><WhatIcon className="mr-1" fill="white"/>Request a tutor</button> 
    const PMCn=cn(
        "absolute xl:hidden px-10 top-16 bg-white w-full pb-10 shadow-lg ",
        {
            ["hidden"]:!openPM
        }
    )
   
   return (
        <React.Fragment>
            <div className={css.root}>
           <img className="h-8 ml-6" 
           src="/images/fulllogo.png"
            alt="logo"/>
           <div className="xl:flex  hidden items-center">
               {
                   data.map(i=>{
                       return(
                        <Card key={i.id} title={i.title} arr={i.options}/>
                       )
                   })
               }

               <h1 className={css.menuItem}>Become a Tutor</h1>
               <h1 className={css.menuItem}>Log In</h1>
               {RequestTutorBtn}
           </div>
           <MenuIcon onClick={()=>setOpenPM(!openPM)} className="h-6 w-6 mr-6 xl:hidden"/>
           <div className={PMCn}>
               <div className="flex flex-col">
               {
                   data.map(i=>{
                       return(
                        <PhoneMenu key={i.id} title={i.title} arr={i.options}/>
                       )
                   })
               }
               </div>
           
           <h1 className="py-3">Become a Tutor</h1>
               <h1 className="py-3">Log In</h1>
               <div className="flex justify-center  items-center">
               <button className={css.PMbtn}><WhatIcon className="mr-1" fill="white"/>Request a tutor</button>
               </div>
           
           </div>
            </div>
           
        </React.Fragment>
    )
}

export default Navbar
