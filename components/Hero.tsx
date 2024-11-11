import react from "react"
import Image from "next/image"

const Hero  = ()=>{
    return (
        <div>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 h-[450px] md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src={"/image.png"}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Muhammad Maarij Najam
      </h1>
      <p className="mb-8 leading-relaxed">
      A passionate Cloud & Cybersecurity expert with deep expertise in DevOps and AiOps, focused on driving secure and efficient solutions.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <a href="#contact">Contact</a>
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Explore
        </button>
      </div>
    </div>
  </div>
</section>


        </div>
    )
}


export default Hero
