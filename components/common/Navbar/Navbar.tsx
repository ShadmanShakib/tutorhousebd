import React from 'react';
import {WhatIcon,DropDownIcon, MenuIcon} from "@components/icons"
"use strict";

function Navbar():JSX.Element {
   
    return (
        <React.Fragment>
            <div className="  shadow-lg  h-16 flex items-center justify-between text-secondary">
           <img className="h-8 ml-6" src="/images/fulllogo.png" alt="logo"/>
           <div className="flex items-center">
               <div className="xl:flex hidden  items-center mr-5">
               <h1 className="">Tutoring</h1>
               <DropDownIcon className="transform rotate-180 mt-1 ml-2"/>
               </div>
               <div className="xl:flex hidden  items-center mr-5">
               <h1 className="">Subjects</h1>
               <DropDownIcon className="transform rotate-180 mt-1 ml-2"/>
               </div>
               <div className="xl:flex hidden  items-center mr-5">
               <h1>About</h1>
               <DropDownIcon className="transform rotate-180 mt-1 ml-2"/>
               </div>
               <h1 className="mr-5 hidden xl:block">Become a Tutor</h1>
               <h1 className="mr-5 hidden xl:block">Log In</h1>
               <button className="py-2 mr-10 text-lg items-center focus:outline-none px-3 shadow xl:flex hidden font-semibold rounded-md text-white bg-primary"><WhatIcon className="mr-1" fill="white"/>Request a tutor</button>
           </div>
           <MenuIcon className="h-6 w-6 mr-6 xl:hidden"/>
            </div>
        </React.Fragment>
    )
}

export default Navbar
