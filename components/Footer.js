import Link from 'next/link'
import { Libre_Baskerville } from '@next/font/google'

const libre = Libre_Baskerville({ weight: ['400', '700'], subsets: ["latin"] })

export default function Footer() {

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

    return(
        <footer className={libre.className + ` bg-[#F0AA00] `}>
            <div className="grid max-lg:grid-rows-4 lg:grid-cols-4 gap-6 w-full lg:w-3/4 p-6 mx-auto max-lg:text-center">
                <div>
                    <h5 className="text-2xl font-bold text-black mb-4">Visit Us</h5>
                    <p className="font-bold max-lg:text-xl">128 West Main Street<br/>Carlton, Oregon 97111</p>
                    <p className="max-lg:text-xl">Call Us: <br className="lg:hidden"/><span className="font-bold">503-625-3236</span></p>
                    <p className="max-lg:text-xl"><Link href="/">Hours & Directions</Link></p>
                    <div className="text-3xl flex flex-row mt-6  max-lg:justify-center max-lg:mb-4">
                        <div className="w-6 h-6 mr-4 inline"><i className="fa-brands fa-facebook mr-4 w-6 h-6 cursor-pointer"></i></div>
                        <div className="w-6 h-6 mr-4 inline"><i className="fa-brands fa-twitter mr-4 w-6 h-6 cursor-pointer"></i></div>
                        <div className="w-6 h-6 mr-4 inline"><i className="fa-brands fa-instagram mr-4 w-6 h-6 cursor-pointer"></i></div>
                        <div className="w-6 h-6  inline"><i className="fa-brands fa-tiktok mr-4 w-6 h-6  cursor-pointer"></i></div>

                    </div>
                </div>
                <div className="mt-4 lg:mt-0">
                    <h5 className="text-2xl font-bold text-black mb-4">Our Wine</h5>
                    <p className="max-lg:text-xl">
                        
                        <Link href="/">Pinot Noir</Link><br/>
                        <Link href="/">Big Reds</Link><br/>
                        <Link href="/">White Wines</Link><br/>
                        <Link href="/">Ros&eacute;</Link><br/>
                        <Link href="/">Gift Collections</Link><br/>
                        <Link href="/">Wine Club</Link><br/>
                        <Link href="/">Shop</Link>
                    </p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <h5 className="text-2xl font-bold text-black mb-4">About K & M</h5>
                    <p className="max-lg:text-xl">
                        
                        <Link href="/">Ken & Mauro</Link><br/>
                        <Link href="/">Alchemy Vineyard</Link><br/>
                        <Link href="/">Tasting Room</Link><br/>
                        <Link href="/">Milltown Mercantile</Link><br/>
                        <Link href="/">Willamette Valley</Link><br/>
                        <Link href="/">Local Events</Link><br/>
                        <Link href="/">Send Us a Message</Link>
                    </p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <h5 className="text-2xl font-bold text-black mb-4 text-center">Newsletter Signup</h5>
                    <form onSubmit={formSubmit}>
                        <p>
                        <input type="email" name="footer_email" id="footer_email" placeholder="Your Email" className="block w-full placeholder:italic border border-alchemy/50 bg-white px-4 py-2 mb-4 rounded-md" required/>
                        </p>
                        <p>
                        <input type="text" name="zip" id="footer_zip" placeholder="Your Zip Code" className="block w-full placeholder:italic border border-alchemy/50 bg-white px-4 py-2 mb-4 rounded-md" pattern="[0-9]{5}" onInvalid={() => {event.target.setCustomValidity('Please enter a valid Zip Code');}} onChange={() => {event.target.setCustomValidity('');}}/>
                        </p>
                        <div  >
                        <button className="w-full reverse">Subscribe</button>
                        </div>
                        <p id="footer_message" className="text-green-700 invisible">This is a placeholder for the form message.</p>
                    

                    </form>
                </div>


            </div>
            <div className="w-full lg:w-3/4 px-6 pt-0 pb-6 mx-auto mt-4 lg:mt-0">
          
                <p className="italic text-sm">&copy; 2023 K & M Wines. All Rights Reserved. Must be 21 years or older to purchase and consume alcohol. Artwork by Annie Meyer.</p>
          
            </div>
        
        
      </footer>
    )
}