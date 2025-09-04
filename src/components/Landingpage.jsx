import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigate = useNavigate();
  const clickhandle = () => {
    navigate("/contact")
  }
  return (
    <div className="bg-[url('https://www.samco.in/knowledge-center/wp-content/uploads/cache/2025/04/Metal-Sector-Advances-as-Steel-Import-Duty-Takes-Effect/1542723141.jpg')] h-[calc(100vh-100px)] bg-cover bg-center w-full">
      <div className="h-[calc(100vh-100px)] bg-cover bg-center w-full">
        <div className="bg-[rgba(241,175,8,0.3)] w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col gap-6 px-4 sm:px-6 md:px-10 text-center">
          
          {/* Heading */}
          <div>
            <h1 className="font-bold text-white font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug">
              Building the Future of <br /> 
              Steel & <span className="text-white">Aluminum</span>
            </h1>
          </div>

          {/* Content Section */}
          <div className="w-full max-w-4xl bg-transparent flex flex-col items-center gap-5">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-sans font-bold leading-relaxed px-2 sm:px-6 md:px-10">
              We specialize in delivering premium metal solutions that combine strength, precision, and durability. From construction to automotive and industrial applications, our products are crafted to perform. With innovation and strict quality standards, we ensure lasting value, reliability, and customer satisfaction.
            </p>

            {/* Button */}
            <button onClick={clickhandle} className="w-[160px] sm:w-[200px] py-3 font-sans font-bold text-black bg-[#e0bc74] hover:bg-[#c9a85f] transition-all duration-300 rounded-lg text-sm sm:text-base md:text-lg">
              Know more details
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landingpage
