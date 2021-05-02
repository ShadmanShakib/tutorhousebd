import React from 'react';
import {Navbar,Footer} from '@components/common'

interface Layouttypes{
    children?:React.ReactNode
}

function Layout({children}:Layouttypes) {
    return (
        <React.Fragment>
            <Navbar/>
         {children} 
         <Footer/>  
        </React.Fragment>
    )
}

export default Layout
