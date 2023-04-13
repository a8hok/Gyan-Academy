import React from "react";
import { useLocation } from "react-router-dom";
//components
import Search from "../../Components/Search";
import HeaderBanner from "../../Components/HeaderBanner";
import BackNavigation from "../../Components/BackNavigation";
import CourseCardContainer from "../../Components/CourseCardContainer";
import CourseHeader from "../../Components/CourseHeader";
//asserts
import bgImg from "./asserts/Banner.svg";

function CoursePage() {
  const passedData = useLocation();
  return (
    <div>
      <div>
        <HeaderBanner bgImg={bgImg} BannerText="JavaScript" />
      </div>
      <div className="flex flex-col justify-center items-center w-screen">
        <div>
          <BackNavigation navigation={"Course Library"} />
        </div>
        <div>
          <Search />
        </div>
        <div className="sm:w-[100%] sm:mt-[10px] ">
          <CourseHeader />
          <CourseCardContainer courseList={passedData.state} />
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
