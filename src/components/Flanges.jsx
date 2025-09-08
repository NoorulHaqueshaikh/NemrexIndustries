import React, { useState } from 'react';

function Flanges() {
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
    console.log("submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbykOois5nn8V_X212vpM26ewffLoIvJZX65oqp1o3uCL9gjgbqQZ1W7QwjGzQmqY_i5/exec",
      {
        method: "POST",
        body: formData,
      }
    ).then(()=> {
      formEle.reset();
    })
  }

  return (
    <div className="min-h-screen w-full m-auto">
      {/* Banner */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className="text-5xl font-bold font-sans text-white">FLANGES</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col xl:flex-row gap-8 w-[90%] xl:w-[84%] m-auto mt-16 mb-10">
        {/* Left - Flanges Info */}
        <div className="w-full xl:w-[70%]">
          <div className="h-[300px] md:h-[500px] xl:h-[600px] w-full">
            <img
              className="w-full h-full object-cover"
              src="https://excelindustries.co/wp-content/uploads/2023/05/20240624_192708-770x475.png"
              alt="flanges"
            />
          </div>

          <div className="text-justify leading-relaxed text-lg text-gray-800">
            {/* Main Heading */}
            <h2 className="text-4xl font-extrabold text-[#464A4D] mt-6 mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              FLANGES
            </h2>
            <p className="mb-6">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we are dedicated to providing a wide range
              of high-quality flanges, including SORF, slip-on, blind, BLRF, weld neck, WNRF, and socket weld flanges, made from
              premium materials such as{" "}
              <span className="text-[#e0bc74] font-medium">
                Stainless Steel, Inconel, Monel, Nickel, Hastelloy, and Duplex
              </span>
              . Our inventory ensures durability, corrosion resistance, and superior performance.
            </p>

            {/* Stainless Steel Flanges */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">1. Stainless Steel Flanges</h3>
            <p className="mb-3">
              Available in grades 304, 316, 321, and 410. Options include slip-on, weld neck, and blind flanges.
              Known for strength, corrosion resistance, and versatility.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li><span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Protects against rust and oxidation.</li>
              <li><span className="font-semibold text-[#e0bc74]">Durability:</span> High tensile strength for reliable sealing.</li>
              <li><span className="font-semibold text-[#e0bc74]">Versatility:</span> Performs under varied temperatures and pressures.</li>
            </ul>

            {/* Inconel Flanges */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">2. Inconel Flanges</h3>
            <p className="mb-3">
              Designed for extreme environments with excellent oxidation and corrosion resistance.
              Common in aerospace, oil & gas, and chemical industries.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li><span className="font-semibold text-[#e0bc74]">Heat Resistance:</span> Performs in high temperatures.</li>
              <li><span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Withstands harsh chemicals.</li>
              <li><span className="font-semibold text-[#e0bc74]">Strength:</span> High tensile reliability under stress.</li>
            </ul>

            {/* Monel Flanges */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">3. Monel Flanges</h3>
            <p className="mb-3">
              Nickel-copper alloy (Monel 400, K-500). Ideal for marine and chemical environments.
              Includes slip-on, weld neck, and blind flanges.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Superior corrosion resistance in seawater.</li>
              <li>High strength at both subzero & high temperatures.</li>
              <li>Good weldability for fabrication ease.</li>
            </ul>

            {/* Nickel Flanges */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">4. Nickel Flanges</h3>
            <p className="mb-3">
              Known for outstanding corrosion resistance and high-temperature strength.
              Widely used in aerospace, marine, and chemical processing.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Good thermal and electrical conductivity.</li>
              <li>Durable construction ensures long-lasting performance.</li>
            </ul>

            {/* Hastelloy Flanges */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">5. Hastelloy Flanges</h3>
            <p className="mb-3">
              Designed to withstand severe corrosion, pitting, and stress cracking.
              Used in chemical plants, aerospace, and pollution control.
            </p>

            {/* Duplex Flanges */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">6. Duplex Flanges</h3>
            <p className="mb-3">
              Combine strength of ferritic and corrosion resistance of austenitic steels (Duplex 2205, Super Duplex 2507).
              Perfect for oil & gas, marine, and chemical industries.
            </p>

            {/* Titanium Flanges */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">7. Titanium Flanges</h3>
            <p className="mb-3">
              Lightweight, strong, and highly corrosion resistant. Available in slip-on, blind, and threaded types.
              Trusted in oil & gas and chemical industries.
            </p>

            {/* Conclusion */}
            <h2 className="text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p>
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we provide premium-quality flanges across Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium.
              Explore our full range to find the perfect solution for your business needs.
              <span className="text-[#e0bc74] font-semibold"> Trust NemrexIndustries for quality and service excellence.</span>
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white w-full xl:w-[30%] h-auto p-6">
          <h2 className="text-2xl font-bold text-[#464A4D] mb-6 pb-2">
            Get In Touch
          </h2>

          <form onSubmit={(e) => submit(e)} className="space-y-8 form">
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <label htmlFor="firstname" className="text-gray-600 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400
                    focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                    px-2 py-2 w-full"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <label htmlFor="lastname" className="text-gray-600 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400
                    focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                    px-2 py-2 w-full"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <label htmlFor="email" className="text-gray-600 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400
                    focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                    px-2 py-2 w-full"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <label htmlFor="phonenumber" className="text-gray-600 font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Enter your phone number"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400
                    focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                    px-2 py-2 w-full"
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
                className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400
                  focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                  px-2 py-2 resize-none w-full"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={submitHandle}
                className="bg-[#e0bc74] hover:bg-[#d1a95d] transition rounded-lg w-[200px] h-[50px]
                  text-white font-semibold text-lg flex items-center justify-center"
              >
                {submitbtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Flanges;



