import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Contact() {
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
    <div className="min-h-screen w-full">
      {/* Top Banner */}
      <div className="h-[40vh] md:h-[50vh] w-full">
        <img
          src="https://www.samco.in/knowledge-center/wp-content/uploads/cache/2025/04/Metal-Sector-Advances-as-Steel-Import-Duty-Takes-Effect/1542723141.jpg"
          alt="formimg"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Map Section */}
      <div className="min-h-[60vh] md:h-[100vh] w-full">
        <div className="h-[20%] w-full flex justify-center items-center text-4xl md:text-6xl font-extrabold font-sarif py-6">
          <h1>
            Contact <span className="text-[#e0bc74]">Us</span>
          </h1>
        </div>
        <div className="h-[70vh] md:h-[80%] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.5030644694466!2d72.82488525176382!3d18.96420968056852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf15610634dd%3A0xe211fce8b7fdffd1!2sRajendra%20HEIGHTS!5e0!3m2!1sen!2sin!4v1756538367418!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="min-h-screen w-full bg-[#f9f9f9] py-10">
        <div className="w-full flex flex-col justify-center items-center gap-3 px-4 text-center">
          <h1 className="text-[#e0bc74] text-3xl md:text-4xl font-bold font-sarif">
            Contact Us
          </h1>
          <p className="font-sans text-lg md:text-2xl font-medium text-gray-600">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="w-[90%] lg:w-[84%] bg-white m-auto rounded-2xl flex flex-col lg:flex-row mt-8 shadow-md">
          {/* Left Section */}
          <div className="w-full lg:w-[40%] bg-[#e0bc74] flex justify-center items-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-6">
            <div className="w-full lg:w-[80%]">
              <h1 className="text-2xl md:text-4xl font-medium font-sans text-white">
                Contact Information
              </h1>
              <h2 className="text-lg md:text-2xl font-normal font-sans text-white mt-3">
                Say something to start a live chat!
              </h2>

              <div className="flex gap-4 items-center mt-6">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="text-white text-lg md:text-[21px]"
                />
                <p className="text-base md:text-lg font-sarif text-white">
                  +91 8369891317
                </p>
              </div>

              <div className="flex gap-4 items-center mt-6">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-lg md:text-[21px]"
                />
                <p className="text-base md:text-lg font-sarif text-white break-words">
                  nemrexindustries@gmail.com
                </p>
              </div>

              <div className="flex gap-4 items-start mt-6">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-white text-lg md:text-[21px] mt-1"
                />
                <p className="text-base md:text-lg font-sarif text-white leading-relaxed">
                  17th Floor, 1703, Rajendra Heights, 95/97 Shankar Pupala Road,
                  7th Lane Kamathipura, Mumbai - 400008, Maharashtra, India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[60%] p-6 flex justify-center items-center">
            <div className="w-full md:w-[80%]">
              <form className="form" onSubmit={(e) => submit(e)}>
                {/* First and Last Name */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                  <div className="flex flex-col gap-2 w-full md:w-64">
                    <label className="text-gray-500 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Enter your first name"
                      className="border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-64">
                    <label className="text-gray-500 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Enter your last name"
                      className="border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2 w-full"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 mt-8">
                  <div className="flex flex-col gap-2 w-full md:w-64">
                    <label className="text-gray-500 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-64">
                    <label className="text-gray-500 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phonenumber"
                      placeholder="Enter your phone number"
                      className="border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2 w-full"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 mt-8">
                  <label className="text-gray-500 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Write your message.."
                    className="border-0 border-b-2 border-gray-400 placeholder-gray-400 focus:border-[#e0bc74] focus:outline-none px-2 py-2 w-full resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <div className="flex justify-end mt-8">
                  <button
                    type="submit"
                    onClick={submitHandle}
                    className="bg-[#e0bc74] rounded-md w-40 md:w-[200px] h-12 text-white font-semibold font-sans text-lg md:text-[20px] flex justify-center items-center"
                  >
                    {submitbtn}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
