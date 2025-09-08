import { useState } from "react";

function Flatbars() {
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
      {/* Banner */}
      <div className='bg-[url("https://www.shutterstock.com/image-illustration/neon-laser-blue-white-led-260nw-2019069074.jpg")] h-[250px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <h1 className="text-5xl font-bold font-sans text-white">FLAT BARS</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-[90%] lg:w-[84%] m-auto mt-10 mb-10">
        {/* Left Content */}
        <div className="w-full lg:w-[70%]">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full">
            <img
              className="w-full h-full object-cover"
              src="https://excelindustries.co/wp-content/uploads/2023/05/Group-7-770x475.jpg"
              alt="flatbars"
            />
          </div>

          <div className="text-justify leading-relaxed text-lg text-gray-800">
            <h2 className="text-4xl font-extrabold text-[#464A4D] mt-6 mb-4 border-b-4 border-[#e0bc74] inline-block pb-1">
              FLAT BARS
            </h2>

            <p className="mb-6">
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we specialize in delivering
              high-quality <span className="text-[#e0bc74] font-medium">Flat Bars</span> designed for a wide range of
              industries including construction, fabrication, shipbuilding, railways, and general engineering. Our flat
              bars are manufactured from premium materials such as
              <span className="text-[#e0bc74] font-medium"> Stainless Steel, Mild Steel, Carbon Steel, Alloy Steel, and Duplex</span>,
              ensuring durability, strength, and reliability.
            </p>

            {/* Example of sections (same as yours) */}
            <h3 className="text-2xl font-bold text-[#464A4D] mt-8 mb-3">1. Stainless Steel Flat Bars</h3>
            <p className="mb-3">
              Available in grades 304, 316, and 321. These bars are corrosion-resistant and widely used in
              architectural, marine, and industrial applications.
            </p>
            <ul className="list-disc ml-8 space-y-1 text-gray-700">
              <li>
                <span className="font-semibold text-[#e0bc74]">Corrosion Resistance:</span> Protects against rust and
                oxidation.
              </li>
              <li>
                <span className="font-semibold text-[#e0bc74]">Strength:</span> High tensile and yield strength for long
                service life.
              </li>
              <li>
                <span className="font-semibold text-[#e0bc74]">Versatility:</span> Ideal for fabrication and structural
                use.
              </li>
            </ul>

            {/* (Keep other headings + lists same as your original) */}

            <h2 className="text-3xl font-extrabold text-[#464A4D] mt-10 mb-3 border-t-2 border-[#e0bc74] pt-3">
              Conclusion
            </h2>
            <p>
              At <span className="font-semibold text-[#e0bc74]">NemrexIndustries</span>, we provide premium-quality Flat
              Bars in Stainless Steel, Mild Steel, Carbon Steel, Alloy Steel, and Duplex. Our flat bars are engineered to
              meet international standards and cater to diverse industrial needs.{" "}
              <span className="text-[#e0bc74] font-semibold">
                Trust NemrexIndustries for reliability, durability, and excellence in every product.
              </span>
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white w-full lg:w-[30%] h-auto p-6">
          <h2 className="text-2xl font-bold text-[#464A4D] mb-6 pb-2">Get In Touch</h2>

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
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-500
                  focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                  px-2 py-3 leading-normal w-full"
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
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-500
                  focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                  px-2 py-3 leading-normal w-full"
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
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-500
                  focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                  px-2 py-3 leading-normal w-full"
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
                  className="peer border-0 border-b-2 border-gray-400 placeholder-gray-500
                  focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                  px-2 py-3 leading-normal w-full"
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
                className="peer border-0 border-b-2 border-gray-400 placeholder-gray-500
                focus:border-[#e0bc74] focus:outline-none focus:placeholder-[#e0bc74]
                px-2 py-3 leading-normal resize-none w-full"
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

export default Flatbars;
