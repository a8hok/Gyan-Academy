import React from "react";
//asserts
import search from "../GyanAcademyPages/coursePage/asserts/search.png";
const Search = () => {
  const handelSearchedData = (e) =>
  {
    e.preventDefault();
    console.log(e.target.elements[0].value) 
  }

  return (
    <div>
      <div className="relative w-[1170px] md:w-[736px] xl:w-[955px] sm:w-[300px] sl:w-[400px]">
      <form onSubmit={handelSearchedData}>

        <input
          type="text"
          placeholder="Search"
          className="w-[100%] h-14 border-2 border-gray-300 rounded-[10px] p-[30px]
           md:w-[736px] 
           sl:w-[350px] sl:h-[29px] sl:ml-5 sl:p-[10px] sl:rounded-[6px] sl:text-[11px]
          sm:w-[300px] sm:h-[29px] sm:ml-0 sm:p-[10px] sm:rounded-[6px] sm:text-[10px]"
        />
        <button>
        <img 
        alt="img"
          src={search}
          className="absolute top-[36%] cursor-pointer left-[95%]
          sm:w-[14px] sm:h-[14px] sm:top-[35%] sm:left-[93%]
          sl:w-[14px] sl:h-[14px] sl:top-[35%] sl:left-[86%]"
        />
        </button>
       
      </form>
      </div>
    </div>
  );
};

export default Search;
