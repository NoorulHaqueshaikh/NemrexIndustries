import React from "react";

function About() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-12 gap-12 min-h-screen sm:min-h-screen lg:min-h-screen min-[350px]:min-h-0 min-[350px]:justify-center">
      
      {/* Left Section */}
      <div className="flex xl:ml-8 xl:mb-10 mt-10 flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left lg:w-1/2">
        <h1 className="font-extrabold font-sans text-4xl sm:text-5xl lg:text-6xl flex gap-4">
          ABOUT <span className="text-[#e0bc74]">US</span>
        </h1>
        <h2 className="font-semibold font-sans text-2xl sm:text-3xl lg:text-5xl">
          Builds Trust
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-medium max-w-xl">
          Nemrex Industries is a trusted name in the metal industry,
          specializing in high-quality metal fabrication, processing, and
          supply. We deliver durable and innovative solutions for
          construction, automotive, and manufacturing sectors, ensuring
          precision, reliability, and customer satisfaction.
        </p>
        <button className="px-6 py-3 bg-[#e0bc74] font-bold text-black rounded-lg hover:scale-105 transition duration-300">
          Know more details
        </button>
      </div>

      {/* Right Section with yellow box + shifted image */}
      <div className="flex justify-center items-center lg:w-1/2 w-full">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-64 sm:h-80 md:h-96 bg-[#e0bc74]">
          <div className="absolute top-7 left-4 sm:top-6 sm:left-6 md:top-9 md:left-9 w-[100%] h-[100%] bg-gray-300 overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1443208359/photo/welder-welding-sheet-metal.webp?a=1&b=1&s=612x612&w=0&k=20&c=pPFrHbVSOs29qOzTRbCzUWIoXuB1pUcRZu-uxD7upqE="
              alt="Welder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;








