import { useRef, useState } from "react";
import showProgress from "./showProgress";
import "./progressBarStyle.css";
export default function ProgressBar({
  inputRequired = true,
  progValue = 80,
  hShadow = "0px",
  vShadow = "4px",
  blur = "10px",
  shadowColor = "rgba(255, 204, 72, 0.53)",
} = {}) {
  const progressBarRef = useRef();
  const progressValueRef = useRef();
  const [progressValue, setProgressValue] = useState(progValue);
  let currProgress = 0;
  function handleChange(event) {
    if (event.target.value > 100) {
      alert("Input value should be less than or equal to 100");
    } else if (event.target.value === "") {
      setProgressValue(80);
    } else setProgressValue(event.target.value);
  }
  return (
    <>
      {inputRequired && (
        <>
          <label htmlFor="progressValue">Enter Progress Value: </label>
          <input
            id="progressValue"
            type={"number"}
            max={100}
            onChange={handleChange}
            value={progressValue}
          />
        </>
      )}

      <div className="progressCont">
        <div
          id="progressBar"
          ref={progressBarRef}
          style={{
            boxShadow: `${hShadow} ${vShadow} ${blur} ${shadowColor}`,
            width: "0%",
          }}
        >
          {showProgress({
            progressValue,
            progressBarRef,
            currProgress,
            progressValueRef,
          })}
        </div>
      </div>
      <span ref={progressValueRef}>0%</span>
    </>
  );
}
