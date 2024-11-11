import Image from "next/image";

import React from "react";

const About = () => {
  return (
    <section className="text-gray-600 body-font" id="about">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="scroll-m-8 text-6xl font-extrabold tracking-tight lg:text-5xl">About me</h1>

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <br className="hidden lg:inline-block" />
            My Journey in Cloud Security, DevOps, and AiOps
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a passionate Cloud Cybersecurity, DevOps Engineer, and AiOps Expert with a focus on creating secure, scalable, and efficient digital environments. With extensive experience in cloud infrastructure, automation, and system security, I specialize in optimizing workflows, enhancing performance, and integrating intelligent solutions. Currently, I am expanding my skill set by learning Next.js and TypeScript to stay ahead in web development and build modern, responsive applications. I am committed to continuous learning and leveraging emerging technologies to deliver innovative solutions that drive business transformation and security.
          </p>
          <div className="flex justify-center">
            {/* Optional buttons or other elements */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={"/image.png"}
            width={500} // specify the width here
            height={500} // specify the height here
          />
        </div>
      </div>
    </section>
  );
};

export default About;



