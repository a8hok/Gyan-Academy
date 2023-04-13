import React from "react";
import { useNavigate } from "react-router-dom";

import courses from "./JSON/data.json";
courses = courses.courses;
const CourseLibraryCard = () => {
  const Navigate = useNavigate();
  const handelPages = (courseAvailable) => {
    Navigate("/course/list", { state: courseAvailable });
  };
 
  return (
    <div>
      <div className="flex justify-center bg-gradient-to-b from-[#E1F3FF] to-[#E4D7FF]">
        <div className="w-[1440px] pb-32 flex-wrap gap-14 flex items-center justify-center 
        md:gap-[19px] md:pt-[25px] 
        xl:pt-[25px] 
        sl:gap-5 sl:w-[720px]
        sm:gap-4">
          {courses.length > 0 &&
            courses.map((obj,key) => (
              <div key={key} className="pt-[55px] md:pt-[15px] xl:pt-[10px] sm:pt-[25px] sl:pt-[25px]">
                <div className="w-[356px] h-[236px] shadow-md shadow-gray-300 bg-white rounded-[25px] xl:w-[430px] sm:w-[287px] sl:items-center justify-center">
                  <div
                    className="z-0 relative w-[356px] h-[145px] text-white rounded-t-[25px] xl:w-[430px] sm:w-[287px]"
                    style={{
                      backgroundImage: `url(${require("./Image/" +
                        obj.picture +
                        ".png")})`,
                    }}
                  >
                    <div
                      className="z-10 absolute mt-[30px] ml-[30px] w-[3px] h-[22px] border-l-[4px] xl:w-[430px] sm:mt-[26px]"
                      style={{ borderColor: `${obj.color}` }}
                    ></div>
                    <h3 className="absolute z-50  pl-[46px] pt-[24px] gap-10 text-[24px] font-bold sm:text-[18px]">
                      {obj.title}
                    </h3>
                    <p className="absolute z-50 pl-[33px] pt-[77px] text-[14px] font-semibold  xl:w-[350px] xl:text-[14px] sm:w-[269px] sm:h-[36px] sm:text-[12px]">
                      {obj.description}
                    </p>
                    <div className="absolute top-0 bg-gradient-to-b from-[#0E0E0E] to-[#5B5B5BA1] w-[356px] h-[145px] rounded-t-[25px] xl:w-[430px] sm:w-[287px]"></div>
                  </div>
                  <div
                    className="flex justify-center mt-[29px] text-[14px] font-semibold sm:text-[12px]"
                    style={{ color: `${obj.color}` }}
                  >
                    <button
                      onClick={() => handelPages(obj.courseAvailable)}
                      className="border-[2px] w-[174px] h-[42px] rounded-[25px] shadow-md xl:flex justify-center items-center sm:w-[136px] sm:h-[35px]"
                      style={{ borderColor: `${obj.color}` }}
                    >
                      Start
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLibraryCard;
