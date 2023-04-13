import React from "react";
//components
import GetStarted from "./GetStarted";
import CourseCard from "./CourseCard";

const CardContainer = (props) => {
  return (
    <div className="bg-gradient-to-b from-[#E1F3FF] to-[#E4D7FF] w-screen ">
      <div className="flex flex-row  justify-center mt-[0px] md:flex-col sm:flex-col sl:flex-col xl:flex-col ">
        <div>
          <CourseCard courseList={props.courseList} />
        </div>
        <div>
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
