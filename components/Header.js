import Link from 'next/link'
import Image from 'next/image'
import { Libre_Baskerville } from '@next/font/google'
import Banner from '../components/Banner'
import logo from "../public/images/k_and_m_logo.png"
const libre = Libre_Baskerville({ weight: ['400', '700'], subsets: ["latin"] })

export default function Header() {
    return(
        <header className={libre.className + ` fixed w-screen z-[100]`}>
          
          <Banner title="Alchemy Cuvee Case Sale &mdash; Save 20%!" src="/" linkText="Click Here for More Details" closeIcon="true"/>
          <div className="px-4 py-2 w-screen flex flex-row bg-white border-b-8 border-b-alchemy">
            <nav className="mt-3"><Image src={logo} height={60} width={160} priority alt="K & M Wines" className="ml-4"/></nav>
            <nav className="flex-1">
              <div className="flex flex-row w-full h-full text-alchemy items-center justify-end nav-links max-lg:hidden">
                <Link href="/" className="mx-8 text-2xl">Visit Us</Link>
                <Link href="/" className="mx-8 text-2xl">Events</Link>
                <Link href="/" className="mx-8 text-2xl hidden">Alchemy Vineyard</Link>
                <Link href="/" className="mx-8 text-2xl">Our Story</Link>
                <Link href="/" className="mx-8 text-2xl">Wine Club</Link>
                <Link href="/" className="mx-8 text-2xl">Buy Wine</Link>
                <i className="fa-solid fa-user mx-8 text-2xl h-[24px]"></i>
                <i className="fa-solid fa-cart-shopping mx-8 text-2xl h-[24px]"></i>
              </div>
              <div className="flex flex-row w-full h-full text-alchemy items-center justify-end lg:hidden">
                
                    <i className="fa-solid fa-user mx-5 text-2xl h-[24px]"></i>
                    <i className="fa-solid fa-cart-shopping mx-5 text-2xl h-[24px]"></i>
                  <i className="fa-solid fa-bars h-[24px] mx-5 text-2xl "></i>
                
                
              </div>
            </nav>
          </div>
        </header>
    )
}