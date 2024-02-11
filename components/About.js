import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const About = () => {
  return (
    <>
    
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl gap-4">Why Sainik School Entrance Exam?
</h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">The Sainik School Entrance Exam serves as a gateway for admission to Sainik Schools, which prepare students for careers in the armed forces by offering a holistic education emphasizing academics, physical fitness, and character development.</p>

                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                    <span className="relative inline-block">
                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                        <span className="relative"> Have a question? </span>
                    </span>
                    <br className="block sm:hidden" />Ask me on <Link href="tel:+919152063771" title="" className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">WhatsApp</Link>
                </p>
            </div>

            <div className="relative">
                <Image className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="/b6.png" alt="" width={1024} height={1024} />

                <Image className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/b9.png" alt="" width={1024} height={1024} />
            </div>
        </div>
    </div>
</section>

    
    
    </>
  )
}

export default About