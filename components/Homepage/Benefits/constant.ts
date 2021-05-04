interface IBenefitlist{
id:number,
title:string,
description:string,
imgSrc:string,
}


export const Benefitlist:IBenefitlist []=[
    {
        id:1,
        imgSrc:'/images/education.svg',
        title:'Our education Team',
        description:'All of our team have extensive experience working within the field of education and are dedicated to providing each student with the educational support they need to thrive.'
    },
    {
        id:2,
        imgSrc:'/images/no-hidden-fee.svg',
        title:'No hidden fees',
        description:'With Tutor House, you’ll never pay for anything other than the private tuition sessions that you receive. You will not need to pay a sign-up or membership fee, and all payments are made securely through our website.',
    },
    {
        id:3,
        imgSrc:"/images/match.svg",
        title:'Bespoke matches',
        description:'With our unique job posting system, it means that customers arent left messaging tutors that never respond. All of our tutors are keen to help you learn and have been especially picked for you by our bespoke matching algorithm.',
    },
    {
        id:4,
        imgSrc:'/images/video-introduction.svg',
        title:'Free trial calls ',
        description:'Tutor House offers a free 15-minute trial call with your potential tutor so you can see if they are the best fit for you before committing. Once youve had your free call you will have the option to book discounted package lessons with your tutor, or learn one class at a time.',
    },
 
]