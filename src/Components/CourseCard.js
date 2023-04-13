import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import preview from "../GyanAcademyPages/coursePage/asserts/preview.png";
import profile from "../GyanAcademyPages/coursePage/asserts/tutorProfile.png";
import ratings from "../GyanAcademyPages/coursePage/asserts/star.png";

const CourseCard = (props) => {
  const Navigate = useNavigate();
  const courseList = props.courseList;

  const handelCourseVideo = (
    tasks,
    tutor,
    description,
    ratings,
    title,
    learningTags
  ) => {
    Navigate("/course/content", {
      state: {
        courseLists: courseList,
        tasks: tasks,
        learningTags: learningTags,
        tutor: tutor,
        description: description,
        ratings: ratings,
        title: title,
      },
    });
  };

  return (
    <div className="sm:w-[100%] sl:w-[480px] xl:w-[1025px] flex flex-col items-center justify-center">
      <div className=" max-h-[1515px] w-[800px] flex flex-col justify-center overflow-y-scroll no-scrollbar md:w-[760px] sm:w-[100%] sl:w-[100%] xl:w-[100%] ">
        {courseList?.length > 0 &&
          courseList.map((obj,key) => (
            <div key={`index=${key}`} className="flex flex-row max-w-[760px] h-[280px] drop-shadow-xl bg-[#FFFFFF] rounded-[25px] my-[50px] md:w-[760px] sm:w-[100%] sm:flex-col  sm:mt-[100px] sm:h-[5%] sm:mt[10%] sl:flex-col sl:w-[480px] sl:h-[100%] sl:p-[10px] sl:pl-[10px] xl:ml-[13%]">
              <img
                src={preview}
                className="p-[24px] sm:h-[270px] sm:p-[9px] sm:w-[100%] sl:w-[400px] sl:h-[300px] sl:ml-[30px]"
                alt="img"
              />
              <div className="flex flex-col justify-between p-[24px]">
                <h2 className="border-l-[4px] border-[#9D1C7F] pl-[7px] text-[20px] font-semibold sm:h-[40px] sm:mt-[15px] sm:text-[20px] sl:h-[40px] sl:text-[25px] ">
                  {obj.courseName}
                </h2>
                <div className="flex flex-row items-center sm:h-[30px] sm:mt-[10px] sl:h-[40px] sl:mt-[10px]">
                  <p className="text-[14px] font-normal ">
                    {obj.courseLessons} lessons
                  </p>
                  <li className="ml-[15px] text-[14px] font-normal">
                    {obj.courseTime}
                  </li>
                  <li className="ml-[15px] text-[14px] font-normal">
                    {obj.courseLevel}
                  </li>
                </div>
                <div className="flex flex-row items-center sm:h-[40px]">
                  <img src={profile} className="mr-[7px]" alt="img" />
                  <p className="mr-[15px] text-[12px] font-medium" alt="img">
                    {obj.courseTutor}
                  </p>
                  <img src={ratings} className="h-[11px] w-[11px] mr-[5px]" alt="img"/>
                  <p className="text-[12px] font-medium">{obj.courseRatings}</p>
                </div>
                <p className="text-[14px] font-normal sm:mt-[15px] sl:mt-[10px]">
                  {obj.courseDescription}
                </p>
                <button
                  onClick={() =>
                    handelCourseVideo(
                      obj.courseVideos,
                      obj.courseTutor,
                      obj.courseDescription,
                      obj.courseRatings,
                      obj.courseName
                    )
                  }
                  className="border-[2px] w-[174px] h-[42px] rounded-[25px] border-[#9D1C7F] left-[180px] relative sm:left-[30px] sm:mt-[20px] sl:left-[40px] sl:mt-[20px]"
                >
                  View content
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseCard;
