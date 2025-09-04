import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#464A4D] w-full">
      {/* Top Section */}
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between gap-10 border-b border-white py-10">
        
        {/* Logo + About */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <img className="h-[80px]" src="/logo.png" alt="logo" />
          <p className="text-white text-sm sm:text-base">
            Trusted partner in metals, delivering quality, durability, and innovation. Supporting industries worldwide with reliable solutions for growth and success.
          </p>
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faSquareInstagram} className="text-white text-2xl cursor-pointer hover:text-[#e0bc74]" />
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl cursor-pointer hover:text-[#e0bc74]" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl cursor-pointer hover:text-[#e0bc74]" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-xl text-[#e0bc74] mb-3">Quick Links</h1>
          <div className="flex flex-col gap-2 text-white text-sm sm:text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Products</NavLink>
            <NavLink to="/materials">Materials</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        {/* Products */}
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-xl text-[#e0bc74] mb-3">Our Products</h1>
          <div className="flex flex-col gap-2 text-white text-sm sm:text-base">
            <p>Structural Steel</p>
            <p>Stainless Steel Sheets</p>
            <p>Aluminum Alloys</p>
            <p>Metal Pipes & Tubes</p>
            <p>Industrial Fasteners</p>
          </div>
        </div>

        {/* Contact */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-xl text-[#e0bc74] mb-3">Contact Us</h1>
          <div className="flex flex-col gap-3 text-white text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-lg" />
              <p>+91 8369891317</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              <p>nemrexindustries@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              <p>Mumbai, Maharashtra, India</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-lg" />
              <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-4 text-center text-white text-sm flex flex-col sm:flex-row justify-center sm:justify-between px-4 xl:justify-center xl:items-center xl:flex-col">
        <p>© 2025 Nemrex Industries | All Rights Reserved</p>
        <p>Built with ❤️ by<a className="text-blue-300" target="_blank" href="https://www.linkedin.com/in/noorul-haque-shaikh-7a33942b7"> Noorul Haque Shaikh</a></p>
      </div>
    </footer>
  );
}

export default Footer;
