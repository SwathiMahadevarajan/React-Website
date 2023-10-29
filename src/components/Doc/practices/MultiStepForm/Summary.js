import "./multiStepFormSummary.css";

export default function Summary({ formData, setCurrentPage }) {
  const planPrice =
    formData.plans.termChosen === "month"
      ? formData.plans.monthlyPrice
      : formData.plans.yearlyPrice;
  let term = formData.plans.termChosen === "month" ? "/mo" : "/yr";
  let totalPrice = planPrice;
  let price;
  return (
    <>
      <div className="formSummary">
        <div className="planDetails">
          <div className="planTitle">
            <span className="planTitleSpan">{`${formData.plans.title}(${formData.plans.termChosen}ly)`}</span>
            <span>
              <button
                onClick={() => setCurrentPage(1)}
                className={"changePlan"}
              >
                Change
              </button>
            </span>
          </div>
          <div className={"planPrice"}>
            ${planPrice}
            {term}
          </div>
        </div>
        <hr />
        <div className="addOnsChosen">
          {formData.addOns.map((item) => {
            if (item === "") return <></>;
            price =
              formData.plans.termChosen === "month"
                ? item.monthlyPrice
                : item.yearlyPrice;

            totalPrice = totalPrice + price;
            return (
              <div className="addOnChosen">
                <span className="addOnTitle">{item.title}</span>
                <span className="addOnPrice">
                  {`+$${price}`}
                  {term}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="totalPrice">
        <span className="totalPriceLabel">{`Total(per ${formData.plans.termChosen})`}</span>
        <span className="totalPriceValue">
          {`$${totalPrice}`}
          {term}
        </span>
      </div>
    </>
  );
}
