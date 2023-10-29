import React, { useEffect, useState } from "react";
import "./style.css";
import Mute from "assets/icons/mute";
import clockTickSound from "assets/sounds/clockTickSound.mp3";
import VolumeOn from "assets/icons/volumeon";
const WallClock = () => {
  const [time, setTime] = useState({
    hour: 0,
    mins: 0,
    seconds: 0,
    minuteDegrees: 0,
    hourDegrees: 0,
  });
  const [isMute, setIsMute] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const seconds = date.getSeconds();
      const mins = date.getMinutes();
      const minuteDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      const hour = date.getHours();
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      setTime({ minuteDegrees, hourDegrees, hour, mins, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="outerEnvironment">
      <div className="outerArea">
        <div className="whiteArea">
          <div className="clock">
            <div className="marking-one marking"></div>
            <div className="marking-two marking"></div>
            <div className="marking-three marking"></div>
            <div className="marking-four marking"></div>
            <div className="innerClock"></div>
            <div
              className="hand hour-hand"
              style={{ transform: `rotate(${time.hourDegrees}deg)` }}
            ></div>
            <div
              className="hand minute-hand"
              style={{ transform: `rotate(${time.minuteDegrees}deg)` }}
            ></div>
          </div>
          <div className="digital-clock">
            {time.hour > 12 ? time.hour - 12 : time.hour}:{time.mins}:
            {time.seconds} {time.hour > 12 ? "PM" : "AM"}
          </div>
          <div className="clock-bottom">
            <div className="pendulum">
              <div className="pendulum-end"></div>
            </div>
            <audio
              id="clock-tick-sound"
              loop
              autoPlay
              src={clockTickSound}
              type="audio/mpeg"
              muted={isMute}
            ></audio>
          </div>
        </div>
      </div>
      <div className="volumeSvg" onClick={() => setIsMute((prev) => !prev)}>
        {isMute ? <Mute /> : <VolumeOn />}
      </div>
    </div>
  );
};
export default WallClock;
