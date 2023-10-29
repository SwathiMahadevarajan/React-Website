import React, { useState } from "react";
import "./navbarStyle.css";
export default function Navbar({ Sidebar }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const SideBarClone = React.cloneElement(Sidebar, {
    toggleMenu: toggleMenu,
    setToggleMenu: setToggleMenu,
  });

  return (
    <>
      <div className="navbar">
        <span
          onClick={() => setToggleMenu(!toggleMenu)}
          className={"hamburger"}
          style={{ color: "white", fontSize: "25px" }}
        >
          {"\u2630"}
        </span>
        <img src="../../logo192.png" id="logo" alt="hi" />
        <span>
          <h3>React</h3>
        </span>
      </div>
      {SideBarClone}
    </>
  );
}
