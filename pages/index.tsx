import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next';
import {Layout} from '@components/common';
import {Hero }from '@components/ui'




export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Flow Blog template by Shadman Shakib</title>
       
      </Head>
      <Layout>
        <Hero/>
        </Layout>
  
    </div>
  )
}
