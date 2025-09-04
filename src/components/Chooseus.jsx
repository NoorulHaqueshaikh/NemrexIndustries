import React from "react";

function Chooseus() {
  const cards = [
    {
      title: "High-Quality Materials",
      description:
        "We use premium-grade metals and alloys to ensure durability, strength, and long-lasting performance in all our products.",
      img: "chooseimg1.png",
    },
    {
      title: "Advanced Manufacturing",
      description:
        "Our state-of-the-art manufacturing process guarantees precision, accuracy, and consistent quality in every product.",
      img: "chooseimg2.png",
    },
    {
      title: "Experienced Team",
      description:
        "Our skilled engineers and technicians bring years of expertise to deliver the best solutions tailored to your needs.",
      img: "chooseimg3.png",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We prioritize our clients’ requirements, providing reliable service, timely delivery, and complete project support.",
      img: "chooseimg4.png",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-sans text-black text-center">
          Why <span className="text-[#e0bc74]">Choose</span> US?
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-black text-center max-w-4xl leading-relaxed">
          At Nemrex Industries, we are committed to providing high-quality metal solutions for construction, 
          manufacturing, and industrial applications. Our focus is on precision, reliability, and customer satisfaction.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 w-full">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl flex flex-col items-center p-6 h-auto hover:scale-105 transition-transform duration-300"
            >
              <div className="w-[80%] flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 object-contain"
                />
              </div>
              <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl font-sans mt-4 text-center">
                {item.title}
              </h1>
              <p className="text-center font-serif font-medium mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chooseus;


