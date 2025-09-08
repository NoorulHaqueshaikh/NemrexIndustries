import React, { useState } from "react";

function PipesTubes() {
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
    ).then(()=> {
      formEle.reset();
    })
  }

  return (
    <div className="min-h-screen w-full m-auto">
      {/* Hero Section */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-white text-center px-2">
          PIPES/TUBES
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-[90%] lg:w-[84%] m-auto mt-12 mb-10">
        {/* Left Content */}
        <div className="w-full lg:w-[70%]">
          {/* Image */}
          <div className="h-auto lg:h-[600px] w-full">
            <img
              className="w-full h-full object-cover"
              src="https://excelindustries.co/wp-content/uploads/2023/05/Group-7-1-770x475.jpg"
              alt="pipestubes"
            />
          </div>

          {/* Description */}
          <div className="mt-6 text-justify leading-relaxed text-base sm:text-lg text-gray-800">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#464A4D] mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              PIPES / TUBES
            </h2>
            <p className="mb-6">
              At{" "}
              <span className="font-semibold text-[#e0bc74]">
                NemrexIndustries
              </span>
              , we supply a comprehensive range of
              <span className="text-[#e0bc74] font-medium">
                {" "}
                Pipes and Tubes
              </span>{" "}
              designed for critical industrial applications. Our offerings
              include seamless, welded, ERW, and fabricated pipes & tubes in
              round, square, and rectangular shapes. Materials include{" "}
              <span className="text-[#e0bc74] font-medium">
                Stainless Steel, Inconel, Monel, Nickel, Hastelloy, Duplex, and
                Titanium
              </span>
              , ensuring strength, durability, and superior performance.
            </p>

            {/* Sections */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#464A4D] mt-8 mb-3">
              1. Stainless Steel Pipes & Tubes
            </h3>
            <p className="mb-3">
              Available in grades 304, 316, 321, and 310. Offered in seamless
              and welded types, widely used in chemical, food processing, and
              marine industries.
            </p>
            <ul className="list-disc ml-6 sm:ml-8 space-y-1 text-gray-700">
              <li>
                <span className="font-semibold text-[#e0bc74]">
                  Corrosion Resistance:
                </span>{" "}
                Excellent protection in harsh environments.
              </li>
              <li>
                <span className="font-semibold text-[#e0bc74]">Strength:</span>{" "}
                Withstands high pressures and temperatures.
              </li>
              <li>
                <span className="font-semibold text-[#e0bc74]">Hygienic:</span>{" "}
                Ideal for food, beverage, and pharmaceutical use.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-[#464A4D] mt-8 mb-3">
              2. Inconel Pipes & Tubes
            </h3>
            <p className="mb-3">
              Known for their ability to handle extreme environments, Inconel
              pipes & tubes are widely used in aerospace, chemical, and oil &
              gas industries.
            </p>
            <ul className="list-disc ml-6 sm:ml-8 space-y-1 text-gray-700">
              <li>Outstanding high-temperature strength.</li>
              <li>Resistant to oxidation and scaling.</li>
              <li>Performs in highly corrosive conditions.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-[#464A4D] mt-8 mb-3">
              3. Monel Pipes & Tubes
            </h3>
            <p className="mb-3">
              Nickel-copper alloy pipes & tubes (Monel 400, K-500) designed for
              superior resistance in marine and chemical processing industries.
            </p>
            <ul className="list-disc ml-6 sm:ml-8 space-y-1 text-gray-700">
              <li>Excellent resistance in seawater and acidic conditions.</li>
              <li>High mechanical strength under stress.</li>
              <li>Long-lasting and reliable for offshore use.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-[#464A4D] mt-8 mb-3">
              4. Nickel Pipes & Tubes
            </h3>
            <p className="mb-3">
              Valued for their high resistance to heat and corrosion. Extensively
              used in aerospace, marine, and power generation.
            </p>
            <ul className="list-disc ml-6 sm:ml-8 space-y-1 text-gray-700">
              <li>Good thermal and electrical conductivity.</li>
              <li>Durable under fluctuating temperatures.</li>
              <li>Trusted in harsh industrial environments.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-[#464A4D] mt-8 mb-3">
              5. Hastelloy Pipes & Tubes
            </h3>
            <p className="mb-3">
              Designed to handle highly corrosive media, Hastelloy pipes & tubes
              are widely used in chemical plants, pollution control, and
              aerospace.
            </p>
            <ul className="list-disc ml-6 sm:ml-8 space-y-1 text-gray-700">
              <li>Resistant to pitting and stress corrosion cracking.</li>
              <li>Performs in oxidizing and reducing environments.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-[#464A4D] mt-8 mb-3">
              6. Duplex & Super Duplex Pipes & Tubes
            </h3>
            <p className="mb-3">
              Offering the strength of ferritic steels and corrosion resistance
              of austenitic steels, these pipes & tubes are ideal for offshore,
              marine, and oil & gas industries.
            </p>
            <ul className="list-disc ml-6 sm:ml-8 space-y-1 text-gray-700">
              <li>
                Superior corrosion resistance in seawater and chlorides.
              </li>
              <li>High tensile strength for demanding applications.</li>
              <li>Low thermal expansion and good weldability.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-[#464A4D] mt-8 mb-3">
              7. Titanium Pipes & Tubes
            </h3>
            <p className="mb-3">
              Lightweight, durable, and highly resistant to corrosion. Commonly
              used in aerospace, marine, and chemical industries.
            </p>
            <ul className="list-disc ml-6 sm:ml-8 space-y-1 text-gray-700">
              <li>Exceptional strength-to-weight ratio.</li>
              <li>Excellent seawater resistance.</li>
              <li>Performs reliably in critical environments.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p>
              At{" "}
              <span className="font-semibold text-[#e0bc74]">
                NemrexIndustries
              </span>
              , we supply premium-grade Pipes and Tubes across Stainless Steel,
              Inconel, Monel, Nickel, Hastelloy, Duplex, and Titanium. Our
              products are engineered to meet global standards and cater to
              diverse industries.{" "}
              <span className="text-[#e0bc74] font-semibold">
                Choose NemrexIndustries for reliability, durability, and
                precision engineering.
              </span>
            </p>
          </div>
        </div>

        {/* Right Content (Form) */}
        <div className="bg-white w-full lg:w-[30%] h-auto p-6  ">
          <h2 className="text-xl sm:text-2xl font-bold text-[#464A4D] mb-6">
            Get In Touch
          </h2>

          <form onSubmit={(e) => submit(e)} className="space-y-6 sm:space-y-8">
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                <label
                  htmlFor="firstname"
                  className="text-gray-600 font-medium peer-focus:text-[#e0bc74]"
                >
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
                <label
                  htmlFor="lastname"
                  className="text-gray-600 font-medium peer-focus:text-[#e0bc74]"
                >
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
                <label
                  htmlFor="email"
                  className="text-gray-600 font-medium peer-focus:text-[#e0bc74]"
                >
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
                <label
                  htmlFor="phonenumber"
                  className="text-gray-600 font-medium peer-focus:text-[#e0bc74]"
                >
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
              <label
                htmlFor="message"
                className="text-gray-600 font-medium peer-focus:text-[#e0bc74]"
              >
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

export default PipesTubes;
