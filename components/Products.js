import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
    const products = [{
        name: '2020 Seven Hills Vineyard Syrah',
        src: 'syrah.png'
    }, {
        name: '2019 Columbia Valley Mourvedre',
        src: 'mourvedre.png'
    }, {
        name: '2021 Alchemy Cuvee Pinot Noir',
        src: 'alchemy-cuvee.png'
    }, {
        name: '2021 K & M Medley',
        src: 'medley.png'
    }]

    return(
        <div className="w-full grid grid-cols-1 grid-rows-4 gap-6 md:grid-cols-4 md:grid-rows-1 my-12">
            {products.map(product => {
                return(
                
                    <div className="flex flex-col w-full items-center p-4 rounded-md border border-gray-200 hover:border-gray-400 hover:bg-gray-100" key={product.name}>
                        <div className="px-20 sm:px-6">
                            <Image src={`/images/` + product.src} width={400} height={400} className="object-fill" alt={product.name}/>
                        </div>
                        <div className="text-center mt-4 flex-1">
                            <p className="font-bold text-xl">{product.name}</p>
                        </div>
                        <div className="mt-4 text-center">
                            <Link href="/" className="text-lg">View Details</Link> 
                        </div> 
                    </div>
                )
                })
            }
            

        </div>
    )
}