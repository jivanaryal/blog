import React, { useEffect, useState } from "react";
import MoreTrending from "./MoreTrending";
import PopularPost from "./PopularPost";
import Trending from "./Trending";
import SportsAndBusiness from "./SportsAndBusiness";
import FooterTop from "../../Footer/FooterTop";
import FooterDown from "../../Footer/FooterDown";
import { get } from "../../../services/api";
import LoadingPage from "../../LoadingPage/LoadingPage";

const Index = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    get("/")
      .then((res) => {
        setBlog(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-[#FFFFFF]">
          <Trending blog={blog} />
          <MoreTrending blog={blog} />
          <PopularPost blog={blog} />
          <SportsAndBusiness blog={blog} />
          <FooterTop />
          <FooterDown />
        </div>
      )}
    </div>
  );
};

export default Index;
