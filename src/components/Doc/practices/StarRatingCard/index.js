import { useRef, useState } from "react";
import Star from "./Star";
import "./starRatingStyle.css";
export default function StarRating({ starCount = 5, setClickObject, starRef }) {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const ratingValueRef = useRef();

  const handleClick = (event) => {
    let index;
    if (event.target.parentElement.getAttribute("class") === "star") {
      index = Number(
        event.target.parentElement.parentElement.dataset.starIndex
      );
      setActiveIndex(index);
      setClickedIndex(index);
      setClickObject(index);
    }
  };

  const handleMouseOut = (event) => {
    if (event.target.parentElement.getAttribute("class") === "star") {
      setActiveIndex(clickedIndex);
      ratingValueRef.current.style.opacity = `100%`;
    }
  };

  const handleMouseOver = (event) => {
    let index;
    if (event.target.parentElement.getAttribute("class") === "star") {
      index = Number(
        event.target.parentElement.parentElement.dataset.starIndex
      );
      setActiveIndex(index);
      ratingValueRef.current.style.opacity = `60%`;
    }
  };

  const stars = Array(starCount).fill(0);

  return (
    <div className="rating" ref={starRef}>
      <div
        className="stars"
        onClick={handleClick}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        {stars.map((star, index) => {
          return <Star active={activeIndex >= index} index={index} />;
        })}
      </div>

      <p>
        <span ref={ratingValueRef}>{activeIndex + 1}</span> out of{" "}
        <span>{starCount}</span>
      </p>
    </div>
  );
}
