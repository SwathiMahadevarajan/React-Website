import { useState } from "react";
import "./multiStepForm.css";
import StepComponents from "./StepComponents";
export default function MultiStepForm({ stepComponents } = {}) {
  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    plans: {},
    addOns: [],
  });

  const Component = stepComponents[currentPage].component;

  const previousStep = () => {
    if (currentPage - 1 >= 0) setCurrentPage((prevStep) => prevStep - 1);
  };

  const nextStep = () => {
    if (currentPage + 1 < stepComponents.length)
      setCurrentPage((prevStep) => prevStep + 1);
  };

  return (
    <div className="formContent">
      <div className="formProgress">
        {stepComponents.map((step, index) => {
          if (index + 1 < stepComponents.length)
            return (
              <StepComponents
                currentPage={currentPage}
                step={step}
                index={index}
              />
            );
        })}
      </div>
      <div className="formComponent">
        <h3 style={{ color: "hsl(213, 96%, 18%)" }}>
          {stepComponents[currentPage].title}
        </h3>
        <p id="desc">{stepComponents[currentPage].desc}</p>
        <br />
        <Component
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
        />
        <div
          className="buttonGroups"
          style={
            currentPage + 2 <= stepComponents.length
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <button
            onClick={previousStep}
            id="backButton"
            style={
              currentPage - 1 < 0 || currentPage + 2 > stepComponents.length
                ? { display: "none" }
                : {}
            }
          >
            Go Back
          </button>
          <button
            onClick={nextStep}
            id="nextButton"
            style={
              currentPage + 2 >= stepComponents.length
                ? { display: "none" }
                : {}
            }
          >
            Next Step
          </button>
          <button
            className="confirmButton"
            style={
              currentPage + 2 === stepComponents.length
                ? { display: "block" }
                : { display: "none" }
            }
            onClick={nextStep}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
