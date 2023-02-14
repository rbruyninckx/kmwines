import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/images/k_and_m_logo.png"

export default function MobileMenu() {
    return(
        <>
        <div id="xsMenu" className="mobile-menu initialset divide-y divide-alchemy/50 "  data-hasopened="0">
            <div className="px-4 py-2 w-screen flex flex-row bg-white">
                <nav className="mt-3"><Link href="/" onClick={() => toggleMobileMenu()}><Image src={logo} height={40} width={107} priority alt="K & M Wines" className="ml-2 max-xl:h-[40px] max-xl:w-auto cursor-pointer"/></Link></nav>
                <nav className="flex-1">
                
                <div className="flex flex-row w-full h-full text-alchemy items-center justify-end  ">
                    
                        <i className="fa-solid fa-user mx-5 text-2xl h-[24px] cursor-pointer"></i>
                        <i className="fa-solid fa-cart-shopping mx-5 text-2xl h-[24px] cursor-pointer"></i>
                        <span onClick={() => toggleMobileMenu()}>
                        <i className="fa-solid fa-xmark h-[24px] mx-5 text-2xl cursor-pointer" id="closeIcon"></i>
                        </span>
                    
                </div>
                </nav>
            </div>


          
          <div className="w-full p-6">
            <div className="grid grid-cols-1 auto-rows-auto w-full text-alchemy items-center gap-4 ">
                    <Link href="/" className="text-2xl hover:underline hover:decoration-alchemy" onClick={() => toggleMobileMenu()}>Visit Us</Link>
                    <Link href="/" className="text-2xl hover:underline hover:decoration-alchemy" onClick={() => toggleMobileMenu()}>Events</Link>
                    <Link href="/" className="text-2xl hidden hover:underline hover:decoration-alchemy" onClick={() => toggleMobileMenu()}>Alchemy Vineyard</Link>
                    <Link href="/" className="text-2xl hover:underline hover:decoration-alchemy" onClick={() => toggleMobileMenu()}>Our Story</Link>
                    <Link href="/" className="text-2xl hover:underline hover:decoration-alchemy" onClick={() => toggleMobileMenu()}>Wine Club</Link>
                    <Link href="/" className="text-2xl hover:underline hover:decoration-alchemy" onClick={() => toggleMobileMenu()}>Buy Wine</Link>
                    
            </div>
          </div>
          
          
        </div></>
    )
}

function toggleMobileMenu() {
    event.preventDefault();
    const xsMenu = document.querySelector("#xsMenu");
    if(xsMenu.getAttribute("data-hasopened") == "1") {
        xsMenu.classList.toggle("fly-out");

    } 
    console.log("Mobile menu:", xsMenu.classList.contains("fly-in") ? "close" : "open");
    xsMenu.classList.toggle("fly-in");
    xsMenu.setAttribute("data-hasopened", "1");
    xsMenu.classList.contains("initialset") ? xsMenu.classList.remove("initialset") : "";

}