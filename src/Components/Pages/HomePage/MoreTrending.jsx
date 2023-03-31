import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingPage from "../../LoadingPage/LoadingPage";

const MoreTrending = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [index, setIndex] = useState(0);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://kalikablog.onrender.com/blog");
      setBlog(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="container  w-10/12 grid grid-cols-3 mx-auto gap-20 py-10  ">
          {blog.map((val, i) => {
            return (
              <div
                key={i}
                className={`${
                  i >= 5 ? "hidden" : "block"
                } border-2 w-fit  hover:scale-105 duration-700 delay-75 transition-all shadow-xl shadow-gray-300  `}>
                <div>
                  <img
                    src={val.image[0].path}
                    alt="img"
                    className="rounded-base shadow-lg border-[1px] h-56 w-full"
                  />
                </div>
                <div>
                  <div className="px-4">
                    <p className="inline pr-2">{val.title}___</p>
                    <span>{val.createdAt}</span>
                    <h1 className="text-2xl font-bold capitalize pt-4 ">
                      {val.sub_title}
                    </h1>
                    <p className="text-base leading-9 line-clamp-2 text-gray-600 py-2">
                      {val.description}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center pb-6">
                    <div className="flex px-4">
                      <p>
                        <img
                          src="https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/315895995_1206787963516733_8522724124304818949_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_GnWt0_PcOMAX-bbjRo&_nc_ht=scontent.fktm9-2.fna&oh=00_AfA_JX1zQYQ1JakFbHF-4yFQYf40tcBHGYECrMsghvrpnA&oe=64283019"
                          alt="profile"
                          className="w-9 h-9 rounded-full"
                        />
                      </p>
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
      )}
    </div>
  );
};

export default MoreTrending;
