import React from "react";
import { useNavigate } from "react-router-dom";
import QuoteCard from "../../Components/QuoteCard";
//asserts
import sample2 from "./asserts/sample2.png";
import sample1 from "./asserts/sample1.png";
import sample3 from "./asserts/sample3.png";
import bootcamp from "./asserts/ph_chalkboard-teacher.png";
import webinars from "./asserts/mdi_human-male-board.png";
import women_in_tech from "./asserts/women.png";

const HomePage = () => {
  const Navigate = useNavigate();
  const handelPages = () => {
    Navigate("/course");
  };
  const HandelFormPage = () => {
    Navigate("/apply");
  };

  const card = [
    {
      title: "Bootcamp",
      img: bootcamp,
      description:
        "Escalate your career with our bootcamps, designed to build depth of knowledge and ability in the most in-demand tech skills.",
    },
    {
      title: "Webinars",
      img: webinars,
      description:
        "Our talks and workshops provide you access to some of the brightest minds in tech. These events are open to all. Join us and get inspired!",
    },
    {
      title: "Women in Tech",
      img: women_in_tech,
      description:
        "Our Women in Tech programs are designed to help you break the glass ceiling. Join a community of women changing the game in tech.",
    },
  ];

  return (
    <div className="">
      <div className="h-[670px] sm:h-[487px] md:h-[304px] xl:h-[600px] sm:bg-none sl:h-[700px] bg-background bg-cover flex justify-center">
        <div
          className="w-[1440px] md:w-[800px] xl:w-[1025px] pl-[146px] flex justify-between xl:pl-[70px]
      md:pl-[48px] sm:flex-col-reverse sm:pl-0 sm:gap-[31px] sm:justify-end sm:items-center sl:flex-col-reverse sl:pl-0  sl:gap-[31px] sl:justify-end sl:items-center "
        >
          <div
            className="w-[465px] pt-[101px] inline-flex flex-col gap-[45px] md:pt-[35px] sm:gap-[21px] sm:h-[217px] sm:w-[297px] sm:pt-0 sm:justify-center sm:items-center
          sl:gap-[21px] sl:h-[217px] sl:w-[297px] sl:pt-0 sl:justify-center sl:items-center"
          >
            <p
              className="font-bold text-[52px] md:h-[48px] md:w-[171px] md:text-[22px] sm:h-[57px] sm:w-[160px] sm:text-center sm:text-[22px] xl:text-[50px] 
            sl:h-[57px] sl:w-[160px] sl:text-center sl:text-[22px]"
            >
              Advance Your Skills
            </p>
            <p className="h-[96px] text-[22px] md:h-[69px] md:w-[325px] md:text-[13px] sm:pl-[32px] sm:text-[12px] sm:h-[67px] sl:text-[13px] xl:text-[20px]">
            Our tech education programs are designed for up-skilling and re-skilling in some of today's most in-demand skills.{" "}
            </p>
            <button
              onClick={handelPages}
              className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] text-[17px] 
            md:text-[11px] md:w-[103px] md:h-[37px] sm:h-[37px] sm:w-[106px] sm:text-[12px] sl:h-[37px] sl:w-[106px] sl:text-[12px ] "
            >
              Start Learning
            </button>
          </div>
          <img
            alt="img"
            className=" h-[500px] md:h-[264px] md:w-[311px] sm:h-[223px] sm:w-[360px] sl:w-[480px] sl:h-[400px] xl:h-[400px] xl:w-[450px]  "
            src={sample1}
          />
        </div>
      </div>

      <div className="w-screen h-[430px] bg-gradient-to-b from-[#282B85E5]  to-[#9A1D80E5] md:h-[200px] sm:bg-gradient-to-l sm:h-[601px] sl:bg-gradient-to-l sl:h-[601px] ">
        <div className=" text-white justify-center pt-[108px] flex gap-[50px] md:pt-[15px] md:gap-[31px] sm:pt-[35px] sm:flex-col sm:gap-[21px] sm:items-center sl:pt-[35px] sl:flex-col sl:gap-[21px] sl:items-center xl:gap-[20px]">
          {card?.length > 0 &&
            card.map((obj,key) => (
              <div key={key} className=" rounded-[22px] shadow-home_box bg-gradient-to-br from-[#FFFFFF66] to-[#00000000] backdrop-blur-[14px] w-[371px] h-[214px] md:w-[224px] md:h-[120px] sm:h-[162px] sm:w-[282px] sl:h-[162px] sl:w-[282px] xl:w-[290px] ">
                <div className=" inline-flex flex-col gap-[20px] pl-[25px] pt-[23px] md:gap-[13px] md:pt-[15px] sm:pt-[21px] sm:pl-[19px] sm:gap-[12px] sl:pt-[21px] sl:pl-[19px] sl:gap-[12px] ">
                  <div className="flex gap-[14px] md:gap-[8px] sm:gap-[10px] sm:items-center sl:gap-[10px] sl:items-center">
                    <img
                      alt="img"
                      className=" md:w-[21px] md:h-[16px] sm:w-[26px] sm:h-[22px] sl:w-[26px] sl:h-[22px] "
                      src={obj.img}
                    />
                    <p className="w-[267px] h-[39px] text-[26px] font-medium md:w-[161px] md:h-[16px] md:text-[12px] sm:h-[26px] sm:w-[203px] sm:text-[17px] sl:h-[26px] sl:w-[203px] sl:text-[17px] xl:text-[20px] xl:w-[130px]">
                      {obj.title}
                    </p>
                  </div>
                  <p className="text-[14px] md:w-[200px] md:h-[34px] md:text-[9px] sm:h-[54px] sm:text-[12px] xl:text-[10px] sl:h-[54px] sl:text-[12px] xl:w-[250px]">
                    {obj.description}
                  </p>
                  <a className=" text-[15px] font-semibold md:text-[9px] sm:text-[12px] sl:text-[12px] " href="/course">
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="h-[938px] sm:h-[1440px] sl:h-[1440px] w-screen bg-gradient-to-br from-[#E4D7FF] via-[#D8E7FF] to-[#BCFFDF] flex justify-center md:h-[600px] sm:bg-none  ">
        <div className="w-[1440px] xl:w-[1025px] md:w-[800px] sl:w-[480px] sm:w-[360px] sm:flex sm:flex-col sm:items-center sl:flex sl:flex-col sl:items-center ">
          <img
            alt="img"
            className=" mt-[-46px] float-right h-[438px] w-[561px] xl:h-[360px] xl:w-[450px] md:h-[260px] md:w-[307px] md:mt-[-30px] sm:mt-0 sm:h-[257px] sm:w-[329px] sm:float-none sl:mt-0 sl:h-[257px] sl:w-[329px] sl:float-none "
            src={sample2}
          />
          <div className="pt-[44px] pl-[261px] xl:pl-[100px] md:pl-[45px] md:pt-[23px] sm:pt-[36px] sm:pl-0 sm:flex sm:flex-col sm:items-center sl:pt-[36px] sl:pl-0 sl:flex sl:flex-col sl:items-center ">
            <p className="text-[36px] font-semibold w-[229px] h-[47px] md:text-[18px] md:w-[115px] md:h-[23px] sm:h-[31px] sm:w-[329px] sm:text-[24px] sl:h-[31px] sl:w-[329px] sl:text-[24px]">
              How it works
            </p>
            <div className=" pt-[44.5px] md:pt-[19px] sm:pt-[17px] sl:pt-[17px] ">
              <p className=" h-[37px] w-[107px] text-[28.5px] md:h-[18px] md:w-[53px] md:text-[14px] sm:text-[24px] sl:text-[24px] ">
                Sign up
              </p>
              <p className="pt-[11px] w-[367.5px] h-[88px] text-[13.5px] md:pt-[10px] md:h-[68px] md:w-[308px] md:text-[9px] sm:h-[95px] sm:w-[329px] sm:text-[12px] sl:h-[95px] sl:w-[329px] sl:text-[12px]">
                Enim id nisi accumsan convallis. Cursus pharetra dictum enim,
                adipiscing pellentesque morbi sapien quis auctor. Ultrices nisl
                bibendum euismod nisl semper malesuada quis venenatis. Faucibus
                sodales.
              </p>
            </div>
            <div className="pt-[30px] sm:pt-[21px] sl:pt-[21px] ">
              <p className=" h-[37px] w-[160px] text-[28.5px] md:text-[14px] md:w-[79px] md:h-[18px] sm:text-[24px] sl:text-[24px] ">
                Get access
              </p>
              <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px] md:pt-[9px] md:w-[325px] md:h-[51px] md:text-[9px] sm:h-[76px] sm:w-[329px] sm:text-[12px] sl:h-[76px] sl:w-[329px] sl:text-[12px] ">
                Eget massa sem gravida tellus dolor, tortor eu ante. Diam odio
                fermentum netus id eget. Sed diam massa nisl faucibus arcu
                vulputate ut venenatis. Elementum.
              </p>
            </div>
          </div>

          <div className=" pt-[58px] pr-[256px] flex justify-between xl:pr-[100px] md:pr-[70px] sm:flex-col sm:pt-[28px] sm:gap-[21px] sm:pr-0 sm:items-center sl:flex-col sl:pt-[28px] sl:gap-[21px] sl:pr-0 sl:items-center ">
            <img
              alt="img"
              className=" mt-[26px] float-left h-[510px] w-[611px] xl:h-[360px] xl:w-[450px] md:w-[322px] md:h-[332px] md:mt-[-10px] sm:mt-0 sm:h-[257px] sm:w-[329px] sm:float-none sl:mt-0 sl:h-[257px] sl:w-[329px] sl:float-none "
              src={sample3}
            />
            <div className=" ">
              <div>
                <p className=" h-[37px] w-[183px] text-[28.5px] md:h-[18px] md:w-[93px] md:text-[14px] sm:text-[24px] sl:text-[24px] ">
                  Learn course
                </p>
                <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px] md:pt-[9px] md:h-[51px] md:w-[286px] md:text-[9px] sm:h-[95px] sm:w-[307px] sm:text-[12px] sl:h-[95px] sl:w-[307px] sl:text-[12px] ">
                  Orci, lobortis elit dui aliquam nisl nunc. Leo suspendisse
                  vitae, vitae sed sagittis morbi enim. Sapien facilisis
                  faucibus est augue pellentesque nisl.{" "}
                </p>
              </div>
              <div className="pt-[30px] md:pt-[21px] sm:pt-0">
                <p className=" h-[37px] w-[137px] text-[28.5px] md:h-[16px] md:w-[71px] md:text-[14px] sm:text-[24px] sl:text-[24px] ">
                  Get result
                </p>
                <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px] md:h-[51px] md:w-[287px] md:text-[9px] sm:h-[95px] sm:w-[307px] sm:text-[12px] sl:h-[95px] sl:w-[307px] sl:text-[12px] ">
                  Dolor ut facilisis molestie sagittis et ultrices. In consequat
                  dignissim volutpat pellentesque magna semper vehicula vitae
                  magna. Vulputate fermentum.
                </p>
              </div>
              <div className="pt-[38px] inline-flex gap-[14px] md:pt-[20px] text-[17px] md:gap-[20px] md:text-[11px] sm:pt-[64px] sm:flex-col sm:text-[13px] sl:pt-[64px] sl:flex-col sl:text-[13px] ">
                <button
                  onClick={HandelFormPage}
                  className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] md:h-[37px] md:w-[95px] sm:h-[39] sm:w-[331px] sl:h-[39] sl:w-[331px]  "
                >
                  Start now
                </button>
                <button
                  onClick={HandelFormPage}
                  className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] md:h-[37px] md:w-[118px] sm:h-[39] sm:w-[331px] sl:h-[39] sl:w-[331px]  "
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteCard />

      <div className=" flex justify-center items-center flex-col mb-[44px] h-[501px] md:h-[328px] sm:h-[750px] sm:justify-start sm:mb-0 sl:h-[750px] sl:justify-start sl:mb-0 ">
        <div className="pt-[45px] md:pt-[25px] ">
          <p className=" h-[52px] text-[42px] font-semibold md:h-[25px] md:text-[19px] sm:h-[19px] sm:text-[22px] sl:h-[19px] sl:text-[22px]  ">
            Our Values
          </p>
        </div>
        <div className=" mt-[55px] rounded-rad w-[1040px] h-[305px] bg-pink-50 md:mt-[25px] md:h-[210px] md:w-[670px] sm:bg-white sm:w-screen sm:rounded-rad2 sl:w-[400px] sl:h-[600px] xl:w-[900px] ">
          <div className=" pt-[59px] pl-[57px] flex gap-[50px] md:gap-[46px] sm:flex-col sm:items-center sm:pl-0 sm:pt-0 sl:flex-col sl:items-center sl:gap-[20px] sl:pl-0 sl:pt-5 xl:gap-[25px] xl:pl-[28px] ">
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium md:text-[14px] sm:text-[18px] ">
                Seek to learn
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[130px] md:h-[105px] md:w-[162px] md:text-[11px] ">
                Startup Framework contains components and complex blocks which
                can easily be integrated into almost any design.
              </p>
            </div>
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium md:text-[14px] sm:text-[18px]">
                Paid internship
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[130px] md:h-[117px] md:w-[164px] md:text-[11px] ">
                We haven’t forgotten about responsive layout. With Startup
                Framework, you can create a website with full mobile support.
              </p>
            </div>
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium md:text-[14px] sm:text-[18px] ">
                Certification
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[108px] md:h-[103px] md:w-[181px] md:text-[11px] ">
                Finish the path to get certificate Retina Display. Feel the
                clarity in each pixel. Feel the clarity in each pixel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
