import "./addOnPicker.css";
export default function AddOnPicker({ formData, setFormData }) {
  const addOnChosen = formData.addOns;
  const addOns = [
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      title: "Large storage",
      desc: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];
  const handleClick = ({ event, addOn, id }) => {
    if (event.target.checked) {
      addOnChosen[id] = addOn;
    } else {
      addOnChosen[id] = "";
    }
    setFormData({ ...formData, addOns: addOnChosen });
  };
  return (
    <div className="addOnPicker">
      {addOns.map((addOn, id) => {
        return (
          <label className="addOn">
            <span>
              <input
                type={"checkbox"}
                checked={
                  formData.addOns[id] !== "" &&
                  formData.addOns[id] !== undefined
                    ? true
                    : false
                }
                onChange={(event) => handleClick({ event, addOn, id })}
              />
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: "700", color: "hsl(213, 96%, 18%)" }}>
                {addOn.title}
              </span>
              <span style={{ color: "hsl(231, 11%, 63%)" }}>{addOn.desc}</span>
            </div>
            <p style={{ color: "hsl(243, 100%, 62%)" }}>
              $
              {formData.plans.termChosen === "year"
                ? `${addOn.yearlyPrice}/yr`
                : `${addOn.monthlyPrice}/mo`}
            </p>
          </label>
        );
      })}
    </div>
  );
}
