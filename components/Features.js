import React from 'react'
import Image from 'next/image'



const Features = () => {
  return (
    <>
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Exam Prep With FPA</p>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">COMMON UNIVERSITY
ENTRANCE TEST (CUET)</h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <div className="flex items-start">
                <svg className="flex-shrink-0 text-green-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black">What Is CUET?</h3>
                        <p className="mt-3 text-base text-gray-600">From the academic session 2022-23, students have been
provided a single window opportunity to seek admission in
any of the Central Universities across the country through a
Common University Entrance Test (CUET)</p>
                    </div>
                </div>

                <div className="flex items-start">
                <svg className="flex-shrink-0 text-green-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black">Popular Universities
under CUET
</h3>
                        <p className="mt-3 text-base text-gray-600">UNIVERSITY OF DELHI,
DELHI TECHNOLOGICAL UNIVERSITY,
DR. B.R. AMBEDKAR UNIVERSITY DELHI,
INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN,
DELHI SKILL, ENTREPRENEURSHIP UNIVERSITY,
JAMIA MILLIA ISLAMIA,
JAWAHARLAL NEHRU UNIVERSITY,
BANARAS HINDU UNIVERSITY,</p>
                    </div>
                </div>

                <div className="flex items-start">
                <svg className="flex-shrink-0 text-green-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black">CUET Exam Structure?</h3>
                        <p className="mt-3 text-base text-gray-600">No age limit,
Passed class 12th/ equivalent examination or appearing,
Must fulfill programme wise eligibility conditions of the university,
Required t o fulfill the age criteria (if any) as per the University.</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3">
                <Image className="w-full rounded-lg shadow-xl" src="/bg7.png" alt="" width={1080} height={1080}/>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Features