import { useState } from "react";
import { ReactComponent as Arrow } from "assets/icons/arrow.svg";
import "./sectionStyle.css";
export default function Section({ heading, defaultToggle, children }) {
  const [toggle, setToggle] = useState(defaultToggle);
  return (
    <>
      <div className="toggle" onClick={() => setToggle(!toggle)}>
        <span>{heading}</span>
        <Arrow className={toggle ? "open" : ""} />
      </div>
      <ul>{toggle && children}</ul>
    </>
  );
}
