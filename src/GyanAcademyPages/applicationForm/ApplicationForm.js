import React, { useEffect, useState } from "react";
 import AWS from "aws-sdk";
import axios from "axios";
import successTick from "./asserts/animated-check.gif";

axios.defaults.headers.post["Content-Type"] = "text/plain";

const ApplicationForm = () => {
  const [resumeUploadLink, setLink] = useState("");

  const formUrl =
    "https://sheet.best/api/sheets/25e74a3e-af6b-4252-b017-603d4d353fa9";

  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const secretAccessKeys = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState();
  const handelFilePath = (e) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    setFileName(fileName);

    AWS.config.update({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKeys,
     });

    const myBucket = new AWS.S3({
     params: { Bucket: process.env.REACT_APP_S3_BUCKET },
     region: "eu-west-2",
    });

    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: process.env.REACT_APP_S3_BUCKET,
      Key: fileName,
    };

     myBucket
       .putObject(params)
       .on("httpUploadProgress", (evt) => {
         setProgress(Math.round((evt.loaded / evt.total) * 100));
       })
      .send((err) => {
         if (err) console.log(err);
       });
  };
  const objectURL = `https://${process.env.REACT_APP_S3_BUCKET}.s3.eu-west-2.amazonaws.com/${fileName}`;
  useEffect(() => {
    if (progress === 100) console.log("100");
    setLink(objectURL);
  }, [progress]);

  const handelFormData = (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const firstName = ele[0].value;
    const lastName = ele[1].value;
    const email = ele[2].value;
    const mobileNumber = ele[3].value;
    const qualification = ele[4].value;
    const category = ele[5].value;
    
    const formData = {
      Firstname: firstName,
      Lastname: lastName,
      Email: email,
      Mobilenumber: mobileNumber,
      Qualification: qualification,
      Category: category,
      Resumelink: resumeUploadLink,
    };
    console.log(resumeUploadLink);
    console.log(formData);
     axios.post(formUrl, formData).then((response) => {
      console.log(response);
    });
  };
  const fields = [
    ["First Name *", "First Name *"],
    ["Last Name *", "Last Name *"],
    ["Email *", "eg. Your@gmail.com *"],
    ["Mobile Number *", "Mobile Number *"],
    ["Qualification *", "eg . Engineering, BCA, BSC, MBA.. Etc*"],
  ];

  return (
    <div className=" flex font-poppins flex-col  justify-center items-center pt-28 pb-28 bg-gradient-to-b from-[#E1F3FF] to-[#E4D7FF] sm:pt-10 sm:pb-10">
      <form
        className=" sl:flex sl:flex-col sl:items-center sm:flex sm:flex-col sm:items-center"
        onSubmit={handelFormData}
      >
        <div className=" flex flex-col justify-center items-center w-full">
          <h1 className="text-[42px] font-medium mb-[10px] md:flex md:justify-center sl:text-[30px] sm:text-[16px]">
            Apply Here{" "}
          </h1>
          <p className="text-[16px] font-normal mb-[60px] md:text-center sl:text-[16px] sl:w-[450px] sl:text-center sl:mb-[30px] sm:text-[9px] sm:w-[250px] sm:text-center sm:mb-[30px] ">
            Don’t miss out on your next big career opportunity. Fill the form
            and our HR will reach out to you shortly!
          </p>
        </div>

        <div className="flex flex-row flex-wrap w-[756px] gap-x-10 mb-[40px] md:justify-center md:gap-x-4 sl:gap-x-0 sl:w-[700px] sl:justify-center sm:gap-x-0 sm:w-screen sm:justify-center ">
          {fields.map((obj,key) => (
            <div key={key} className="w-[358px] text-[16px] font-normal sm:text-[9px] sm:w-[250px]">
              <label className=" font-semibold text-[#484B4D] mb-[10px]">
                {obj[0]}
              </label>
              <br></br>
              <input
                required
                placeholder={obj[1]}
                className="w-[358px] pl-5 h-[53px] rounded-[5px] mb-[35px] sm:w-[250px] sm:h-[40px]"
              />
            </div>
          ))}
          <div className="w-[358px] text-[16px] font-normal sm:text-[9px] sm:flex sm:flex-col sm:items-center sm:justify-center">
            <label className="mb-[10px] font-semibold text-[#484B4D] sm:w-[250px] ">
              Category *
            </label>
            <br></br>
            <select
              name="Category"
              className="w-[358px] text-slate-600 pl-5 h-[53px] rounded-[5px] bg-white mb-[35px] sm:w-[250px] sm:h-[40px] sm:mb-[10px] "
            >
              <option value="web devlopment">Web devlopment</option>
              <option value="App development">App development</option>
              <option value="ui designer">UI/UX designer</option>
              <option value="cyber security intern">Scrum Master</option>
            </select>
          </div>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <label className="text-[16px] font-semibold md:w-[600px] sm:text-[9px]">
            Upload resume *
          </label>
          <div className="flex items-center justify-center">
            <div>
              {progress === 100 && (
                <img className="w-10 h-10 mr-2" src={successTick} alt="img"></img>
              )}
            </div>
            <div>{progress === 100 && <div>File Uploded</div>}</div>
          </div>

          <div className="">
            <label className="flex justify-center w-[755px] h-[115px]  transition bg-white border-2 border-gray-500 mt-4  mb-8 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none md:w-[600px] sl:w-[400px] sm:w-[250px]">
              <span className="flex items-center  flex-col justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2500/svg"
                >
                  <path
                    d="M19.3365 21.9452C19.3365 21.6852 19.2452 21.4602 19.0625 21.2702C18.8798 21.0802 18.6635 20.9852 18.4135 20.9852C18.1635 20.9852 17.9471 21.0802 17.7644 21.2702C17.5817 21.4602 17.4904 21.6852 17.4904 21.9452C17.4904 22.2052 17.5817 22.4302 17.7644 22.6202C17.9471 22.8102 18.1635 22.9052 18.4135 22.9052C18.6635 22.9052 18.8798 22.8102 19.0625 22.6202C19.2452 22.4302 19.3365 22.2052 19.3365 21.9452ZM23.0288 21.9452C23.0288 21.6852 22.9375 21.4602 22.7548 21.2702C22.5721 21.0802 22.3558 20.9852 22.1058 20.9852C21.8558 20.9852 21.6394 21.0802 21.4567 21.2702C21.274 21.4602 21.1827 21.6852 21.1827 21.9452C21.1827 22.2052 21.274 22.4302 21.4567 22.6202C21.6394 22.8102 21.8558 22.9052 22.1058 22.9052C22.3558 22.9052 22.5721 22.8102 22.7548 22.6202C22.9375 22.4302 23.0288 22.2052 23.0288 21.9452ZM24.875 18.5852V23.3852C24.875 23.7852 24.7404 24.1252 24.4712 24.4052C24.2019 24.6852 23.875 24.8252 23.4904 24.8252H2.25962C1.875 24.8252 1.54808 24.6852 1.27885 24.4052C1.00962 24.1252 0.875 23.7852 0.875 23.3852V18.5852C0.875 18.1852 1.00962 17.8452 1.27885 17.5652C1.54808 17.2852 1.875 17.1452 2.25962 17.1452H8.41827C8.62019 17.7052 8.95914 18.1652 9.4351 18.5252C9.91106 18.8852 10.4423 19.0652 11.0288 19.0652H14.7212C15.3077 19.0652 15.8389 18.8852 16.3149 18.5252C16.7909 18.1652 17.1298 17.7052 17.3317 17.1452H23.4904C23.875 17.1452 24.2019 17.2852 24.4712 17.5652C24.7404 17.8452 24.875 18.1852 24.875 18.5852ZM20.1875 8.8652C20.024 9.26519 19.7404 9.46519 19.3365 9.46519H15.6442V16.1852C15.6442 16.4452 15.5529 16.6702 15.3702 16.8602C15.1875 17.0502 14.9712 17.1452 14.7212 17.1452H11.0288C10.7788 17.1452 10.5625 17.0502 10.3798 16.8602C10.1971 16.6702 10.1058 16.4452 10.1058 16.1852V9.46519H6.41346C6.00962 9.46519 5.72596 9.26519 5.5625 8.8652C5.39904 8.47519 5.46635 8.1302 5.76442 7.83019L12.226 1.1102C12.399 0.920195 12.6154 0.825195 12.875 0.825195C13.1346 0.825195 13.351 0.920195 13.524 1.1102L19.9856 7.83019C20.2837 8.1302 20.351 8.47519 20.1875 8.8652Z"
                    fill="#777777"
                  />
                </svg>
                {progress <= 99 && (
                  <span className="font-medium mt-2 text-gray-400 sm:text-[9px]">
                    Click or drag a file to upload
                  </span>
                )}
                {progress === 100 && (
                  <span className="font-medium mt-2 text-[8px] text-green-600">
                    <a>{fileName}- Uploded succesfully</a>
                  </span>
                )}
              </span>
              <input
                type="file"
                name="file_upload"
                onChange={handelFilePath}
                className="hidden"
                accept=".pdf"
              />
            </label>
          </div>
        </div>

        <p className="text-[16px] font-normal mb-[30px] md:text-center sl:w-[400px] sl:text-center sm:text-[9px] sm:w-[250px] sm:text-center">
          By clicking *Apply*, I agree to GyanAcademy Terms & Conditions and
          Privacy Policy & Notice
        </p>
        <div className="md:flex md:justify-center">
          <button className="bg-gradient-to-b rounded-[5px] from-[#282b85e6] to-[#9a1d80e6] text-white  w-[760px] h-[46px] md:w-[400px] sl:w-[300px] sm:text-[9px] sm:w-[150px] sm:h-[30px] ">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
