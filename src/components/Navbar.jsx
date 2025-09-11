import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function Navbar() {

  const [open,setOpen] = useState(false);
  const [showmenu,setShowmenu] = useState(false);

  const handleclick = () => {
    setOpen(!open)
  }

  const menuclick = () => {
    setShowmenu(!showmenu)
  }

  const navdisapear = () => {
    setShowmenu(false)
    setOpen(false)
  }

  return (
    <div className="bg-[#464A4D] h-[100px] flex justify-around relative">
      <div className=" w-70 flex items-center pl-2">
        <img className="h-12 w-16 sm:h-18 sm:w-25 object-contain mb-1" src="./logo.png" alt="logo-image" />
        <img className="h-16 w-24 sm:h-25 sm:w-37 object-contain" src="./logoText.png" alt="logo-image"/>
      </div>

      
      <div className=" justify-around px-3 gap-5 items-center text-white font-sans text-[20px] font-semibold tracking-wide hidden md:flex">
        <NavLink to="/" className={({isActive}) => isActive ? "navlink":""}>HOME</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "navlink":""}>ABOUT</NavLink>
        <div className="relative cursor-pointer">
          <div className="px-3 gap-4 items-center text-white font-sans text-[20px] font-semibold tracking-wide cursor-pointer flex" onClick={handleclick}>PRODUCTS <FontAwesomeIcon icon={faCaretDown} className={`text-white w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} /></div>
          <div className={`absolute bg-[#5a5f62] flex flex-col justify-center items-center w-[88%] z-50 rounded-md mt-2 ml-2 overflow-hidden ${open ? "max-h-120 opacity-100 transition-all duration-500" : "max-h-0 opacity-0 transition-all duration-0"}`}>
             <NavLink onClick={navdisapear} to="/flanges" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Flanges</NavLink>
             <NavLink onClick={navdisapear} to="/flatbars" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Flat Bars</NavLink>
             <NavLink onClick={navdisapear} to="/pipestubes" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Pipes/Tubes</NavLink>
             <NavLink onClick={navdisapear} to="/coilstrips" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Coil/Strips</NavLink>
             <NavLink onClick={navdisapear} to="/rodsbars" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Rods/Bars</NavLink>
             <NavLink onClick={navdisapear} to="/fastners" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Fastners</NavLink>
             <NavLink onClick={navdisapear} to="/buttweldfit" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Butt-Weld-Fit</NavLink>
             <NavLink onClick={navdisapear} to="/wirefillers" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Wire/Fillers</NavLink>
             <NavLink onClick={navdisapear} to="/sheetplate" className="px-4 py-2 hover:bg-[#6c7174] w-[100%] ">Sheet/Plate</NavLink>
          </div>
        </div>
        <NavLink to="/materials">MATERIALS</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "navlink":""}>CONTACT</NavLink>
      </div>
      <div className="w-20 items-center hidden md:flex">
        <img src="./call-logo.png" alt="call-logo" />
      </div>
      <div className="w-20  items-center flex md:hidden">
      <FontAwesomeIcon onClick={menuclick} icon={showmenu ? faXmark : faBars} className={`text-white ml-5 cursor-pointer ${showmenu ? "text-3xl" : "text-2xl"}`} />
      {/* <FontAwesomeIcon icon={faXmark} className="text-white text-3xl" /> */}
      </div>


      {/* mobile menu */}
      <div className={` ${!showmenu ? "hidden":"absolute w-[95%] min-h-[300px] mt-[100px] z-50"}`}>
        <div className="flex justify-around px-3 gap-5 items-center text-white font-sans text-[20px] font-semibold tracking-wide flex-col bg-[#464A4D] w-[100%] min-h-[500px] py-3 rounded rounded-t-none">
        <NavLink onClick={navdisapear} to="/" className={({isActive}) => isActive ? "navlink":""}>HOME</NavLink>
        <NavLink onClick={navdisapear} to="/about" className={({isActive}) => isActive ? "navlink":""}>ABOUT</NavLink>
        <div className="cursor-pointer">
          <div className="px-3 gap-4 items-center text-white font-sans text-[20px] font-semibold tracking-wide" onClick={handleclick}>PRODUCTS  <FontAwesomeIcon icon={faCaretDown} className={`text-white w-4 h-4 ${open ? "rotate-180" : "rotate-0"}`} /></div>
            <div className={` flex flex-col justify-center items-center w-[100%] bg-[#6c7174] z-50 rounded-md mt-2 ml-2 overflow-hidden ${open ? "max-h-120 opacity-100 transition-all duration-500" : "max-h-0 opacity-0 transition-all duration-0"}`}>
             <NavLink onClick={navdisapear} to="/flanges" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Flanges</NavLink>
             <NavLink onClick={navdisapear} to="/flatbars" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Flat Bars</NavLink>
             <NavLink onClick={navdisapear} to="/pipestubes" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Pipes/Tubes</NavLink>
             <NavLink onClick={navdisapear} to="/coilstrips" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Coil/Strips</NavLink>
             <NavLink onClick={navdisapear} to="/rodsbars" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Rods/Bars</NavLink>
             <NavLink onClick={navdisapear} to="/fastners" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Fastners</NavLink>
             <NavLink onClick={navdisapear} to="/buttweldfit" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Butt-Weld-Fit</NavLink>
             <NavLink onClick={navdisapear} to="/wirefillers" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Wire/Fillers</NavLink>
             <NavLink onClick={navdisapear} to="/sheetplate" className="px-4 py-2 hover:bg-[#5f6264] w-[100%] ">Sheet/Plate</NavLink>
           </div>
         </div>
            <NavLink onClick={navdisapear} to="/materials">MATERIALS</NavLink>
            <NavLink onClick={navdisapear} to="/contact" className={({isActive}) => isActive ? "navlink":""}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
