import React from "react";
import MoreTrending from "./MoreTrending";
import PopularPost from "./PopularPost";
import Trending from "./Trending";
import SportsAndBusiness from "./SportsAndBusiness";
import FooterTop from "../../Footer/FooterTop";
import FooterDown from "../../Footer/FooterDown";

const index = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Trending />
      <MoreTrending />
      <PopularPost />
      <SportsAndBusiness />
      <FooterTop />
      <FooterDown />
    </div>
  );
};

export default index;
