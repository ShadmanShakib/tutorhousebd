import { Button } from '@components/ui'
import React from 'react'

function Promo() {
    return (
        <div className="bg-primary h-36 flex justify-center items-center text-white font-semibold"> 
           <h1 className="text-3xl w-2/5 text-center">Tutor house only accepts the <span className="text-secondary">top 20%</span> of applicants to become <span className="text-secondary">tutor</span>  with us</h1> 
       <div className="flex flex-col items-center">
       <Button variant="secondary" text="Browse All Tutors"/>
        <Button text="Become a Tutor" variant="empty"/>
       </div>

        </div>
    )
}

export default Promo
