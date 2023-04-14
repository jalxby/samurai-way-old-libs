import React from "react";
import s from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <Navbar />
    </div>
  );
};

export default Sidebar;
