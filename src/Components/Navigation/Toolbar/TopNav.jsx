import React from "react";
import { BiDesktop } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImTablet } from "react-icons/im";
import { FaMobileAlt } from "react-icons/fa";

const IconData = [
  {
    icons: BiDesktop,
  },
  {
    icons: ImTablet,
  },
  {
    icons: FaMobileAlt,
  },
  {
    icons: AiOutlineShoppingCart,
  },
];

const TopNav = () => {
  return (
    <div className="container   flex justify-between pl-5 bg-[#333333] text-white items-center h-16  ">
      <div className="left flex gap-4 h-full">
        <div className="flex items-center">
          <div className="text-4xl font-normal">colorib</div>
          <div className="text-green-500 text-4xl rounded-none">.</div>
        </div>
        <div className="flex items-center text-gray-300 gap-2 bg-[#222222] px-4">
          <div className="text-lg">+</div>
          <div className="text-xl  ">MAGDESIGN</div>
        </div>
      </div>
      <div className="right flex  h-full ">
        <div className="flex items-center ">
          <div className="grid grid-cols-4 h-full items-center ">
            {IconData.map((val, i) => {
              console.log(val.icons === FaMobileAlt);
              return (
                <div
                  className={`text-3xl border-gray-700 text-gray-400 border-[1px] py-3 px-4 h-full ${
                    val.icons === AiOutlineShoppingCart &&
                    "bg-green-500 text-white"
                  }`}>
                  <val.icons
                    className={`${
                      val.icons === AiOutlineShoppingCart && "text-white"
                    }`}
                  />
                </div>
              );
            })}
          </div>
          <div className=" px-4 border-[1px] border-gray-700 py-4 text-3xl">
            <RxCross1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
