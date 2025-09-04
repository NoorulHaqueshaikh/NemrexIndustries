import React, { useState } from 'react'

function ButtWeldFit() {
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
    fetch(
      "https://script.google.com/macros/s/AKfycbykOois5nn8V_X212vpM26ewffLoIvJZX65oqp1o3uCL9gjgbqQZ1W7QwjGzQmqY_i5/exec",
      {
        method: "POST",
        body: formData,
      }
    );
  }

  return (
    <div className="min-h-screen w-full m-auto">
      {/* Banner */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white text-center">
          BUTT-WELD FITTINGS
        </h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8 w-[92%] md:w-[84%] m-auto mt-10 mb-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[70%]">
          <div className="w-full h-auto md:h-[400px] lg:h-[600px]">
            <img
              className="w-full h-full object-cover"
              src="https://excelindustries.co/wp-content/uploads/2023/05/20240716_155506-1-770x475.png"
              alt="buttweldfit"
            />
          </div>

          {/* Text Content */}
          <div className="mt-6 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#464A4D] mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              BUTT-WELD FITTINGS
            </h2>
            <p className="mb-6 text-justify leading-relaxed text-base md:text-lg">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we supply a comprehensive range of
              <span className="text-[#e0bc74] font-medium"> butt-weld fittings</span>, including elbows, tees, reducers, crosses,
              end caps, and stub ends. These fittings are manufactured from high-quality materials like
              <span className="text-[#e0bc74] font-medium"> Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium</span>,
              ensuring excellent durability, weld integrity, and corrosion resistance. Widely used in pipelines,
              oil & gas, petrochemical, power generation, and marine industries.
            </p>

            {/* Section 1 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">1. Stainless Steel Butt-Weld Fittings</h3>
            <p className="mb-3">
              Available in grades 304, 316, 321, and 410. Includes elbows (90°/45°), equal & reducing tees, concentric & eccentric reducers.
              Ideal for general piping systems due to excellent weldability.
            </p>
            <ul className="list-disc ml-6 md:ml-8 space-y-1">
              <li><span className="font-semibold text-[#e0bc74]">Strength:</span> High pressure and temperature resistance.</li>
              <li><span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Reliable in aggressive environments.</li>
              <li><span className="font-semibold text-[#e0bc74]">Long Life:</span> Durable in industrial applications.</li>
            </ul>

            {/* Section 2 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">2. Inconel Butt-Weld Fittings</h3>
            <p className="mb-3">Designed for extreme high-temperature and corrosive conditions. Used in aerospace, nuclear plants, and chemical industries.</p>
            <ul className="list-disc ml-6 md:ml-8 space-y-1">
              <li>Exceptional heat resistance.</li>
              <li>High oxidation and scaling protection.</li>
              <li>Reliable strength under stress.</li>
            </ul>

            {/* Section 3 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">3. Monel Butt-Weld Fittings</h3>
            <p className="mb-3">
              Made from Monel 400 and K-500 alloys, these fittings are suitable for marine and chemical plants where seawater
              and acidic conditions are common.
            </p>
            <ul className="list-disc ml-6 md:ml-8 space-y-1">
              <li>Excellent resistance to seawater and alkalis.</li>
              <li>High mechanical strength.</li>
              <li>Good weldability and durability.</li>
            </ul>

            {/* Section 4 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">4. Nickel Butt-Weld Fittings</h3>
            <p className="mb-3">Nickel fittings are valued for their superior corrosion resistance and excellent electrical conductivity. Widely applied in chemical and marine environments.</p>
            <ul className="list-disc ml-6 md:ml-8 space-y-1">
              <li>Resistant to oxidizing and reducing agents.</li>
              <li>Good thermal stability.</li>
              <li>Durable under high stress.</li>
            </ul>

            {/* Section 5 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">5. Hastelloy Butt-Weld Fittings</h3>
            <p className="mb-3">Ideal for highly corrosive chemical industries, Hastelloy fittings resist stress cracking, pitting, and oxidation in aggressive chemical processes.</p>
            <ul className="list-disc ml-6 md:ml-8 space-y-1">
              <li>Outstanding resistance to acids and chemicals.</li>
              <li>Performs well under extreme pressure and heat.</li>
            </ul>

            {/* Section 6 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">6. Duplex Butt-Weld Fittings</h3>
            <p className="mb-3">Combining ferritic and austenitic steel qualities, Duplex butt-weld fittings offer excellent toughness and corrosion resistance for offshore and petrochemical industries.</p>
            <ul className="list-disc ml-6 md:ml-8 space-y-1">
              <li>High resistance to chloride stress cracking.</li>
              <li>Superior mechanical strength.</li>
              <li>Long-lasting in seawater applications.</li>
            </ul>

            {/* Section 7 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">7. Titanium Butt-Weld Fittings</h3>
            <p className="mb-3">Lightweight and strong, titanium fittings are extensively used in aerospace, marine, and chemical industries where reliability and corrosion resistance are critical.</p>
            <ul className="list-disc ml-6 md:ml-8 space-y-1">
              <li>High strength-to-weight ratio.</li>
              <li>Biocompatible and non-magnetic.</li>
              <li>Excellent resistance to seawater and acids.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p className="text-justify leading-relaxed text-base md:text-lg">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we supply premium-quality butt-weld fittings
              in Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium.
              These fittings guarantee durability, precision, and superior performance in diverse industries.
              <span className="text-[#e0bc74] font-semibold"> Choose NemrexIndustries for reliable pipeline solutions.</span>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white w-full lg:w-[30%] h-auto p-6">
          <h2 className="text-2xl font-bold text-[#464A4D] mb-6">Get In Touch</h2>
          <form onSubmit={(e) => submit(e)} className="space-y-8 form">
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="firstname" className="text-gray-600 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="border-0 border-b-2 border-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="lastname" className="text-gray-600 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="border-0 border-b-2 border-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="email" className="text-gray-600 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border-0 border-b-2 border-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="phonenumber" className="text-gray-600 font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Enter your phone number"
                  className="border-0 border-b-2 border-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
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
                className="border-0 border-b-2 border-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={submitHandle}
                className="bg-[#e0bc74] hover:bg-[#d1a95d] transition w-[180px] h-[50px] text-white font-semibold text-lg flex items-center justify-center"
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

export default ButtWeldFit;
