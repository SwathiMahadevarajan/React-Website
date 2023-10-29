import "./stepComponents.css";
export default function StepComponents({ currentPage, index, step }) {
  return (
    <li style={{ listStyle: "none" }} className={"progressStep"}>
      <span
        className={currentPage == index ? "stepIndex current" : "stepIndex"}
      >
        {index + 1}
      </span>
      <div className="stepName">
        <span style={{ color: "hsl(229, 24%, 87%)" }}>STEP {index + 1}</span>
        <span style={{ fontWeight: 600, color: "white" }}>
          {step.title.toUpperCase()}
        </span>
      </div>
    </li>
  );
}
