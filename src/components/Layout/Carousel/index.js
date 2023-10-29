import { useEffect, useState } from "react";
import "./carousel.css";

export default function Carousel({ carouselItems }) {
  const [index, setIndex] = useState(0);

  const handleScroll = () => {
    if (index + 1 === carouselItems.length) setIndex(0);
    else setIndex((index) => index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel">
      <button
        onClick={() => {
          if (index === 0) setIndex(carouselItems.length - 1);
          else setIndex((index) => index - 1);
        }}
      >
        &#706;
      </button>
      <div className="carouselCard">
        <div>
          <div>
            <p>
              <b>{carouselItems[index].name}</b>
            </p>
            <p style={{ fontSize: "small" }}>
              <i>{carouselItems[index].position}</i>
            </p>
          </div>
          <br />
          <p style={{ fontSize: "smaller" }}>
            &#8220;{carouselItems[index].desc}&#8221;
          </p>
        </div>
        <div style={{ height: "100px" }}>
          <img src={carouselItems[index].photo} />
        </div>
      </div>
      <button onClick={handleScroll}>&#707;</button>
    </div>
  );
}
