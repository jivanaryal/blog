import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetSingleItem = () => {
  const [singleBlog, setSingleBlog] = useState([]);

  const { id } = useParams();
  console.log(id);

  const getSingleItem = async () => {
    const res = await axios.get(`https://kalikablog.onrender.com/blog/${id}`);
    setSingleBlog([res.data.data]);
    // console.log(res.data);
  };

  useEffect(() => {
    getSingleItem();
  });
  return (
    <div className="w-8/12 mx-auto flex items-center justify-center ">
      {singleBlog.map((val, i) => {
        console.log(val.image[0].path);
        console.log(val);
        return (
          <div key={i}>
            <div className="flex flex-col items-center w-full mt-10 gap-0">
              <img
                src="https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/315895995_1206787963516733_8522724124304818949_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_GnWt0_PcOMAX-bbjRo&_nc_ht=scontent.fktm9-2.fna&oh=00_AfA_JX1zQYQ1JakFbHF-4yFQYf40tcBHGYECrMsghvrpnA&oe=64283019"
                alt=""
                className="w-16 h-16 rounded-full"
              />
              <p className="">Jivan</p>
              <span className="">{val.createdAt}</span>
            </div>

            <div className="font-bold text-3xl w-full px-32 py-10">
              {val.description}
            </div>
            <img src={val.image[0].path} alt="img" />
            <div className="text-gray-500 leading-8 text-xl">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. The Big Oxmox advised her not to do so, because
              there were thousands of bad Commas, wild Question Marks and
              devious Semikoli, but the Little Blind Text didn’t listen. She
              packed her seven versalia, put her initial into the belt and made
              herself on the way. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar. When she reached
              the first hills of the Italic Mountains, she had a last view back
              on the skyline of her hometown Bookmarksgrove, the headline of
              Alphabet Village and the subline of her own road, the Line Lane.
              Pityful a rethoric question ran over her cheek, then she continued
              her way.
            </div>
            {val.image.map((image, i) => {
              return <img src={image.path} alt="img" className="pt-20 pb-10" />;
            })}
            <div className="font-bold text-xl">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetSingleItem;
