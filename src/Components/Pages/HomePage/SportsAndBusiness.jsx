import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SportsAndBusiness = () => {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://kalikablog.onrender.com/blog");
      setBlog(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-2 mx-auto w-11/12 mb-32 mt-20">
      <div className="pl-12 w-full">
        <h1 className="font-bold text-3xl pb-8 ">Sports</h1>
        <div>
          {blog.map((val, i) => {
            return (
              <div
                key={i}
                className="flex gap-10 justify-around cursor-pointer w-full mx-auto pb-8 "
                onClick={() => navigate(`/item/${val._id}`)}>
                <img
                  src={val.image[0].path}
                  alt="img"
                  className="w-36 rounded-xl h-32"
                />
                <div>
                  <p className="inline pr-2">{val.title}___</p>
                  <span>{val.createdAt}</span>
                  <h1 className="text-xl font-bold capitalize">
                    {val.sub_title}
                  </h1>
                  <p
                    className="text-base text-gray-600 py-3 line-clamp-3 h-20"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pl-12 w-full">
        <h1 className="font-bold text-3xl pb-8 ">Business</h1>
        <div>
          {blog.map((val, i) => {
            return (
              <div
                key={i}
                className="flex gap-10 justify-around w-full mx-auto pb-8">
                <img
                  src={val.image[0].path}
                  alt="img"
                  className="w-36 rounded-xl h-32"
                />
                <div>
                  <p className="inline pr-2">{val.title}___</p>
                  <span>{val.createdAt}</span>
                  <h1 className="text-xl font-bold capitalize">
                    {val.sub_title}
                  </h1>
                  <p
                    className="text-base text-gray-600 py-3 line-clamp-3 h-20"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SportsAndBusiness;
