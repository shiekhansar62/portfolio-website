import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      <div className="lg:w-1/3 sm:w-1/2 p-4 " >
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/picture/amazon clone.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium + mb-1">
              Amazon Clone
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Amazon
            </h1>
            <p className="leading-relaxed line-clamp-2">
             this is the project i have created who own this business 
            </p>
            <Link target="_blank"href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline ">
           
            View Project...
            </p>
             </Link>
          </div>
        </div>
      </div>
      {/* {project} */}
      <div className="lg:w-1/ sm:w-1/2 p-4 cursor-pointer">
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
