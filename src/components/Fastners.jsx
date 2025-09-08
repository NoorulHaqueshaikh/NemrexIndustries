import React, { useState } from 'react'

function Fastners() {
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
      body: formData
    }).then(()=> {
      formEle.reset();
    })
  }

  return (
    <div className="min-h-screen w-full m-auto">
      {/* Hero */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className='text-5xl font-bold font-sans text-white'>FASTENERS</h1>
      </div>

      {/* Main */}
      <div className="flex flex-col lg:flex-row gap-8 w-[90%] lg:w-[84%] m-auto mt-10 mb-10">
        {/* Left: image + content */}
        <div className="w-full lg:w-[70%]">
          <div className="h-auto lg:h-[600px] w-full">
            <img
              className="w-full h-full object-cover"
              src="https://excelindustries.co/wp-content/uploads/2023/05/Group-7-1.png"
              alt="fastners"
            />
          </div>

          <div className="text-justify leading-relaxed text-lg text-gray-800 mt-6">
            <h2 className="text-4xl font-extrabold text-[#464A4D] mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              FASTENERS
            </h2>

            <p className="mb-6">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we manufacture and supply a complete range 
              of <span className="text-[#e0bc74] font-medium">industrial fasteners</span>, including bolts, nuts, washers, studs, 
              screws, and threaded rods. Our fasteners are engineered from premium alloys such as 
              <span className="text-[#e0bc74] font-medium"> Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium</span>,  
              ensuring superior strength, corrosion resistance, and long-term reliability across industries like oil & gas, 
              construction, aerospace, and marine.
            </p>

            {/* 1 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">1. Stainless Steel Fasteners</h3>
            <p className="mb-3">
              Manufactured in grades 304, 316, 321, and 410. Available in hex bolts, nuts, screws, and washers.  
              Ideal for construction, automotive, and structural applications.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li><span className="font-semibold text-[#e0bc74]">Durability:</span> Long service life with high tensile strength.</li>
              <li><span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Performs well in harsh environments.</li>
              <li><span className="font-semibold text-[#e0bc74]">Versatility:</span> Suitable for multiple industries and uses.</li>
            </ul>

            {/* 2 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">2. Inconel Fasteners</h3>
            <p className="mb-3">
              Known for outstanding heat and chemical resistance, Inconel fasteners are widely used in aerospace, 
              petrochemical, and power generation sectors.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Excellent strength at elevated temperatures.</li>
              <li>Resists oxidation and scaling in extreme conditions.</li>
              <li>Reliable performance under high stress.</li>
            </ul>

            {/* 3 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">3. Monel Fasteners</h3>
            <p className="mb-3">
              Monel 400 and K-500 fasteners are highly suitable for marine, offshore, and chemical industries due to 
              their nickel-copper composition.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Excellent resistance to seawater and salt spray.</li>
              <li>High strength and toughness.</li>
              <li>Long-lasting performance in corrosive environments.</li>
            </ul>

            {/* 4 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">4. Nickel Fasteners</h3>
            <p className="mb-3">
              Nickel alloy fasteners are widely used in chemical processing, aerospace, and marine engineering due 
              to their superior resistance and conductivity.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Outstanding resistance to oxidizing agents.</li>
              <li>Good electrical and thermal conductivity.</li>
              <li>Durability under extreme conditions.</li>
            </ul>

            {/* 5 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">5. Hastelloy Fasteners</h3>
            <p className="mb-3">
              Specifically designed for aggressive chemical and acidic environments, Hastelloy fasteners are essential 
              for chemical plants and pollution control systems.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Excellent resistance to pitting and stress corrosion.</li>
              <li>Performs well in oxidizing and reducing agents.</li>
            </ul>

            {/* 6 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">6. Duplex Fasteners</h3>
            <p className="mb-3">
              Combining the strength of ferritic steel and the corrosion resistance of austenitic steel, Duplex fasteners 
              are highly reliable in oil & gas, marine, and offshore environments.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>High resistance to stress corrosion cracking.</li>
              <li>Enhanced mechanical strength.</li>
              <li>Ideal for seawater and chloride-rich conditions.</li>
            </ul>

            {/* 7 */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">7. Titanium Fasteners</h3>
            <p className="mb-3">
              Titanium fasteners are lightweight, extremely durable, and corrosion resistant. Extensively used in aerospace, 
              defense, marine, and medical industries.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Exceptional strength-to-weight ratio.</li>
              <li>Non-magnetic and biocompatible.</li>
              <li>Superior resistance to seawater and chemicals.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p>
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we deliver high-performance fasteners in 
              Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium.  
              Our products are built to meet global quality standards, ensuring reliability in the most demanding industries.  
              <span className="text-[#e0bc74] font-semibold">Trust NemrexIndustries for precision-engineered fastening solutions.</span>
            </p>
          </div>
        </div>

        {/* Right: Form (no shadow) */}
        <div className="bg-white w-full lg:w-[30%] h-auto p-6">
          <h2 className="text-2xl font-bold text-[#464A4D] mb-6 pb-2">
            Get In Touch
          </h2>

          <form onSubmit={(e) => submit(e)} className="space-y-8 form">
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="firstname" className="text-gray-600 font-medium peer-focus:text-[#e0bc74]">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="lastname" className="text-gray-600 font-medium peer-focus:text-[#e0bc74]">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="email" className="text-gray-600 font-medium peer-focus:text-[#e0bc74]">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="phonenumber" className="text-gray-600 font-medium peer-focus:text-[#e0bc74]">Phone Number</label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Enter your phone number"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-600 font-medium peer-focus:text-[#e0bc74]">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Write your message..."
                className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2 resize-none"
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

export default Fastners
