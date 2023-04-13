import React, { useState } from "react";
import left_arror from "../GyanAcademyPages/HomePage/asserts/left_arror.png";
import right_arror from "../GyanAcademyPages/HomePage/asserts/rightarrow.png";
import quote from "../GyanAcademyPages/HomePage/asserts/fa-quote-left.png";
import senthamizlharasu from "../GyanAcademyPages/HomePage/asserts/Senthamizharasu.png";
import vetrivel from "../GyanAcademyPages/HomePage/asserts/Vetrivel.png";

import dharsan from "../GyanAcademyPages/HomePage/asserts/Dharshan.png";

import roshan from "../GyanAcademyPages/HomePage/asserts/ROSHAN.png";

import sriram from "../GyanAcademyPages/HomePage/asserts/Sriram.png";

function Quotecard() {
  const [indexTo, setIndexTo] = useState(0);

  const Quotes = [
    {
      discription:
        "First of all, I need to thanks to GyanMatrix Technologies for giving me opportunity to explore my talent in field. After joining in this EWYL program , I started to research about IT fields jobs & which will suits for me. I decided to work as UI /UX designer. This program helps me to startup gear for my career. Once again Thank for giving this opportunity.",
      Author: "ROSHAN B",
      field: "UI /UX designer",
      image: roshan,
    },
    {
      discription:
        "I am being trained in EWL ( Earn While Learn ) since 7th May 2022, I am very thankful to GyanMatrix for giving such great training. I have learned about Web Development much more and the topic below it – HTML, CSS, Java script, React, Mongodb. Before this training I don’t have an idea about Web Development, now I am able to develop websites. Thank you for such opportunities.",
      Author: "Senthamizharasu M S,",
      field: "Web Developement",
      image: senthamizlharasu,
    },
    {
      discription:
        "it was a great experience after joining into GyanMatrix I had learnt lots and lot about the web and web side application and also learnt the culture of IT sector… I importantly mentor who guide us were technical skilled and knowledged persons they are teached more over than a teacher and communicate with as a friend So it was a really helpful for my future.",
      Author: "Dharshan P M,",
      field: "Web Developement",
      image: dharsan,
    },
    {
      discription:
        "My experience with Gyan Matrix was a very good. It was a wonderful experience learning from the experts who are really good at what they teach. Through the internship with GMX, I gained a huge knowledge of web development. I had no knowledge of web development in the early stages, but with this internship’s help, I gained a huge knowledge. I enjoy, and progressing my carrier professionally and personally.",
      Author: "Sri Ram .D B",
      field: "Web Devlopement",
      image: sriram,
    },
    {
      discription:
        "I am being trained in EWL ( Earn While Learn ) since 7th May 2022.I am very glad.A special thanks to GyanMatrix for giving such great training. GyanMatrix trainer truly improved my coding skills & the mentor had such a great way of training and they focused more on practical training and provided me with some high-quality content that helped me a lot.They inspire a lot and encourage us to learn new technology. Before I didn’t have any idea about web development but now I can able to develop a new website.Happy to get trained from them.",
      Author: "Vetrivel",
      field: "Web Devlopement",
      image: vetrivel,
    },
  ];
  const handelRightContent = () => {
    if (Quotes.length - 1 > indexTo) {
      setIndexTo(indexTo + 1);

      console.log(indexTo);
    }
    if (indexTo === 4) {
      setIndexTo(0);
    }
  };
  const handelLeftContent = () => {
    if (indexTo >= 1) {
      setIndexTo(indexTo - 1);
    }
  };
  console.log(Quotes[0]);
  const qoutes = Quotes.slice(indexTo, indexTo + 1);
  return (
    <div className="mt-[50px] w-screen sm:mt-0 ">
      <div className="pt-[86px] flex gap-[140px] justify-center md:pt-[75px] md:gap-[100px] sm:pt-0 sl:pt-0 xl:gap-[100px] ">
        <div>
          <img
            alt="img"
            onClick={handelLeftContent}
            className=" cursor-pointer pt-[40px] md:w-[9px] md:pt-[25px]"
            
            src={left_arror}
           
       />
        </div>
        {Quotes.length > 0 &&
          qoutes.map((obj,key) => (

            <div key={key} className="flex flex-col gap-[62px] md:gap-[18px] sm:gap-[26px] sm:flex-col-reverse sm:w-screen sl:gap-[26px] sl:flex-col-reverse sl:w-screen ">
              <div className="flex gap-[62px] md:gap-[30px] sm:gap-4 sm:justify-center sl:gap-4 sl:justify-center xl:gap-[40px]">
                <img alt="img" className="h-[26px] w-[38px] md:h-[26px] md:w-[21px]" src={quote} />

                <div className="">
                  <p className="w-[693px] text-[#1E0E62] text-[22px] font-medium md:h-[172px] md:w-[369px] md:text-[13px] sm:h-[210px] sm:w-[282px] sm:text-[12px] sl:h-[300px] sl:w-[282px] sl:text-[15px] xl:w-[500px] xl:text-[15px] ">
                    {obj.discription}
                  </p>
                </div>

              </div>
              <div className=" flex justify-start items-center gap-[17px] pl-[100px] md:gap-[9px] md:pl-[52px] sl:pl-0 sm:pl-0 xl:pl-[78px] ">
                <img alt="img" className="h-20 w-20 rounded-full md:h-[40px] md:w-[40px] sl:h-[60px] sl:w-[60px] sm:h-[60px] sm:w-[60px] " src={obj.image} />
                <p className=" text-[14px] text-[#151439] opacity-[0.7] md:text-[11px]">
                  {obj.Author} <p>- {obj.field}</p>
                </p>
              </div>
            </div>
          ))}

        <div>
          <img
            alt="img"
            onClick={handelRightContent}
            className="pt-[40px] cursor-pointer md:w-[9px] md:pt-[25px] "
            src={right_arror}
          />
        </div>
      </div>
    </div>
  );
}

export default Quotecard;
