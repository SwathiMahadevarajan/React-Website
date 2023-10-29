import { ReactComponent as ArcadeIcon } from "assets/icons/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "assets/icons/icon-advanced.svg";
import { ReactComponent as ProIcon } from "assets/icons/icon-pro.svg";
import "./planSelector.css";
import { useState } from "react";

export default function PlanSelector({ formData, setFormData }) {
  const [term, setTerm] = useState(formData.plans.termChosen || "month");
  const plans = [
    {
      icon: <ArcadeIcon />,
      title: "Arcade",
      yearlyPrice: 90,
      monthlyPrice: 9,
      termChosen: "month",
    },
    {
      icon: <AdvancedIcon />,
      title: "Advanced",
      yearlyPrice: 120,
      monthlyPrice: 12,
      termChosen: "month",
    },
    {
      icon: <ProIcon />,
      title: "Pro",
      yearlyPrice: 150,
      monthlyPrice: 15,
      termChosen: "month",
    },
  ];

  const handlechooseTerm = (event) => {
    let plans = formData.plans;
    plans.termChosen = event.target.value;
    setFormData({ ...formData, plans });

    setTerm(event.target.value);
  };

  const handleClick = (plan) => {
    plan.termChosen = term;
    setFormData({ ...formData, plans: plan });
  };

  return (
    <div className="planSelector">
      <div className="planCategory">
        {plans.map((plan) => {
          return (
            <label
              className="plan"
              onClick={() => {
                handleClick(plan);
              }}
            >
              <input
                type={"radio"}
                name="plan"
                className="planSelectorRadio"
                checked={formData.plans.title === plan.title}
              />
              <p style={{ width: "25px" }} className="planIcon">
                {plan.icon}
              </p>
              <div
                style={{
                  fontSize: "x-small",
                  width: "fit-content",
                }}
              >
                <span style={{ fontWeight: 500 }}>{plan.title}</span>
                <br />
                <span style={{ color: "hsl(231, 11%, 63%)" }}>
                  {term === "month"
                    ? `$${plan.monthlyPrice}/mo`
                    : `$${plan.yearlyPrice}/yr`}
                </span>
                <br />
                <span
                  style={
                    term === "year" ? { display: "block" } : { display: "none" }
                  }
                >
                  2 months free
                </span>
              </div>
            </label>
          );
        })}
      </div>
      <div className="termSwitch">
        <label>
          <span>Monthly</span>
          <input
            type={"radio"}
            name="planTerm"
            value={"month"}
            className={"termSwitchRadio"}
            checked={term === "month"}
            onClick={(event) => handlechooseTerm(event)}
            id={"monthly"}
          />
        </label>
        <span className="termSwitchToggle"></span>
        <label>
          <input
            type={"radio"}
            name="planTerm"
            value={"year"}
            className={"termSwitchRadio"}
            checked={term === "year"}
            id={"yearly"}
            onClick={(event) => handlechooseTerm(event)}
          />
          <span>Yearly</span>
        </label>
      </div>
    </div>
  );
}
