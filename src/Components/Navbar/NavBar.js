import React from "react";
import { useNavigate } from "react-router-dom";
import Example from "./DropdownMenu";
//asserts
import Logo from "../Image/Logo.png";

function Header() {
  const Navigate = useNavigate();
  const handelHomePage = () => {
    Navigate("/");
  };
  return (
    <div>
      <div className="justify-between items-center w-screen h-[72px] shadow-header_box flex pl-[147px] md:pl-[36px] sl:h-[36px] sl:pl-[17px] sm:h-[36px] sm:pl-[17px] xl:pl-[90px] ">
        <div className="flex items-center justify-center sl:pt-[4px] sm:pt-[4px]">
          <img
            alt="img"
            src={Logo}
            className="pr-3 sl:pr-[5px] sl:h-[20px] sm:pr-[5px] sm:h-[20px]"
          />
          <div
            onClick={handelHomePage}
            className="flex gap-2 cursor-pointer font-bold text-[24.69px] md:text-[20px] sl:text-[17px] sl:gap-1 sm:text-[12px] sm:gap-1  "
          >
            <p className=" text-[#9D1C7F]">Gyan</p>
            <p className=" text-[#2B2A85]">Academy</p>
          </div>
        </div>
        <div className="flex sl:gap-[10px] items-center sm:gap-[10px] sm:hidden">
          <div className="pt-[23px] pb-[22px] pr-[30px] text-[16.46px] text-[#2B2A85] md:pr-[30px] md:text-[14px] sl:text-[12px] sl:pt-0 sl:pb-0 sl:pr-[0px]  sm:text-[10px] sm:pr-[0px]">
            <ul className="flex gap-[30px] md:gap-[27px] sl:gap-[10px] sm:gap-[20px] ">
              <a className="sl:h-[13px] sm:h-[13px]" href="/course">
                BootCamps
              </a>
              <a className="sl:h-[13px] sm:h-[13px]" href="/gallery">
                Gallery
              </a>
              {/* <a className="sm:h-[12px] sm:w-[93px]" href="">Learning Path</a>
              <a className="sm:h-[12px] sm:w-[51px]" href="">Pricing</a>
              <a className="sm:h-[12px] sm:w-[43px]" href="">About</a> */}
            </ul>
          </div>
          <div className="mr-[130px] md:mr-[70px] sl:mr-[16px] sm:mr-[16px] xl:mr-[100px]">
            <a
              href="https://gyanmatrix.com/contact-us/"
              className="text-[16px] font-bold bg-gradient-to-b from-[#282B85] to-[#9A1D80] text-white px-[22px] py-[10px] rounded-[6px]
            sl:text-[9px] sl:px-[10px] sl:py-[5px] sl:rounded-[3px] sm:text-[9px] sm:px-[10px] sm:py-[5px] sm:rounded-[3px]"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="  hidden sm:block">
          <Example />
        </div>
      </div>
    </div>
  );
}

export default Header;
