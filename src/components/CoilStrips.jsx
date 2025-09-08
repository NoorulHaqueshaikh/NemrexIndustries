import React, { useState } from 'react'

function CoilStrips() {
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
    }).then(()=> {
      formEle.reset();
    })
  }

  return (
    <div className="min-h-screen w-[100%] m-auto">
      {/* Banner */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-[100%] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-white text-center">
          COIL/STRIPS
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-[84%] m-auto mt-35 mb-10">
        {/* Left: Image + Content */}
        <div className="w-full lg:w-[70%] h-[100%]">
          <div className="h-auto lg:h-[600px] w-[100%]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://www.jainexsteel.com/images/resource/420-stainless-steel-strip.jpg"
              alt="coilstrips"
            />
          </div>

          <div className="text-justify leading-relaxed text-lg text-gray-800">
            {/* Main Heading */}
            <h2 className="text-4xl font-extrabold text-[#464A4D] mt-6 mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              COILS / STRIPS
            </h2>
            <p className="mb-6">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we supply a premium range of
              <span className="text-[#e0bc74] font-medium"> Coils and Strips</span> used across multiple industries including
              construction, automotive, shipbuilding, oil & gas, and manufacturing.&nbsp;
              Our products are available in hot rolled, cold rolled, precision, and custom finishes in materials such as
              <span className="text-[#e0bc74] font-medium"> Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium</span>.&nbsp;
              These products are manufactured to meet international standards, ensuring excellent quality and performance.
            </p>

            {/* 1. Stainless */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">1. Stainless Steel Coils & Strips</h3>
            <p className="mb-3">
              Available in grades 304, 316, 321, and 410. Offered in hot rolled and cold rolled options,
              widely used in kitchen equipment, chemical, and marine applications.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li><span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Protects against oxidation and chemicals.</li>
              <li><span className="font-semibold text-[#e0bc74]">Surface Finish:</span> Available in polished, matte, and brushed textures.</li>
              <li><span className="font-semibold text-[#e0bc74]">Formability:</span> Easy to fabricate and machine for multiple uses.</li>
            </ul>

            {/* 2. Inconel */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">2. Inconel Coils & Strips</h3>
            <p className="mb-3">
              Designed to withstand extreme temperatures and corrosive conditions.&nbsp;
              Commonly used in aerospace, nuclear plants, and chemical industries.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Excellent heat resistance in demanding environments.</li>
              <li>Outstanding protection against oxidation and scaling.</li>
              <li>Durable for long-term industrial performance.</li>
            </ul>

            {/* 3. Monel */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">3. Monel Coils & Strips</h3>
            <p className="mb-3">
              Nickel-copper alloy coils & strips (Monel 400, K-500) known for high resistance to seawater and acidic environments.&nbsp;
              Widely used in marine engineering and chemical processing.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Superior strength in saltwater applications.</li>
              <li>High durability under fluctuating temperatures.</li>
              <li>Good weldability for fabrication.</li>
            </ul>

            {/* 4. Nickel */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">4. Nickel Coils & Strips</h3>
            <p className="mb-3">
              Nickel coils and strips are highly valued for their conductivity and
              corrosion resistance. Used in aerospace, marine, and electronics industries.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Good electrical and thermal conductivity.</li>
              <li>Reliable in high-temperature applications.</li>
              <li>Long service life with minimal degradation.</li>
            </ul>

            {/* 5. Hastelloy */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">5. Hastelloy Coils & Strips</h3>
            <p className="mb-3">
              Developed for use in aggressive chemical environments.&nbsp;
              Excellent resistance to pitting, stress corrosion, and oxidation.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Reliable in acidic and oxidizing media.</li>
              <li>Highly durable under mechanical stress.</li>
            </ul>

            {/* 6. Duplex */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">6. Duplex & Super Duplex Coils & Strips</h3>
            <p className="mb-3">
              Known for excellent mechanical strength and corrosion resistance.&nbsp;
              Ideal for oil & gas, marine, and construction sectors.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Resistant to stress corrosion cracking.</li>
              <li>High strength with reduced weight.</li>
              <li>Performs well in chloride-rich environments.</li>
            </ul>

            {/* 7. Titanium */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">7. Titanium Coils & Strips</h3>
            <p className="mb-3">
              Lightweight and corrosion-resistant, Titanium coils & strips are widely used in aerospace,
              chemical, and medical industries for their unique properties.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>Excellent strength-to-weight ratio.</li>
              <li>Superior corrosion resistance in seawater.</li>
              <li>Trusted for critical industrial applications.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p>
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we deliver a wide range of Coils and Strips
              crafted from premium alloys like Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium.&nbsp;
              Our products meet the highest standards of durability, performance, and precision.&nbsp;
              <span className="text-[#e0bc74] font-semibold">Partner with NemrexIndustries for reliable coil and strip solutions worldwide.</span>
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
                <label htmlFor="firstname" className="text-gray-600 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74] px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="lastname" className="text-gray-600 font-medium">Last Name</label>
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
                <label htmlFor="email" className="text-gray-600 font-medium">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74] px-2 py-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label htmlFor="phonenumber" className="text-gray-600 font-medium">Phone Number</label>
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
              <label htmlFor="message" className="text-gray-600 font-medium">Message</label>
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
                className="bg-[#e0bc74] hover:bg-[#d1a95d] transition rounded-lg w-full sm:w-[200px] h-[50px] text-white font-semibold text-lg flex items-center justify-center"
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

export default CoilStrips

