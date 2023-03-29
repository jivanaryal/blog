import React from "react";
import MoreTrending from "./MoreTrending";
import PopularPost from "./PopularPost";
import Trending from "./Trending";

const index = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Trending />
      <MoreTrending />
      <PopularPost />
    </div>
  );
};

export default index;
