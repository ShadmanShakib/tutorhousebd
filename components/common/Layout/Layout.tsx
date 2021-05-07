import React from 'react';
import {Navbar,Footer} from '@components/common'

interface Layouttypes{
    children?:React.ReactNode
}

function Layout({children}:Layouttypes) {
    return (
        <React.Fragment>
            <Navbar/>
            <div className=" max-w-screen-2xl mx-auto">
            {children} 
            </div>
       
         <Footer/>  
        </React.Fragment>
    )
}

export default Layout
