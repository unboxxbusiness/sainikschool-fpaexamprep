import React from 'react'
import Image from 'next/image'



const Features = () => {
  return (
    <>
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Exam Prep With FPA</p>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Sainik School Entrance Exam 2024-25</h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <div className="flex items-start">
                <svg className="flex-shrink-0 text-green-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black">Sainik School Entrance Exams</h3>
                        <p className="mt-3 text-base text-gray-600">The Sainik School Entrance Exam is a test conducted by individual Sainik Schools across India for student admission. It evaluates aptitude in subjects like Mathematics, English, and General Knowledge, along with assessing physical fitness. Each school sets its own exam criteria.</p>
                    </div>
                </div>

                <div className="flex items-start">
                <svg className="flex-shrink-0 text-green-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black">Popular Sainik Schools
</h3>
                        <p className="mt-3 text-base text-gray-600">Popular Sainik Schools conducting entrance exams include Kunjpura, Kapurthala, Chittorgarh, Satara, Kazhakootam, Balachadi, Ghorakhal, Amaravathinagar, Rewari, and Korukonda, as well as RIMS and Navoday Sainik Schools</p>
                    </div>
                </div>

                <div className="flex items-start">
                <svg className="flex-shrink-0 text-green-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black">Sainik School Eligibilty</h3>
                        <p className="mt-3 text-base text-gray-600">Sainik School Entrance Exam eligibility criteria typically include age requirements (10-12 years for Class 6 and 13-15 years for Class 9), completion of 5th or 8th standard from a recognized school, and Indian citizenship, with variations among schools.




</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3">
                <Image className="w-full rounded-lg shadow-xl" src="/Cl4.png" alt="" width={1080} height={1080}/>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Features