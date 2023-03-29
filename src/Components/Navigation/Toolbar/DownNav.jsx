import React from "react";
import {
  AiOutlineSearch,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLine,
} from "react-icons/ai";
import { ImFacebook } from "react-icons/im";

const icons = [
  {
    icons: <AiOutlineTwitter />,
  },
  {
    icons: <ImFacebook />,
  },
  {
    icons: <AiOutlineInstagram />,
  },
];

const lines = [
  {
    icons: <AiOutlineLine />,
  },
  {
    icons: <AiOutlineLine />,
  },
  {
    icons: <AiOutlineLine />,
  },
];

const DownNav = ({ show, setShow }) => {
  return (
    <div className="container flex justify-around h-20 items-center border-2 shadow-sm">
      <div className="searchbar relative">
        <input
          type="search"
          placeholder="Search..."
          className="rounded-full border-[1px] py-2 w-72 pl-10"
        />
        <AiOutlineSearch className="absolute top-3 text-gray-400 left-2 text-lg" />
      </div>
      <div className="font-bold text-xl">MAGDESGIN</div>
      <div className="flex gap-2">
        {icons.map((val, i) => (
          <div>{val.icons}</div>
        ))}
      </div>
      <div>
        {lines.map((val, i) => (
          <div className=" my-[-25px]  text-4xl  ">
            <div key={i} onClick={() => setShow(!show)}>
              {val.icons}
            </div>
          </div>
        ))}
        {/* <HiOutlineMenu /> */}
      </div>
    </div>
  );
};

export default DownNav;
