import axios from "axios";
import React, { useState, useEffect } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [blog, setBlog] = useState([]);
  const [index, setIndex] = useState(0);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
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

  useEffect(() => {
    setTimeout(() => {
      if (index >= blog.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
  }, [index, blog.length]);

  return (
    <div>
      {Loading ? (
        <LoadingPage />
      ) : (
        <div className="w-full pb-10">
          <h1 className="text-center text-5xl font-bold pt-8 pb-4">Trending</h1>
          <div className=" w-9/12 overflow-hidden mx-auto relative py-10 h-96">
            {blog.map((val, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    index === i
                      ? " translate-x-0 opacity-100 "
                      : "-translate-x-full opacity-0  "
                  } w-full mx-auto grid grid-cols-12 absolute  gap-10 h-full  transition-all delay-100 duration-1000 cursor-pointer `}
                  onClick={() => navigate(`/item/${val._id}`, { state: val })}>
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
                      <h1 className="text-4xl font-bold capitalize">
                        {val.sub_title}
                      </h1>
                      <p className="text-base text-gray-600 py-3 line-clamp-6">
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
      )}
    </div>
  );
};

export default Trending;
