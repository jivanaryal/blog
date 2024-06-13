import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopularPost = ({ blog }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full md:block hidden">
        <h1 className="text-center text-5xl font-bold pt-10 ">
          Popular Courses
        </h1>
        <div className=" relative  w-full overflow-hidden  h-[50rem]">
          {blog.map((val, i) => {
            return (
              <div
                key={i}
                className={`${
                  index === i
                    ? " translate-x-0 "
                    : index + 1 === i
                    ? "translate-x-full "
                    : "-translate-x-full "
                } w-8/12 mx-auto  gap-10 cursor-pointer pt-14 transition-all delay-100 duration-1000 absolute`}
                onClick={() => navigate(`/item/${val._id}`)}>
                <div className="mx-auto pl-56 w-full">
                  {i}

                  <img
                    src={val.image[0].path}
                    alt="img"
                    className="rounded-xl  shadow-lg border-[1px] h-[30rem] w-full bg-[#ffffff]"
                  />
                </div>
                <div className="w-full pl-56">
                  <div className="font-bold pt-2">
                    <p className="inline  pr-2">{val.title}___</p>
                    <span>{val.createdAt}</span>
                    <h1 className="text-xl  font-bold  ">{val.sub_title}</h1>
                    <p
                      className="text-base text-gray-600 py-2 line-clamp-3 h-20"
                      dangerouslySetInnerHTML={{ __html: val.description }}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex">
                      <p className="w-12 h-12 rounded-full border-2"></p>
                    </div>
                    <div>
                      <h1 className="text-bold capitalize text-xl">
                        {val.title}
                      </h1>
                      <p className="text-gray-400">{val.author_name}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-1">
          {blog.slice(0, 5).map((val, i) => {
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`text-6xl   ${
                  index === i ? "text-yellow-600" : "text-gray-500"
                }`}>
                .
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
