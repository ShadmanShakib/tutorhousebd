import React from 'react'
import Head from 'next/head'
import {Layout} from '@components/common';
import {Hero,Tutors }from '@components/ui';
import {Benefits, Review, SliderPress} from '@components/Homepage';




export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Flow Blog template by Shadman Shakib</title>
       
      </Head>
      <Layout>
        <Hero/>
        <Tutors/>
        <SliderPress/>
        <Benefits/>
        <Review/>
        </Layout>
  
    </div>
  )
}
