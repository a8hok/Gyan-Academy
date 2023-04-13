import React from "react";

function CourseHeader() {
  return (
    <div>
      {" "}
      <div className="flex font-medium text-[#18191F] flex-row mt-[24px] w-[1162px] border-b-[1px] border-gray-400 h-[40px]
         md:border-b-[1px] md:w-[764px] md:font-semibold
         xl:w-[955px] xl:font-semibold
         sl:w-[100%] sl:text-[12px] sl:mt-[10px] sl:h-[35px] sl:mr-[38px] sl:font-semibold
         sm:w-[100%] sm:text-[12px] sm:mt-[10px] sm:h-[35px] sm:mr-[38px] sm:font-semibold">
        {["Most Popular"].map((obj ,index) => (
          <div key={index} className="flex sm:gap-[25px]">
            <span className="ml-12 h-full border-b-[3px] border-[#9D1C7F] p-[5px] text-[#9D1C7F] xl:ml-8 sm:ml-0 sl:ml-0">
              <h3>{obj}</h3>
            </span>
            {/* <span className="ml-12 h-full p-[5px] sm:ml-0 ">
              <h3>Highly Rated</h3>
            </span>
            <span className="ml-12 h-full p-[5px] sm:ml-0 ">
              <h3>New</h3>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseHeader;
