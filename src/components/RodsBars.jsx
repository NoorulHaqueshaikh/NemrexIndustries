import React, { useState } from 'react'

function RodsBars() {
  const [submitbtn, setSubmitbtn] = useState("Send Message");

  const submitHandle = () => {
    setSubmitbtn("Submitted");
    setTimeout(() => {
      setSubmitbtn("Send Message");
    }, 3000);
  };

  function submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formEle);
    fetch("https://script.google.com/macros/s/AKfycbykOois5nn8V_X212vpM26ewffLoIvJZX65oqp1o3uCL9gjgbqQZ1W7QwjGzQmqY_i5/exec", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <div className="min-h-screen w-full m-auto">
      {/* Banner */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-white text-center">
          RODS/BARS
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 w-[84%] m-auto mt-10 mb-10">
        {/* Left: Image + Text */}
        <div className="w-full lg:w-[70%]">
          <div className="h-auto lg:h-[600px] w-full">
            <img
              className="w-full h-full object-cover"
              src="https://excelindustries.co/wp-content/uploads/2023/05/Group-7-2-770x475.jpg"
              alt="rodsbars"
            />
          </div>

          {/* Text Content */}
          <div className="text-justify leading-relaxed text-lg text-gray-800">
            <h2 className="text-4xl font-extrabold text-[#464A4D] mt-6 mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              RODS / BARS
            </h2>
            <p className="mb-6">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we manufacture and supply a comprehensive 
              range of <span className="text-[#e0bc74] font-medium">Rods and Bars</span>, available in round, square, hexagonal, and flat shapes.  
              Our products are crafted from premium alloys including 
              <span className="text-[#e0bc74] font-medium"> Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium</span>.  
              Designed for durability, strength, and corrosion resistance, these rods and bars are ideal for 
              construction, automotive, shipbuilding, oil & gas, and engineering applications.
            </p>

            {/* Sections (1-7) */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">1. Stainless Steel Rods & Bars</h3>
            <p className="mb-3">
              Manufactured in grades 304, 316, 321, and 410. Available in polished, hot rolled, and cold drawn finishes.  
              Used in structural components, pipelines, and fabrication works.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li><span className="font-semibold text-[#e0bc74]">Strength:</span> High mechanical performance.</li>
              <li><span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Suitable for harsh environments.</li>
              <li><span className="font-semibold text-[#e0bc74]">Versatility:</span> Adaptable for industrial and architectural use.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">2. Inconel Rods & Bars</h3>
            <p className="mb-3">
              Designed for extreme heat and chemical resistance, Inconel rods and bars are widely used in aerospace, 
              nuclear, and petrochemical industries.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Performs reliably at very high temperatures.</li>
              <li>Exceptional resistance to oxidation and scaling.</li>
              <li>Durable under mechanical stress and heavy loads.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">3. Monel Rods & Bars</h3>
            <p className="mb-3">
              Made from nickel-copper alloys (Monel 400, K-500), these rods and bars are trusted in marine, oil & gas, 
              and chemical environments for their outstanding resistance.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Superior resistance to seawater corrosion.</li>
              <li>Strong mechanical properties across temperatures.</li>
              <li>Excellent workability and weldability.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">4. Nickel Rods & Bars</h3>
            <p className="mb-3">
              Known for their outstanding corrosion resistance and strength, Nickel rods and bars are widely used in 
              aerospace, electronics, marine, and chemical processing industries.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Excellent electrical and thermal conductivity.</li>
              <li>Durability for long-term service.</li>
              <li>Reliable performance under extreme conditions.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">5. Hastelloy Rods & Bars</h3>
            <p className="mb-3">
              Specially designed to handle aggressive chemical environments.  
              Hastelloy rods and bars resist corrosion, pitting, and cracking in harsh conditions.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Resistant to strong oxidizers and reducing agents.</li>
              <li>Durable in high-stress applications.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">6. Duplex & Super Duplex Rods & Bars</h3>
            <p className="mb-3">
              Offering superior strength and corrosion resistance, Duplex rods and bars are widely used in marine, 
              oil & gas, and chemical processing.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>High resistance to chloride-induced corrosion.</li>
              <li>Improved mechanical strength with reduced weight.</li>
              <li>Reliable under fluctuating pressures.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">7. Titanium Rods & Bars</h3>
            <p className="mb-3">
              Titanium rods and bars are lightweight, durable, and highly resistant to corrosion.  
              Extensively used in aerospace, defense, chemical, and marine applications.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Outstanding strength-to-weight ratio.</li>
              <li>Long service life in seawater environments.</li>
              <li>Biocompatibility for medical applications.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p>
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we deliver high-quality rods and bars across 
              Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium.  
              Designed to meet the needs of industries worldwide, our products ensure reliability and strength in every application.  
              <span className="text-[#e0bc74] font-semibold"> Choose NemrexIndustries for trusted rod and bar solutions.</span>
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white w-full lg:w-[30%] h-auto p-6">
          <h2 className="text-2xl font-bold text-[#464A4D] mb-6 pb-2">
            Get In Touch
          </h2>

          <form onSubmit={(e) => submit(e)} className="space-y-8 form">
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="firstname" className="text-gray-600 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74] px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="lastname" className="text-gray-600 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74] px-2 py-2"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="email" className="text-gray-600 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74] px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="phonenumber" className="text-gray-600 font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Enter your phone number"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74] px-2 py-2"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-600 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Write your message..."
                className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74] px-2 py-2 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={submitHandle}
                className="bg-[#e0bc74] hover:bg-[#d1a95d] transition w-full sm:w-[200px] h-[50px] text-white font-semibold text-lg flex items-center justify-center"
              >
                {submitbtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RodsBars
