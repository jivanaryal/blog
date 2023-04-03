import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const obj = [
  {
    icons: <FaFacebookF />,
  },
  {
    icons: <FaTwitter />,
  },
  {
    icons: <FaLinkedin />,
  },
  {
    icons: <AiFillYoutube />,
  },
];

const FooterDown = () => {
  return (
    <div className="flex items-center flex-col pb-40 bg-[#FFFFFF]">
      <div className="flex gap-2">
        {obj.map((val, i) => (
          <div
            key={i}
            className="p-3 text-base bg-gray-300 rounded-2xl hover:bg-[#f79918] hover:text-white w-fit">
            {val.icons}
          </div>
        ))}
      </div>
      <div>
        <p className="inline pr-2">
          Copyright ©2023 All rights reserved | This template is made with by
        </p>
        <Link
          to="https://colorlib.com"
          className=" border-b-4 border-b-yellow-200   hover:border-b-4 hover:border-[#f79918]">
          colorib
        </Link>
      </div>
      <div>
        <Link className=" border-b-4 border-b-yellow-200   hover:border-b-4 hover:border-[#f79918]">
          Terms & Conditions
        </Link>{" "}
        /
        <Link className="pl-2  border-b-4 border-b-yellow-200   hover:border-b-4 hover:border-[#f79918]">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default FooterDown;
