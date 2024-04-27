import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[400px] "
        alt="hero"
        src={require("../../../public/assets/picture/ansar.jpg")}
        width={300}
        height={500}
        />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
        I am a dedicated leaner with a strong passsion for web development blockchain technology artificial intelligence and the emerging metaverse My 
        expertise lies in technical analysis within the cryptocurrency market. i am driven bt a deep commitment to innovation and am eeager to contribute to cutting-edge 
        projects in these dynamics fiels.My goal is to harness my skills and knowledge to make a meaningful impact in the world of technology and digital innovation
        
      </p> 
      <div className="flex justify-center">
        <a  href={"/assets/cv/myCv.pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
