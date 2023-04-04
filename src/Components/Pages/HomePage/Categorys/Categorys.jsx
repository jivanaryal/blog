import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FooterTop from "../../../Footer/FooterTop";
import FooterDown from "../../../Footer/FooterDown";
import LoadingPage from "../../../LoadingPage/LoadingPage";

const Categorys = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://kalikablog.onrender.com/blog");
      setBlog(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
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
        <div>
          <div className="pl-12 w-8/12 mx-auto">
            <h1 className="font-bold text-4xl pb-6 pt-10">'Business'</h1>
            <div>
              {blog.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="flex gap-10 justify-around w-full cursor-pointer mx-auto pb-8"
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
          <FooterTop />
          <FooterDown />
        </div>
      )}
    </div>
  );
};

export default Categorys;
