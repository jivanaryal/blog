import React, { useState, useEffect } from "react";
import axios from "axios";

const MoreTrending = () => {
  const [blog, setBlog] = useState([]);
  //   const [index, setIndex] = useState(0);
  const fetchData = async () => {
    const res = await axios.get("https://kalikablog.onrender.com/blog");

    setBlog(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container w-10/12 grid grid-cols-3 mx-auto gap-20 py-10 ">
      {blog.map((val, i) => {
        return (
          <div key={i} className={`${i >= 5 ? "hidden" : "block"}`}>
            <div>
              {val.image.map((image, i) => (
                <img
                  src={image.path}
                  alt="img"
                  className="rounded-xl shadow-lg border-[1px] h-56"
                />
              ))}
            </div>
            <div>
              <div>
                <p className="inline pr-2">{val.title}___</p>
                <span>{val.createdAt}</span>
                <h1 className="text-2xl font-bold  ">{val.sub_title}</h1>
                <p className="text-base leading-5 text-gray-600 py-2">
                  {val.description}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex">
                  <p>
                    <img
                      src="https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/315895995_1206787963516733_8522724124304818949_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_GnWt0_PcOMAX-bbjRo&_nc_ht=scontent.fktm9-2.fna&oh=00_AfA_JX1zQYQ1JakFbHF-4yFQYf40tcBHGYECrMsghvrpnA&oe=64283019"
                      alt="profile"
                      className="w-9 h-9 rounded-full"
                    />
                  </p>
                </div>
                <div>
                  <h1 className="text-bold capitalize text-xl">{val.title}</h1>
                  <p className="text-gray-400">{val.author_name}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoreTrending;
