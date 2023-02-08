import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import Products from '../components/Products'

import { useEffect, useState } from 'react'
import { Libre_Baskerville, Roboto } from '@next/font/google'


const libre = Libre_Baskerville({ weight: ['400', '700'], subsets: ["latin"] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"]})

export default function HomeTwo() {

  



  return (
    <>
      <Head>
        <title>Oregon wines from Willamette Valley | K & M Wines</title>
        <meta name="description" content="Mock up #2 from Ryan Bruyninckx." />       
      </Head>
      <Header/>
      <div className="flex flex-col w-full min-h-screen">
        <main className="flex-1 flex flex-col w-full">
            <section className="hero bg-[url('/images/tasting-room.jpg')] bg-cover bg-center">
                <div className="container flex flex-col md:flex-row items-center align-middle  h-[60vh]">
                    <div className="mt-44 text-center w-full">
                        <h1 className={libre.className + ` text-3xl lg:text-4xl text-white underline underline-offset-4 decoration-4 decoration-alchemy`}>We would love to share our wines with you!</h1>
                        <button className="mt-6 mx-3">Shop Our Wine</button>
                        <button className="bg-white text-alchemy  rounded-md hover:bg-logo-lightest border-none mx-3">Visit Our Tasting Room</button>
                    </div>
                </div>
            </section>
            <section className="bg-alchemy">
                <div className="container my-8 text-center">
                    <h2 className={libre.className + ` text-4xl lg:text-5xl text-white uppercase tracking-wider`}>Visit Us Today</h2>
                    <p className="text-white text-lg my-4 tracking-wide">Our Tasting Room is located in the heart of Carlton, Oregon, on Main Street. Visit us to taste great wine and shop local artisanal goods at Milltown Mercantile.</p>
                    
                    <div className="grid gap-8 w-full grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 my-6">
                        <div className="border border-gray-200 p-4 bg-white">
                            <Image src="/images/tasting-room-guests.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="Wine"/>
                        </div>
                        <div className="border border-gray-200 p-4 bg-white">
                            <Image src="/images/wine-2.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="More wine"/>
                        </div>
                        <div className="border border-gray-200 p-4 bg-white">
                            <Image src="/images/ken.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="Lots more wine"/>
                        </div>
                        <div className="border border-gray-200 p-4 bg-white">
                            <Image src="/images/wine-3.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="Lotsa more wine"/>
                        </div>
                    </div>
                    <p className="text-white">
                        <button className="bg-white text-alchemy px-6 py-4 rounded-md hover:bg-logo-lightest border-none mt-4 mb-0">Click Here for Hours and Directions</button>
                    </p>
                </div>
            </section>
            <section className="bg-white">
                <div className="container my-8 text-center">
                    <h3 className={libre.className + ` text-4xl lg:text-5xl text-alchemy`}>Our Current Releases</h3>
                    <p><Link href="/" className="mt-4 text-lg">View All Wine</Link></p>
                    <Products/>
                </div>
            </section>
            <section className="bg-logo-lightest">
                <div className="my-8 container">
                    <div className="w-full flex flex-col md:flex-row items-center">
                        <div className="flex-1">
                            <h4 className={libre.className + ` text-2xl text-center md:text-left mb-6 md:mb-0`}>Sign up for exclusive promos and content from K & M Wines!</h4>
                        </div>
                        <div className="max-md:w-full lg:w-[40%]">
                            <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-6 items-center w-full">
                                <div className="md:min-w-[8rem]">
                                    <input className="w-full px-5 py-4 flex-1 rounded-md border border-gray-200 placeholder:italic m-0" type="text" placeholder="Email Address"/>
                                </div>
                                <div>
                                    <button className="m-0 w-full ">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </section>
            
        </main>
        <Footer/>
      </div>
      


      <Script type="text/javascript" src="https://cdn.commerce7.com/v2/commerce7.js" id="c7-javascript" data-tenant="k-m-wines"/>
      <Script src="https://kit.fontawesome.com/03f0530857.js" crossorigin="anonymous"/>
    </>
  )
}
