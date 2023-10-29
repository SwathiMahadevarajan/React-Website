import VanillaTilt from "vanilla-tilt";
import React, { useEffect, useRef } from "react";
function Tilt({ children }) {
  const tiltRef = useRef();
  useEffect(() => {
    const tiltNode = tiltRef.current;
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);
    return () => {
      tiltNode.vanillaTilt.destroy();
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
}

export default function Seventeeth() {
  const [showTilt, setShowTilt] = React.useState(true);
  return (
    <div>
      <br />
      <label>
        <input
          type="checkbox"
          checked={showTilt}
          onChange={(e) => setShowTilt(e.target.checked)}
        />{" "}
        show tilt
      </label>
      {showTilt ? (
        <Tilt>
          <div className="totally-centered">vanilla-tilt.js</div>
        </Tilt>
      ) : null}
    </div>
  );
}
