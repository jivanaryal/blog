import React from "react";

const FooterTop = () => {
  return (
    <div className="px-5  rounded-lg mx-4 mb-20 bg-[#F8F9FA] h-44   grid grid-cols-5 gap-10 items-center ">
      <div className="col-span-3 ml-10">
        <h1 className="font-bold text-2xl pb-1">Subscribe to newsletter</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full py-3 pl-5 rounded-md text-base border-[1px] border-gray-300 bg-[#FFFFFF] text-gray-500"
        />
      </div>
      <div className="col-span-2 pt-6 ">
        <button className="bg-[#f79918]  text-white rounded-full w-full px-20 py-3 hover:text-[#f79918] hover:bg-white hover:shadow-xl hover:shadow-gray-200 hover:border-[1px]">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default FooterTop;
