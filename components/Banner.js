import Link from 'next/link'

export default function Banner({title, src, linkText, closeIcon}) {

    const closeBanner = () => {
        const banner = document.querySelector(".banner");
        banner.classList.add("hidden");
    }
    return(
        <div className="bg-logo w-full text-center lg:text-xl text-white px-10 py-4 relative banner">
            {title}<br className="lg:hidden"/>
            <Link href={src} className="ml-2 underline underline-offset-2 text-white hover:text-logo-light hover:underline-logo-light">
                {linkText}
            </Link>
            { closeIcon == "true" ? 
            <div className="absolute -top-4 right-8 lg:top-0 lg:right-10 h-full w-5 lg:w-8 flex items-center" >
                <div className="w-5 h-5 lg:w-8 lg:h-8" onClick={closeBanner}>
                    <i className="fa-light fa-xmark h-5 w-5 lg:h-8 lg:w-8 hover:cursor-pointer  opacity-60 hover:opacity-100" title="Close Banner" ></i>
                </div>
            </div>
            : null
            }
        </div>
    )
}