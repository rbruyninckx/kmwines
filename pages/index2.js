import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Header from '../components/Header'

import Products from '../components/Products'

import { useEffect, useState } from 'react'
import { Libre_Baskerville, Roboto } from '@next/font/google'

import FooterMenu from '@/components/FooterMenu'


const libre = Libre_Baskerville({ weight: ['400', '700'], subsets: ["latin"] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"]})

export default function HomeTwo() {

    const formSubmit = (e) => {

        e.preventDefault();
        //do validation
        const message = document.querySelector("#signup_message");
        
        message.innerHTML = "Thanks for signing up!";
        //message.classList.add("visible");
        message.classList.remove("hidden");
        document.forms[0].reset();
        setTimeout(() => {
          
          message.classList.add("hidden");
          //message.classList.remove("visible");
        }, 2000);
      }
  



  return (
    <>
      <Head>
        <title>Oregon wines from Willamette Valley | K & M Wines</title>
        <meta name="description" content="Mock up #2 from Ryan Bruyninckx." />       
      </Head>
      <Header/>
      <div className="flex flex-col w-full min-h-screen">
        <main className="flex-1 flex flex-col w-full">
            <section className="hero bg-[url('/images/tasting-room.jpg')] bg-cover bg-center block">
                <div className="bg-black/30 w-full h-full">
                <div className="container flex flex-col md:flex-row items-center align-middle  h-[60vh] ">
                    <div className="mt-44 text-center w-full">
                        <h1 className={libre.className + ` text-3xl lg:text-4xl text-white underline underline-offset-4 decoration-4 decoration-alchemy`}>We would love to share our wines with you!</h1>
                        <button className="mt-6 mx-3">Shop Our Wine</button>
                        <button className="bg-white text-alchemy  rounded-md hover:bg-logo-lightest border-none mx-3">Visit Our Tasting Room</button>
                    </div>
                </div>
                </div>
            </section>
            <section className="bg-alchemy block">
                <div className="container my-8 text-center max-lg:px-0">
                    <h2 className={libre.className + ` text-4xl lg:text-5xl text-white uppercase tracking-wider max-lg:px-6`}>Visit Us Today</h2>
                    <p className="text-white text-lg my-4 tracking-wide max-lg:px-6">Our Tasting Room is located in the heart of Carlton, Oregon, on Main Street. Visit us to taste great wine and shop local artisanal goods at Milltown Mercantile.</p>
                    <div className=" overflow-x-auto snap-mandatory snap-x mx-auto lg:mx-auto hide-scrollbar">
                    <div className="grid gap-8 w-max md:w-full grid-rows-1 grid-cols-4 md:grid-rows-1 md:grid-cols-4 my-6 mx-40 lg:mx-0">
                        <div className="border border-gray-200 p-4 bg-white max-md:w-[300px] max-md:h-[300px] snap-center">
                            <Image src="/images/tasting-room-guests.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="Wine"/>
                        </div>
                        <div className="border border-gray-200 p-4 bg-white  max-md:w-[300px] max-md:h-[300px] snap-center">
                            <Image src="/images/wine-2.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="More wine"/>
                        </div>
                        <div className="border border-gray-200 p-4 bg-white  max-md:w-[300px] max-md:h-[300px] snap-center">
                            <Image src="/images/ken.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="Lots more wine"/>
                        </div>
                        <div className="border border-gray-200 p-4 bg-white  max-md:w-[300px] max-md:h-[300px] snap-center">
                            <Image src="/images/wine-3.jpg" width={400} height={400} className="w-full h-full object-cover shadow-md" alt="Lotsa more wine"/>
                        </div>
                    </div>
                    </div>
                    <p className="text-white max-lg:px-6">
                        <button className="bg-white text-alchemy px-6 py-4 rounded-md hover:bg-logo-lightest border-none mt-4 mb-0">Click Here for Hours and Directions</button>
                    </p>
                </div>
            </section>
            <section className="bg-white block">
                <div className="container my-8 text-center">
                    <h3 className={libre.className + ` text-4xl lg:text-5xl text-alchemy`}>Current Releases</h3>
                    <p><Link href="/" className="mt-4 mb-0 text-lg font-normal">View All Wine</Link></p>
                    <Products/>
                </div>
            </section>
            <section className="bg-logo-lightest block border-b border-gray-300">
                <div className="my-8 container">
                    <form onSubmit={formSubmit}>
                    <div className="w-full flex flex-col md:flex-row items-top">
                        <div className="flex-1">
                            <h4 className={libre.className + ` text-2xl text-center md:text-left mb-6 md:mb-0 md:mt-4`}>Sign up for exclusive promos and content from <br className="lg:hidden"/>K & M Wines!</h4>
                        </div>
                        <div className="max-md:w-full lg:w-[40%]">
                            <div className="grid auto-rows-max grid-cols-1 md:grid-cols-2 gap-6 items-center w-full mb-0">
                                <div className="md:min-w-[8rem]">
                                    <input className="w-full px-5 py-4 flex-1 rounded-md border border-gray-200 placeholder:italic m-0" type="email" placeholder="Email Address"/>
                                </div>
                                <div>
                                    <button className="m-0 w-full ">Subscribe</button>
                                </div>
                                <div id="signup_message" className="hidden md:col-span-2 self-start text-center text-green-600 font-bold">

                                </div>
                            </div>
                        </div>
                    </div>
                    </form>

                    
                </div>
            </section>
            
        </main>
        
        <FooterMenu/>
      </div>
      


      <Script type="text/javascript" src="https://cdn.commerce7.com/v2/commerce7.js" id="c7-javascript" data-tenant="k-m-wines"/>
      <Script src="https://kit.fontawesome.com/03f0530857.js" crossorigin="anonymous"/>
    </>
  )
}