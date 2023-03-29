import axios from "axios";
import React, { useState, useEffect } from "react";

const Trending = () => {
  const [blog, setBlog] = useState([]);
  const [index, setIndex] = useState(0);
  const fetchData = async () => {
    const res = await axios.get("https://kalikablog.onrender.com/blog");

    setBlog(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (index > 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
  }, [index]);

  return (
    <div className="w-full">
      <h1 className="text-center text-5xl font-bold pt-8">Trending</h1>
      <div className="">
        {blog.map((val, i) => {
          return (
            <div
              key={i}
              className={`${
                index === i ? " translate-x-0  " : "-translate-x-full hidden "
              } w-9/12 mx-auto grid grid-cols-12 py-6 gap-10 pt-14 transition-all delay-100 duration-1000`}>
              <div className="col-span-6">
                {val.image.map((image, i) => (
                  <img
                    src={image.path}
                    alt="img"
                    className="rounded-xl shadow-lg border-[1px] h-96"
                  />
                ))}
              </div>
              <div className="col-span-5 mt-12">
                <div>
                  <p className="inline pr-2">{val.title}___</p>
                  <span>{val.createdAt}</span>
                  <h1 className="text-4xl font-bold  ">{val.sub_title}</h1>
                  <p className="text-base text-gray-600 py-3">
                    {val.description}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex">
                    <p>
                      <img
                        src="https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/315895995_1206787963516733_8522724124304818949_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_GnWt0_PcOMAX-bbjRo&_nc_ht=scontent.fktm9-2.fna&oh=00_AfA_JX1zQYQ1JakFbHF-4yFQYf40tcBHGYECrMsghvrpnA&oe=64283019"
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                      />
                    </p>
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
  );
};

export default Trending;
