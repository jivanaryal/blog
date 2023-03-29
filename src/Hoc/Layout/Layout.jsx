import React, { useState } from "react";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import DownNav from "../../Components/Navigation/Toolbar/DownNav";
import TopNav from "../../Components/Navigation/Toolbar/TopNav";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <TopNav />
      <DownNav show={show} setShow={setShow} />
      <Sidebar show={show} setShow={setShow} />
      <div className="absolute ">{children}</div>
    </div>
  );
};

export default Layout;
