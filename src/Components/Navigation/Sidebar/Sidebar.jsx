import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useLocation, Link } from "react-router-dom";

const data = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "categories",
    path: "/categories",
  },
  {
    name: "travel",
    path: "/travel",
  },
  {
    name: "food",
    path: "/food",
  },
  {
    name: "technology",
    path: "/technology",
  },
  {
    name: "business",
    path: "/business",
  },
];

const Sidebar = ({ show, setShow }) => {
  const location = useLocation();
  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right grid grid-cols-11 ${
        show ? "translate-x-0" : "translate-x-full"
      }  duration-500 delay-100 ease-in-out  z-10 `}>
      <div
        className="col-span-9 relative z-10"
        onClick={() => setShow(!show)}></div>
      <div className="col-span-2 flex flex-col gap-4 pl-6 pt-4 bg-white shadow-2xl transition-all  delay-1000 duration-300 z-5    ">
        <div>
          <RxCross1
            className="absolute right-4 text-3xl"
            onClick={() => setShow(!show)}
          />
        </div>
        {data.map((val, i) => {
          console.log(val);
          return (
            <Link to={val.path} key={i}>
              <div
                className={`capitalize ${
                  location.pathname === val.path
                    ? "text-yellow-400"
                    : "text-black"
                }`}>
                {val.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
