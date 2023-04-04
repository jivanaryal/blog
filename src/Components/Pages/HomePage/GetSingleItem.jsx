import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterTop from "../../Footer/FooterTop";
import FooterDown from "../../Footer/FooterDown";

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
    <div>
      <div className="w-8/12 mx-auto flex items-center justify-center">
        {singleBlog.map((val, i) => {
          console.log(val.image[0].path);
          console.log(val);
          return (
            <div key={i}>
              <div className="flex flex-col items-center w-full mt-10 gap-0">
                <p className="w-16 h-16 border-2 shadow-lg rounded-full"></p>
                <p className="">Jivan</p>
                <span className="">{val.createdAt}</span>
              </div>

              <div
                className="font-bold text-3xl w-full px-32 py-10"
                dangerouslySetInnerHTML={{ __html: val.description }}
              />

              <img src={val.image[0].path} alt="img" />
              <div className="text-gray-500 leading-8 text-xl">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. The Big Oxmox advised her not to do so, because
                there were thousands of bad Commas, wild Question Marks and
                devious Semikoli, but the Little Blind Text didn’t listen. She
                packed her seven versalia, put her initial into the belt and
                made herself on the way. Even the all-powerful Pointing has no
                control about the blind texts it is an almost unorthographic
                life One day however a small line of blind text by the name of
                Lorem Ipsum decided to leave for the far World of Grammar. When
                she reached the first hills of the Italic Mountains, she had a
                last view back on the skyline of her hometown Bookmarksgrove,
                the headline of Alphabet Village and the subline of her own
                road, the Line Lane. Pityful a rethoric question ran over her
                cheek, then she continued her way.
              </div>
              {val.image.map((image, i) => {
                return (
                  <img src={image.path} alt="img" className="pt-20 pb-10" />
                );
              })}
              <div className="font-bold text-xl pb-20">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </div>
            </div>
          );
        })}
      </div>
      <FooterTop />
      <FooterDown />
    </div>
  );
};

export default GetSingleItem;
