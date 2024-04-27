
"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
  
      <section className="text-gray-600 body-font bg-gray-100 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am a
        <br className="hidden lg:inline-block" />

        <Typewriter
  options={{
    strings: [
      'Frontend Web Developer', 
      'Technical Analysis Expert For Crypto'],
    autoStart: true,
    loop: true,
  }}
/>

      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      I am a dedicated leaner with a strong passsion for web development blockchain technology artificial intelligence and the emerging metaverse My 
        expertise lies in technical analysis within the cryptocurrency market. i am driven bt a deep commitment to innovation and am eeager to contribute to cutting-edge 
        projects in these dynamics fiels.My goal is to harness my skills and knowledge to make a meaningful impact in the world of technology and digital innovation
        
       
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
       </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"  
         width={500}
        height={500}
        src={require("../../../public/assets/picture/ansar.jpg")}
     
      />
    </div>
  </div>
</section>
 
   
  )
}

export default Hero
