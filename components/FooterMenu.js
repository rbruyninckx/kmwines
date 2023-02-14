import Link from 'next/link'
import Image from 'next/image'
import { Libre_Baskerville } from '@next/font/google'

const libre = Libre_Baskerville({ weight: ['400', '700'], subsets: ["latin"] })

export default function FooterMenu() {

   

    return(
        <footer className="bg-gradient-to-t from-sky-100 to-gray-100 ">
            <div className="stripes w-full">
            <div className="container !p-0">
                <div className=" grid grid-rows-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 gap-8 items-start pt-0 py-8 lg:py-8">
                    <div className="text-center lg:text-left">
                        <div className="lg:p-4 bg-white lg:border lg:border-gray-200 lg:shadow-md lg:w-auto w-full lg:mx-0 inline-block">
                            <Link href="/">
                                <Image src="/images/map-bw.jpg" alt="" width={300} height={300} className="border border-gray-200 w-full h-[250px] lg:h-full object-cover"/>
                            </Link>
                        </div>
                        
                    </div>

                    <div className="text-center lg:text-left">
                    <h5 className={libre.className + ` text-2xl font-bold text-black mb-4`}>Visit Us</h5>
                    <p className="font-bold text-xl lg:text-lgl">128 West Main Street<br/>Carlton, Oregon 97111</p>
                    <p className="text-xl lg:text-lg">Call Us: <br className="lg:hidden"/><span className="font-bold">503-625-3236</span></p>
                    <p className="text-xl lg:text-lg"><Link href="/">Hours & Directions</Link></p>
                    <div className="text-3xl flex flex-row mt-6  max-lg:justify-center max-lg:mb-4">
                        <div className="w-8 h-8 mr-4 inline"><i className="fa-brands fa-facebook mr-4 w-8 h-8 cursor-pointer"></i></div>
                        <div className="w-8 h-8 mr-4 inline"><i className="fa-brands fa-twitter mr-4 w-8 h-8 cursor-pointer"></i></div>
                        <div className="w-8 h-8 mr-4 inline"><i className="fa-brands fa-instagram mr-4 w-8 h-8 cursor-pointer"></i></div>
                        <div className="w-8 h-8  inline"><i className="fa-brands fa-tiktok mr-4 w-8 h-8  cursor-pointer"></i></div>

                    </div>
                    </div>

                    <div className="text-center lg:text-left">
                    <h5 className={libre.className + ` text-2xl font-bold text-black mb-4`}>Our Wine</h5>
                    <p className="text-xl lg:text-lg">
                        
                        <Link href="/">Pinot Noir</Link><br/>
                        <Link href="/">Big Reds</Link><br/>
                        <Link href="/">White Wines</Link><br/>
                        <Link href="/">Ros&eacute;</Link><br/>
                        <Link href="/">Gift Collections</Link><br/>
                        <Link href="/">Wine Club</Link><br/>
                        <Link href="/">Shop</Link>
                    </p>
                    </div>

                    <div className="text-center lg:text-left">
                    <h5 className={libre.className + ` text-2xl font-bold text-black mb-4`}>About K & M</h5>
                    <p className="text-xl lg:text-lg">
                        
                        <Link href="/">Ken & Mauro</Link><br/>
                        <Link href="/">Alchemy Vineyard</Link><br/>
                        <Link href="/">Tasting Room</Link><br/>
                        <Link href="/">Milltown Mercantile</Link><br/>
                        <Link href="/">Willamette Valley</Link><br/>
                        <Link href="/">Local Events</Link><br/>
                        <Link href="/">Send Us a Message</Link>
                    </p>
                    </div>
                    
                </div>
                
            </div>
            </div>
            <div className="bg-slate-600 py-4 px-4 w-full">
                <div className="container p-0 text-sm text-center text-white">&copy; 2023 K & M Wines. All Rights Reserved. <br className="lg:hidden"/>Must be 21 years or older to purchase and consume alcohol. </div>
            </div>
            

      </footer>
    )
}