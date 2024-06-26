import React from "react";
import { useNavigate } from "react-router-dom";

const MoreTrending = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div className="pr-10">
      <div className="w-11/12   md:w-10/12 grid md:grid-cols-3 place-items-center gap-12 mx-auto py-10  ">
        {blog.map((val, i) => {
          return (
            <div
              key={i}
              className={`${
                i >= 5 ? "hidden" : "block"
              } border-2  cursor-pointer w-full  hover:scale-105 duration-700 delay-75 transition-all shadow-xl shadow-gray-300  `}
              onClick={() => navigate(`/item/${val._id}`)}
            >
              <div>
                <img
                  src={val.image[0].path}
                  alt="img"
                  className="rounded-base shadow-lg border-[1px] h-56 w-full "
                />
              </div>
              <div>
                <div className="px-4 py-3">
                  <p className="inline pr-2">{val.title}___</p>
                  <span>{val.createdAt}</span>
                  <h1 className="text-2xl font-bold capitalize pt-4 ">
                    {val.sub_title}
                  </h1>
                  <p className="text-base leading-9 line-clamp-2 text-gray-600 py-2">
                    {val.description}
                  </p>
                </div>
                <div className="flex  items-center pb-6">
                  <div className="flex px-4">
                    <p className="w-9 h-9 rounded-full border-2"></p>
                  </div>
                  <div className="">
                    <h1 className="text-bold capitalize text-xl">
                      {val.title}
                    </h1>
                    <p className="text-gray-400 ">{val.author_name}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreTrending;
