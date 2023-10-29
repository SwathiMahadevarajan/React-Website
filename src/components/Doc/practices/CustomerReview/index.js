import React, { useEffect, useRef, useState } from "react";
import StarRating from "../StarRatingCard";
import ProgressBarPair from "./ProgressBarPair";
import useGetCustomerSummary from "api/customers/useGetCustomerSummary";
import useGetCustomerRating from "api/customers/useGetCustomerRating";
import "./customerReviewStyle.css";
import useUpdateCustomerSummary from "api/customers/useUpdateCustomerSummary";
import useUpdateCustomerRating from "api/customers/useUpdateCustomerRating";

export default function CustomerReview({ starCount = 5 } = {}) {
  let starArray = [];
  let clickCount = 0;
  let progressValue = Array(starCount).fill(0);

  const starRef = useRef();
  const customerSummary = useGetCustomerSummary();
  const customerRating = useGetCustomerRating();
  const setCustomerSummary = useUpdateCustomerSummary();
  const setCustomerRating = useUpdateCustomerRating();
  let custSummary = [];

  const updateProgressValue = () => {
    let countArray = [0, 0, 0, 0, 0];
    custSummary = [];

    starArray.forEach((element) => {
      let starIndex = Number(element.starRating) - 1;
      countArray[starIndex] += 1;
    });

    countArray.forEach((clickCounter, i) => {
      progressValue[i] = Math.round((clickCounter / clickCount) * 100);
      custSummary.push({
        id: i,
        starIndex: i,
        clickCount: clickCounter,
        clickPercent: progressValue[i],
      });
    });
    setCustomerSummary.action({ payload: custSummary });
  };

  const handleStarClick = (starClicked) => {
    let clickObject = { starRating: starClicked + 1, createdAt: new Date() };
    clickCount++;
    starArray = starArray.concat(clickObject);
    starRef.current.className.concat("disabled");
    setCustomerRating.action({ payload: clickObject });
    updateProgressValue();
  };

  useEffect(() => {
    if (customerSummary.data && customerRating.data) {
      custSummary = customerSummary.data;
      for (let i = 0; i < Object.keys(custSummary).length - 1; i++) {
        progressValue[i] = custSummary[i].clickPercent;
      }
      starArray = customerRating.data;
      clickCount = customerRating.data.length;
    }
  }, [customerSummary.data, customerRating.data]);

  useEffect(() => {
    customerRating.action();
    customerSummary.action();
  }, [setCustomerSummary.loading, setCustomerRating.loading]);

  return (
    <div className="customerReview">
      <StarRating
        starCount={starCount}
        setClickObject={handleStarClick}
        starRef={starRef}
      />
      <p id="customerCount">
        {customerRating.data ? customerRating.data.length : clickCount} customer
        ratings
      </p>
      <div className="progressRateCont">
        {customerSummary.data && !customerSummary.loading
          ? progressValue.map((_, index) => {
              let progressValue = customerSummary.data[index].clickPercent;
              return (
                <ProgressBarPair
                  starIndex={index + 1}
                  progressValue={progressValue}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}
