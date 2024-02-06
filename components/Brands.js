import React from 'react'
import Image from 'next/image'


const Brands = () => {
  return (
    <>

<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-3">
            <div>
                <Image className="object-contain w-auto mx-auto h-32" src="/b1.png" alt="" width={512} height={512}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-32" src="/b2.png" alt="" width={512} height={512}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-32" src="/b3.png" alt="" width={512} height={512}/>
            </div>

            
        </div>
    </div>
</section>






</>
  )
}

export default Brands