import React, { useState, useEffect } from "react";
// import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Login2 from "../../Components/Login2";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import DownNav from "../../Components/Navigation/Toolbar/DownNav";
import TopNav from "../../Components/Navigation/Toolbar/TopNav";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  console.log(location);
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="">
        <TopNav scroll={scroll} />
        <DownNav show={show} setShow={setShow} />
        <Sidebar show={show} setShow={setShow} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
