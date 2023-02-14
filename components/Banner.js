import Link from 'next/link'

export default function Banner({title, src, linkText, closeIcon}) {

    const closeBanner = () => {
        const banner = document.querySelector(".banner");
        const xsMenu = document.querySelector("#xsMenu");
        banner.classList.add("hidden");
        xsMenu.style.top = "0px";
    }
    return(
        <div className="bg-logo w-full text-center text-sm lg:text-xl text-white px-10 py-4 relative banner">
            {title}<br className="lg:hidden"/>
            <Link href={src} className="ml-2 underline underline-offset-2 text-white hover:text-logo-light hover:underline-logo-light">
                {linkText}
            </Link>
            { closeIcon == "true" ? 
            <div className="absolute top-0 right-10 h-full w-8 flex items-center" >
                <div className="w-8 h-8" onClick={closeBanner}>
                    <i className="fa-light fa-xmark h-8 w-8 hover:cursor-pointer  opacity-60 hover:opacity-100" title="Close Banner" ></i>
                </div>
            </div>
            : null
            }
        </div>
    )
}