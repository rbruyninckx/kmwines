import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Banner from '../components/Banner'
import { Libre_Baskerville } from '@next/font/google'
import  logo from "../public/images/k_and_m_logo.png"

const libre = Libre_Baskerville({ weight: ['400', '700'], subsets: ["latin"] })

export default function Home() {

  const formSubmit = (e) => {

    e.preventDefault();
    //do validation
    const message = document.querySelector("#footer_message");
    
    message.innerHTML = "Please check your email inbox for a special offer!";
    message.classList.add("visible");
    message.classList.remove("invisible");
    document.forms[0].reset();
    setTimeout(() => {
      
      message.classList.add("invisible");
      message.classList.remove("visible");
    }, 2000);
  }

  return (
    <>
      <Head>
        <title>Oregon wines from Willamette Valley | K & M Wines</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <div className="h-screen absolute w-full z-10 top-0 left-0">
        <Image src="/images/tasting-room.jpg" alt="Tasting room" width={800} height={600} className="object-cover h-screen w-full z-0 opacity-85"/>
        <div className={libre.className + ` absolute top-[20vh] lg:top-[30vh] w-full text-center z-20`}>
          <h1 className="text-logo text-4xl md:text-5xl mb-6 leading-normal"><span className="bg-white px-3 py-1 lg:pr-0">Welcome to</span><br className="lg:hidden"/><span className="bg-white px-3 py-1 ">K & M Wines</span></h1>
          <h2 className="text-white text-3xl underline decoration-alchemy decoration-4 underline-offset-4 mt-2">Oregon Pinot Noir and Chardonnay from the Willamette Valley</h2>
        </div>
      </div>
      <div className="h-[574px] absolute w-full z-0 bottom-[40vh] left-0 bg-[#F0AA00]">
        <div className="h-[100px] w-full bg-gradient-to-b from-white absolute top-0"> </div>
        <div className="h-[100px] w-full bg-gradient-to-t from-[#F0AA00] absolute bottom-0"></div>
        <Image src="/images/willamette-valley-1.jpg" alt="Willamette Valley" width={1920} height={574} className="object-cover w-full z-0 "/>
        
      </div>
      <div className="min-h-screen flex flex-col z-30">
      <section className="flex-1 z-30">
        
        <header className={libre.className + ` fixed w-screen z-50`}>
          
          <Banner title="Alchemy Cuvee Case Sale &mdash; Save 20%!" src="/" linkText="Click Here for More Details" closeIcon="false"/>
          <div className="px-4 py-2 w-screen flex flex-row bg-white border-b-8 border-b-alchemy">
            <nav className="mt-3"><Image src={logo} height={60} width={160} priority alt="K & M Wines" className="ml-4"/></nav>
            <nav className="flex-1">
              <div className="flex flex-row w-full h-full text-alchemy items-center justify-end nav-links max-lg:hidden">
                <Link href="/" className="mx-8 text-2xl">Visit Us</Link>
                <Link href="/" className="mx-8 text-2xl">Events</Link>
                <Link href="/" className="mx-8 text-2xl">Alchemy Vineyard</Link>
                <Link href="/" className="mx-8 text-2xl">Our Story</Link>
                <Link href="/" className="mx-8 text-2xl">Wine Club</Link>
                <Link href="/" className="mx-8 text-2xl">Buy Wine</Link>
                <i className="fa-solid fa-user mx-8 text-2xl h-[24px]"></i>
                <i className="fa-solid fa-cart-shopping mx-8 text-2xl h-[24px]"></i>
              </div>
              <div className="flex flex-row w-full h-full text-alchemy items-center justify-end lg:hidden">
                <div className="w-8 h-8 mx-8">
                  <i className="fa-solid fa-bars h-[24px] text-2xl "></i>
                </div>
                
              </div>
            </nav>
          </div>
        </header>
        <main className={libre.className + ` mt-[60vh] min-h-[40vh] `}>
          <div className="w-full bg-white">
            <div className="w-full lg:w-3/4 mx-auto p-10">
              <div className="w-full lg:bg-[url('/images/wine-ring.jpg')] bg-no-repeat bg-[bottom_0px_right_310px]  flex flex-col lg:flex-row items-center">
                <div className="flex-1 ">
                  <h3 className="text-3xl text-alchemy mb-6 font-bold">We would love to share our wines with you!</h3>
                  <p className="text-xl mb-4 leading-normal">Experience our small production, food-friendly wines in the heart of Carlton, Oregon &mdash; and explore locally handcrafted goods in our new <Link href="/tasting-room" className="text-alchemy underline underline-offset-2 font-bold">Milltown Mercantile</Link>. We have an amazing selection of jewelry, home goods, and an expanded pantry of delicacies.</p>
                  <p className="text-xl mb-4 leading-normal"><Link href="/tasting-room" className="text-alchemy underline underline-offset-2 font-bold">Visit us</Link> today for wine tasting and shopping. Our tasting flight changes often but there is always something for everyone &mdash; we make Pinot Noir, Cabernet, Syrah, Chardonnay, and other Whites and Reds.</p>
                  <p className="text-xl mb-4">Be safe, eat well, and enjoy the wines you love! Cheers,</p>
                  <p className="text-xl">Ken & Mauro</p>
                </div>
                <div className="px-6">
                  <Image src="/images/ken-mauro.jpg" width={400} height={400} alt="Ken & Mauro, Proprietors" className="object-contain rotate-3 p-4 border border-gray-200 bg-white shadow-md mt-4 lg:-mt-32"/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-white mb-[25vh]">
            
            <div className=" lg:w-3/4 mx-auto p-10 ">

            <div className="c7-product-collection hidden" data-collection-slug="featured"></div>
            <h2 className="text-4xl mb-6  text-alchemy text-center">Top Sellers</h2>

            <div className="grid grid-flow-row gap-5 max-lg:grid-rows-3 lg:grid-cols-3">
              <div className="rounded-md border border-gray-100 flex flex-col card">
                <div className="w-full h-[200px] overflow-hidden">
                  <Image src="/images/wine-1.jpg" height={200} width={400} alt="Wine 1" className="h-[200px] w-full object-cover rounded-t-md"/>
                </div>
                <div className="flex-1 p-4">
                  <h4 className="text-center text-2xl text-alchemy text-bold mb-4">12 Days of Feasting</h4>
                  <p className="text-justify">A mix of 12 wines to brighten your Fall and Holiday. An amazing mix:. 1 pink; 1 Sparkling; 1 White; 2 Pinot noir; 4 Big Reds and 3 Big Red Blends</p>

                </div>
                <div className="p-3 text-center">
                  <p>
                    <span className="line-through">$419.00</span><br/>
                    <span className="text-2xl">Now $281.25 </span>
                  </p>
                  <p>
                    <span className="bg-lime-200 text-sm font-bold px-2 py-1 text-black tracking-wide font-sans">Save 33% Today!</span>
                  </p>
                </div>
                <div className="p-3 text-center"><button>Add To Cart</button></div>
              </div>

              <div className="rounded-md border border-gray-100 flex flex-col  card">
                <div className="w-full h-[200px] overflow-hidden">
                  <Image src="/images/wine-2.jpg" height={200} width={400} alt="Wine 2" className="h-[200px] w-full object-cover rounded-t-md "/>
                </div>
                <div className="flex-1 p-4">
                  <h4 className="text-center text-2xl text-alchemy text-bold mb-4">Deep Smoky Reds</h4>
                  <p className="text-justify">Deep Smoky Reds - a mixed case, half case, or a 3 pack gift box of our three big bold reds: Grenache, Cabernet Franc and Syrah</p>

                </div>
                <div className="p-3 text-center">
                  <p>
                    <span className="line-through">$460.00</span><br/>
                    <span className="text-2xl">Now $293.25 </span>
                  </p>
                  <p>
                    <span className="bg-lime-200 text-sm font-bold px-2 py-1 text-black tracking-wide font-sans">Save 36% Today!</span>
                  </p>
                  </div>
                <div className="p-3 text-center"><button>Add To Cart</button></div>
              </div>

              <div className="rounded-md border border-gray-100 flex flex-col card">
                <div className="w-full h-[200px] overflow-hidden">
                  <Image src="/images/wine-3.jpg" height={200} width={400} alt="Wine 3" className="h-[200px] w-full object-cover rounded-t-md " />
                </div>
                <div className="flex-1 p-4">
                  <h4 className="text-center text-2xl text-alchemy text-bold mb-4">Trio of Pinot Noir</h4>
                  <p className="text-justify">Trio of Pinot noir - a mixed case, half case, or a 3 pack gift box of our three of our favorite Pinot noir: Alchemy Cuvee, Beacon Hill Vineyard; Alchemy Reserve</p>

                </div>
                <div className="p-3 text-center">
                  <p>
                    <span className="line-through">$432.00</span><br/>
                    <span className="text-2xl">Now $275.25</span>
                  </p>
                  <p>
                    <span className="bg-lime-200 text-sm font-bold px-2 py-1 text-black tracking-wide font-sans">Save 36% Today!</span>
                  </p>
                </div>
                <div className="p-3 text-center"><button >Add To Cart</button></div>
              </div>
            </div>
          
          
          </div>
          
            </div>



            
          
        </main>
      </section>
      <footer className={libre.className + ` bg-[#F0AA00] z-30`}>
        <div className="flex w-full lg:w-3/4 flex-col lg:flex-row mx-auto p-10 pb-0">
          <div className="lg:mr-10">
            <h5 className="text-xl font-bold text-black mb-4">Visit Us</h5>
            <p className="font-bold">128 West Main Street<br/>Carlton, Oregon 97111</p>
            <p>Call Us: <span className="font-bold">503-625-3236</span></p>
            <p><Link href="/">Click Here for Latest Hours & Directions</Link></p>
            <div className="text-2xl flex flex-row mt-6">
              <div className="w-6 h-6 mr-4 inline"><i class="fa-brands fa-facebook mr-4 w-6 h-6 cursor-pointer"></i></div>
              <div className="w-6 h-6 mr-4 inline"><i class="fa-brands fa-twitter mr-4 w-6 h-6 cursor-pointer"></i></div>
              <div className="w-6 h-6 mr-4 inline"><i class="fa-brands fa-instagram mr-4 w-6 h-6 cursor-pointer"></i></div>
              <div className="w-6 h-6  inline"><i class="fa-brands fa-tiktok mr-4 w-6 h-6  cursor-pointer"></i></div>

            </div>
          </div>
          <div className="flex-1 grid max-lg:grid-rows-3 lg:grid-cols-3 gap-4">
            <div>
              <h5 className="text-xl font-bold text-black mb-4">Our Wine</h5>
              <p>
                
                <Link href="/">Pinot Noir</Link><br/>
                <Link href="/">Big Reds</Link><br/>
                <Link href="/">White Wines</Link><br/>
                <Link href="/">Ros&eacute;</Link><br/>
                <Link href="/">Gift Collections</Link><br/>
                <Link href="/">Wine Club</Link><br/>
                <Link href="/">Shop</Link>
              </p>
            </div>
            <div>
              <h5 className="text-xl font-bold text-black mb-4">About Us</h5>
              <p>
                
                <Link href="/">Ken & Mauro</Link><br/>
                <Link href="/">Alchemy Vineyard</Link><br/>
                <Link href="/">Tasting Room</Link><br/>
                <Link href="/">Milltown Mercantile</Link><br/>
                <Link href="/">Willamette Valley</Link><br/>
                <Link href="/">Local Events</Link><br/>
                <Link href="/">Send Us a Message</Link>
              </p>
            </div>
            <div>
              <h5 className="text-xl font-bold text-black mb-4 text-center">Sign Up for Our Newsletter</h5>
              <form onSubmit={formSubmit}>
                <p>
                  <input type="email" name="footer_email" id="footer_email" placeholder="Your Email" className="block w-full placeholder:italic border border-alchemy/50 bg-white px-4 py-2 mb-4 rounded-md" required/>
                </p>
                <p>
                <input type="text" name="zip" id="footer_zip" placeholder="Your Zip Code" className="block w-full placeholder:italic border border-alchemy/50 bg-white px-4 py-2 mb-4 rounded-md" pattern="[0-9]{5}" onInvalid={() => {event.target.setCustomValidity('Please enter a valid Zip Code');}} onChange={() => {event.target.setCustomValidity('');}}/>
                </p>
                <div  >
                  <button className="w-full reverse">Submit</button>
                </div>
                <p id="footer_message" className="text-green-700 invisible">This is a placeholder for the form message.</p>
               

              </form>
            </div>
          </div>
          
        </div>
        <div className="w-full lg:w-3/4 px-10 pt-0 pb-10 mx-auto">
          
          <p className="italic text-sm">&copy; 2023 K & M Wines. All Rights Reserved. Must be 21 years or older to purchase and consume alcohol. Artwork by Annie Meyer.</p>
          
        </div>
      </footer>
      </div>
      <Script type="text/javascript" src="https://cdn.commerce7.com/v2/commerce7.js" id="c7-javascript" data-tenant="k-m-wines"/>
      <Script src="https://kit.fontawesome.com/03f0530857.js" crossorigin="anonymous"/>
    </>
  )
}
