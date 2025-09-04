import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Pipes",
      description: "Smooth, durable pipes for high-pressure use.",
      img: "https://excelindustries.co/wp-content/uploads/2023/05/Group-7-1-770x475.jpg",
      link: "/pipestubes",
    },
    {
      id: 2,
      title: "Fasteners",
      description: "Strong bolts for heavy-duty fastening.",
      img: "https://excelindustries.co/wp-content/uploads/2023/05/Group-7-1.png",
      link: "/fastners",
    },
    {
      id: 3,
      title: "Flat Bars",
      description: "Premium flat bars with excellent tensile strength.",
      img: "https://excelindustries.co/wp-content/uploads/2023/05/Group-7-770x475.jpg",
      link: "/flatbars",
    },
    {
      id: 4,
      title: "Flanges",
      description: "Precision-engineered flanges for pipelines and machinery.",
      img: "https://excelindustries.co/wp-content/uploads/2023/05/20240624_192708-770x475.png",
      link: "/flanges",
    },
  ];

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl px-6 lg:px-12 xl:px-0 xl:ml-32">
        {/* Heading Section */}
        <h1 className="text-4xl md:text-5xl font-semibold font-sans text-black text-center md:text-left">
          Products
        </h1>
        <p className="text-[16px] md:text-[20px] text-black font-semibold font-sans mt-4 text-center md:text-left max-w-5xl">
          Nemrex Industries offers a wide range of premium-quality metal products designed to meet diverse industrial needs. From durable pipes and precision tubes to sturdy flanges and fittings, our products are crafted with advanced technology and strict quality standards. Each item ensures strength, accuracy, and long-lasting performance, making them ideal for construction, automotive, and manufacturing applications. We focus on innovation, reliability, and customer satisfaction, ensuring every product adds value. Choose Nemrex for trusted solutions that deliver excellence and durability in every project.
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full h-auto flex flex-col items-center rounded-2xl border border-gray-500 hover:bg-[#e0bc74] hover:text-black transition-colors duration-300"
            >
              <div className="bg-gray-300 rounded-2xl w-[80%] h-[200px] mt-6 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <h1 className="font-bold text-[20px] font-sans mt-4">{item.title}</h1>
              <div className="flex justify-center items-center w-[80%]">
                <p className="font-sans p-2 text-center">{item.description}</p>
              </div>
              <p
                onClick={() => navigate(item.link)}
                className="py-2 mb-4 font-mono flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                Explore More{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-black w-5 h-5"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;



