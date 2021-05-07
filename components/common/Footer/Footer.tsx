import React from 'react';
import css from './Footer.module.css';


function Footer() {
    return (
        <div className="bg-gray-200 xl:px-10 grid xl:grid-cols-5 gap-x-5 py-16">
        <div>
            <img className="h-10" src="/images/fulllogo.png" alt=""/>
            <h1 className="mt-3">Improving the quality of education through personalised learning.</h1>
            <h1 className="py-1">Terms</h1>
            <h1 className="py-1">Privacy Policy</h1>
            <h1 className="py-1">Copyright 2021. All rights reserved.</h1>
        </div>
        <div className="">
            <h1 className={css.title}>Help {'&'} advice</h1>
            <h1 className="py-1">About Us</h1>
            <h1 className="py-1">Tutor house blog</h1>
            <h1 className="py-1">Homeschooling</h1>
            <h1 className="py-1">A-level retakes</h1>
            <h1 className="py-1">Find a Private tutor</h1>
            <h1 className="py-1">How to become a tutor</h1>
        </div>
        <div className="">
            <h1 className={css.title}>Top A-level Tutors</h1>
            <h1 className="py-1">A-level Maths Tutors</h1>
            <h1 className="py-1">A-level Chemistry Tutors</h1>
            <h1 className="py-1">A-level French Tutors</h1>
            <h1 className="py-1">A-level Law Tutors </h1>
            <h1 className="py-1">A-level Physics Tutors</h1>
            <h1 className="py-1">A-level Spanish Tutors</h1>
            <h1 className="py-1">A-level Art Tutors</h1>
        </div>
        <div className="">
            <h1 className={css.title}>Top GCSE Tutors</h1>
            <h1 className="py-1">GCSE Maths Tutors</h1>
            <h1 className="py-1">GCSE Art Tutors</h1>
            <h1 className="py-1">GCSE Chemistry Tutors</h1>
            <h1 className="py-1">GCSE Physics Tutors</h1>
            <h1 className="py-1">GCSE French Tutors</h1>
            <h1 className="py-1"> GCSE Spanish Tutors</h1>
        </div>
        <div className="">
            <div className="flex">
            <img className="mr-5" src="/images/FacebookPurple.svg" alt=""/>
            <img className="mr-5" src="/images/linkedIn.svg" alt=""/>
            <img src="/images/twitter.svg" alt="twitter logo"/>
            </div>
            <div className="flex items-center mt-4">
            <img src="/images/activecall.svg" alt=""/>
            <h1>000 2939 9393</h1>
            </div>
            <div className="flex mt-4 flex-col">
            <button className={css.btn + " bg-primary"}>Match me with a tutor</button>
            <button className={css.btn + " bg-secondary mt-4"}>Become a tutor</button>
        </div>
            </div>
        </div>
    )
}

export default Footer
