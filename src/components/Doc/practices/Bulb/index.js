import "./style.css";
import React, { useState } from "react";
const Bulb = () => {
  const [bulbStatus, setBulbStatus] = useState(false);
  const content = !bulbStatus
    ? "Seems so dark👀,Can you turn on the light "
    : "Its better now 😊";
  return (
    <div>
      <div className="environment">
        <div className={`bulb ${bulbStatus && "light"}`}>
          <div className="glass-effect"></div>
          <div className="filament"></div>
        </div>
        <div className="bulb-bottom">
          <div className="glass-effect"></div>
        </div>
        <div
          className="wire"
          onClick={() => setBulbStatus((prev) => !prev)}
        ></div>
      </div>
      <span className="content">{content}</span>
    </div>
  );
};
export default Bulb;
