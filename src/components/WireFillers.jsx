import React, { useState } from 'react'

function WireFillers() {
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
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className="text-4xl md:text-5xl font-bold font-sans text-white text-center">
          WIRE / FILLERS
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10 w-[90%] md:w-[84%] m-auto my-12">
        {/* Left Content */}
        <div className="w-full lg:w-[70%]">
          {/* Image */}
          <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <img
              className="w-full h-full object-cover"
              src="https://excelindustries.co/wp-content/uploads/2023/05/Group-7-2-770x475.png"
              alt="wires-fillers"
            />
          </div>

          {/* Full Text Content */}
          <div className="mt-6 text-gray-800 text-lg leading-relaxed text-justify">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#464A4D] mt-6 mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              WIRE / FILLERS
            </h2>
            <p className="mb-6">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we provide a comprehensive range of 
              <span className="text-[#e0bc74] font-medium"> wires and filler materials</span> designed for welding, fabrication, 
              and specialized industrial applications. Our product line includes stainless steel, nickel alloys, inconel, monel, 
              hastelloy, duplex, and titanium wires & fillers. These products ensure high strength, smooth welding, corrosion 
              resistance, and reliable performance across industries such as oil & gas, chemical, power, and marine.
            </p>

            {/* Sections */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">1. Stainless Steel Wire / Fillers</h3>
            <p className="mb-3">Available in grades 304, 308, 316, and 347. Widely used for welding stainless steel pipes and equipment, ensuring strong and clean welds.</p>
            <ul className="list-disc ml-8 space-y-1">
              <li><span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Excellent against rust and oxidation.</li>
              <li><span className="font-semibold text-[#e0bc74]">High Weldability:</span> Smooth and clean welding results.</li>
              <li><span className="font-semibold text-[#e0bc74]">Strength:</span> Reliable for structural and pressure applications.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">2. Inconel Wire / Fillers</h3>
            <p className="mb-3">Designed for high-temperature welding, Inconel wires provide superior oxidation and scaling resistance. Commonly used in aerospace and chemical plants.</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Exceptional performance at elevated temperatures.</li>
              <li>Prevents cracking during stress conditions.</li>
              <li>Resistant to aggressive chemical environments.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">3. Monel Wire / Fillers</h3>
            <p className="mb-3">Made from Monel 400 and K-500 alloys, these wires are best suited for marine and saltwater welding applications due to their nickel-copper composition.</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Superior resistance to seawater and brine.</li>
              <li>Good toughness across a wide temperature range.</li>
              <li>Reliable weld strength in marine environments.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">4. Nickel Wire / Fillers</h3>
            <p className="mb-3">Nickel filler wires are ideal for welding in harsh chemical and reducing environments. Used in power generation and chemical processing industries.</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Excellent thermal and electrical conductivity.</li>
              <li>High strength for industrial welding applications.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">5. Hastelloy Wire / Fillers</h3>
            <p className="mb-3">Designed to resist strong oxidizers, acids, and corrosive agents. Perfect for welding in chemical plants and pollution control equipment.</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Prevents pitting and stress corrosion cracking.</li>
              <li>Strong weld integrity under extreme conditions.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">6. Duplex Wire / Fillers</h3>
            <p className="mb-3">Duplex wires combine the strength of ferritic and corrosion resistance of austenitic alloys, making them ideal for offshore, petrochemical, and power plants.</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>High resistance to chloride stress cracking.</li>
              <li>Excellent weldability and durability.</li>
              <li>Suitable for seawater and oil & gas applications.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">7. Titanium Wire / Fillers</h3>
            <p className="mb-3">Lightweight and corrosion resistant, titanium filler wires are used in aerospace, marine, and chemical applications for critical welds.</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>High strength-to-weight ratio.</li>
              <li>Excellent performance in seawater.</li>
              <li>Non-magnetic and biocompatible.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p>
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, our wires and filler materials deliver 
              superior weld quality, durability, and corrosion resistance. From stainless steel to titanium, our solutions support industries worldwide.  
              <span className="text-[#e0bc74] font-semibold"> Choose NemrexIndustries for unmatched welding excellence.</span>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white w-full lg:w-[30%] h-auto p-6 ">
          <h2 className="text-2xl font-bold text-[#464A4D] mb-6">Get In Touch</h2>
          <form onSubmit={(e) => submit(e)} className="space-y-8 form">
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="firstname" className="text-gray-600 font-medium">First Name</label>
                <input type="text" name="firstname" id="firstname" placeholder="Enter your first name" className="border-b-2 border-gray-400 focus:border-[#e0bc74] outline-none px-2 py-2" />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="lastname" className="text-gray-600 font-medium">Last Name</label>
                <input type="text" name="lastname" id="lastname" placeholder="Enter your last name" className="border-b-2 border-gray-400 focus:border-[#e0bc74] outline-none px-2 py-2" />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="email" className="text-gray-600 font-medium">Email</label>
                <input type="text" name="email" id="email" placeholder="Enter your email" className="border-b-2 border-gray-400 focus:border-[#e0bc74] outline-none px-2 py-2" />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="phonenumber" className="text-gray-600 font-medium">Phone Number</label>
                <input type="text" name="phonenumber" id="phonenumber" placeholder="Enter your phone number" className="border-b-2 border-gray-400 focus:border-[#e0bc74] outline-none px-2 py-2" />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-600 font-medium">Message</label>
              <textarea name="message" id="message" rows="4" placeholder="Write your message..." className="border-b-2 border-gray-400 focus:border-[#e0bc74] outline-none px-2 py-2 resize-none"></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button type="submit" onClick={submitHandle} className="bg-[#e0bc74] hover:bg-[#d1a95d] transition w-[200px] h-[50px] text-white font-semibold text-lg flex items-center justify-center">
                {submitbtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WireFillers;
