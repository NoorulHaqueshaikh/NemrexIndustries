import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What types of metals do you supply?",
      a: "We supply a wide range of metals including stainless steel, carbon steel, aluminum, brass, copper, and other alloys used across construction, automotive, and manufacturing industries."
    },
    {
      q: "Do you provide customized metal fabrication services?",
      a: "Yes, we offer customized fabrication solutions such as cutting, welding, bending, and finishing to meet the specific requirements of our clients."
    },
    {
      q: "How do you ensure the quality of your metals?",
      a: "All our metals undergo strict quality checks, including tensile strength testing, corrosion resistance evaluation, and compliance with international standards like ASTM, IS, and DIN."
    },
    {
      q: "What industries do you serve?",
      a: "We serve a variety of industries including construction, infrastructure, automotive, aerospace, oil & gas, and heavy machinery manufacturing."
    },
    {
      q: "Do you offer bulk supply and delivery services?",
      a: "Yes, we provide bulk metal supplies with reliable logistics support, ensuring on-time delivery to clients both domestically and internationally."
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center px-4 py-12 gap-8">
      {/* Heading */}
      <div className="max-w-3xl text-center">
        <h1 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl text-[#e0bc74] mb-4">
          FAQs
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
          Find answers to some of the most commonly asked questions about our metal products,
          fabrication services, and industry expertise.
        </p>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-5xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-3"
          >
            <div
              className="flex justify-between items-center p-2 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h1 className="font-bold font-serif text-lg sm:text-xl md:text-2xl">
                <span className="font-medium text-base sm:text-lg md:text-xl mr-2">
                  {index + 1}.
                </span>
                {faq.q}
              </h1>
              <FontAwesomeIcon
                icon={openIndex === index ? faMinus : faPlus}
                className="text-black text-lg sm:text-xl md:text-2xl"
              />
            </div>
            {openIndex === index && (
              <p className="w-full md:w-[90%] px-2 py-2 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
