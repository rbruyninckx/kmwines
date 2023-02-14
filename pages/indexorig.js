import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { Libre_Baskerville } from '@next/font/google'


const libre = Libre_Baskerville({ weight: ['400', '700'], subsets: ["latin"] })

export default function Home() {

  

  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  useEffect(() => {
    function resizeValley() {
      const footer = document.querySelector("footer");
      const valley = document.querySelector("#valley");
      const footerHeight = footer.offsetHeight;
      console.log("footerheight", footerHeight)
      valley.style.bottom = footerHeight + "px";
    }

    window.addEventListener("resize", resizeValley);

    resizeValley();

    return () => window.removeEventListener("resize", resizeValley);
    
  }, [])



  return (
    <>
      <Head>
        <title>Oregon wines from Willamette Valley | K & M Wines</title>
        <meta name="description" content="Mock up #1 from Ryan Bruyninckx." />       
      </Head>
      
      <div className="min-h-screen flex flex-col z-30">
      <section className="flex-1 z-30">
        <Header/>
        
        <main className={libre.className + ` mt-[98vh] lg:mt-[60vh] min-h-[40vh] z-30 relative`}>
          <div className="w-full bg-white">
            <div className="w-full lg:w-3/4 mx-auto px-6 py-12 ">
              <div className="w-full lg:bg-[url('/images/wine-ring.jpg')] bg-no-repeat bg-[bottom_0px_right_310px]  flex flex-col lg:flex-row items-center">
                <div className="flex-1 ">
                  <h3 className="text-3xl text-alchemy mb-6 font-bold">We would love to share our wines with you!</h3>
                  <p className="text-xl mb-4 leading-normal">Experience our small production, food-friendly wines in the heart of Carlton, Oregon &mdash; and explore locally handcrafted goods in our new <Link href="/tasting-room" className="text-alchemy underline underline-offset-2 font-bold">Milltown Mercantile</Link>. We have an amazing selection of jewelry, home goods, and an expanded pantry of delicacies.</p>
                  <p className="text-xl mb-4 leading-normal"><Link href="/tasting-room" className="text-alchemy underline underline-offset-2 font-bold">Visit us</Link> today for wine tasting and shopping. Our tasting flight changes often but there is always something for everyone &mdash; we make Pinot Noir, Cabernet, Syrah, Chardonnay, and other Whites and Reds.</p>
                  <p className="text-xl mb-4">Be safe, eat well, and enjoy the wines you love! Cheers,</p>
                  <p className="text-xl">Ken & Mauro</p>
                </div>
                <div className="px-6">
                  <div className="border border-gray-200 shadow-md mt-8 lg:-mt-32 bg-white p-4 lg:rotate-3 " id="photo">
                    <Image 
                      src="/images/ken-mauro.jpg" 
                      width={400} 
                      height={400} 
                      alt="Ken & Mauro, Proprietors"                      
                      className={`bg-gray-100 transition duration-1000 object-contain ${isReady ? ' bg-white opacity-100' : ' opacity-0' }`} 
                      onLoadingComplete={onLoadCallback}
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-white max-lg:mb-[15vh] lg:mb-[25vh]">
            
            <div className=" lg:w-3/4 mx-auto p-6 ">

            <div className="c7-product-collection hidden" data-collection-slug="featured"></div>
            <h3 className="text-3xl   text-logo text-center">~ Today&rsquo;s Featured Wines ~</h3>
            <p className="text-lg mb-6 text-center"><Link href="/" className="underline">Shop All Wines</Link></p>
            <div className="grid grid-flow-row gap-5 max-lg:grid-rows-3 lg:grid-cols-3">
              <div className="rounded-md border border-gray-100 flex flex-col card">
                <div className="w-full h-[200px] overflow-hidden">
                  <Image src="/images/wine-1.jpg" height={200} width={400} alt="Wine 1" className="h-[200px] w-full object-cover rounded-t-md"/>
                </div>
                <div className="flex-1 p-4">
                  <h4 className="text-center text-2xl text-alchemy text-bold mb-4">12 Days of Feasting</h4>
                  <p className="text-center">A mix of 12 wines to brighten your Fall and Holiday. An amazing mix:. 1 pink; 1 Sparkling; 1 White; 2 Pinot noir; 4 Big Reds and 3 Big Red Blends.</p>

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
                  <p className="text-center">Deep Smoky Reds - a mixed case, half case, or a 3 pack gift box of our three big bold reds: Grenache, Cabernet Franc and Syrah.</p>

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
                  <p className="text-center">Trio of Pinot noir - a mixed case, half case, or a 3 pack gift box of our three of our favorite Pinot noir: Alchemy Cuvee, Beacon Hill Vineyard; Alchemy Reserve.</p>

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
      <Footer/>
      </div>

      <div className="h-screen absolute w-full z-10 top-0 left-0">
        <Image src="/images/tasting-room.jpg" alt="Tasting room" width={800} height={600} className="object-cover h-screen w-full z-0 opacity-85"/>
        <div className={libre.className + ` absolute top-[25vh] lg:top-[30vh] w-full text-center z-20 px-6`}>
          <h1 className="text-logo text-4xl md:text-5xl mb-6 leading-normal hidden"><span className="bg-white px-3 py-1 lg:pr-0">Welcome to</span><br className="lg:hidden"/><span className="bg-white px-3 py-1 ">K & M Wines</span></h1>
          <h1 className="text-white text-3xl md:text-5xl mb-6 leading-normal underline decoration-alchemy decoration-4 underline-offset-4">Welcome to <br className="lg:hidden"/>K & M Wines</h1>
          <h2 className="text-white text-xl lg:text-3xl  mt-2">Oregon Pinot Noir and Chardonnay from the Willamette Valley</h2>
        </div>
        <div className="absolute bottom-12 w-full text-center lg:hidden text-white"><p className={libre.className + ` text-xl text-white underline decoration-alchemy underline-offset-2 hidden`}>View More</p><i class="fa-solid fa-arrow-down  animate-bounce w-10 h-10 text-white"></i></div>
      </div>
      <div className="h-[574px] absolute w-full z-0 bottom-0 left-0 bg-[#F0AA00] max-lg:max-h-[20vh]" id="valley">
        <div className="h-[50px] lg:h-[100px] w-full bg-gradient-to-b from-white absolute top-0"> </div>
        <div className="h-[50px] lg:h-[100px] w-full bg-gradient-to-t from-[#F0AA00] absolute bottom-0"></div>
        <Image src="/images/willamette-valley-1.jpg" alt="Willamette Valley" width={1920} height={574} className="object-contain lg:object-cover w-full z-0 "/>
        
      </div>

      <Script type="text/javascript" src="https://cdn.commerce7.com/v2/commerce7.js" id="c7-javascript" data-tenant="k-m-wines"/>
      <Script src="https://kit.fontawesome.com/03f0530857.js" crossorigin="anonymous"/>
    </>
  )
}
