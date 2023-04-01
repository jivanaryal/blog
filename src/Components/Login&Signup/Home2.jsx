import React, { useState } from "react";
// import { useLocation } from 'react-router-dom';
import AddBlog from "../Blog/AddBlog";

import ViewBlog from "../Blog/ViewBlog";
import UserAuthContextApi, {
  UserAuthContext,
} from "../../Hoc/ContextApi/UserAuth";
const HomePage = () => {
  const [Active, setActive] = useState("add");
  // const location = useLocation();
  const data = [
    {
      id: "add",
      name: "Add Blog",
    },
    {
      id: "view",
      name: "View Blog",
    },
  ];

  return (
    <UserAuthContextApi>
      <UserAuthContext.Provider>
        <div className="bg-gray-100">
          <div className="flex pl-10 gap-4 justify-center">
            {data.map((val, i) => {
              return (
                <div key={i}>
                  <div
                    onClick={() => setActive(val.id)}
                    className={`border-2 capitalize py-1 px-4 text-xl cursor-pointer rounded-md w-fit hover:bg-blue-500 hover:text-white mt-4
                                    ${
                                      val.id === Active
                                        ? "bg-mainColor text-white scale-110"
                                        : "bg-white"
                                    }`}>
                    {val.name}
                  </div>
                </div>
              );
            })}
          </div>

          {Active === "add" ? <AddBlog /> : <ViewBlog />}
        </div>
      </UserAuthContext.Provider>
    </UserAuthContextApi>
  );
};

export default HomePage;
