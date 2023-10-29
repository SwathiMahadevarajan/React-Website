import StarSvg from "assets/icons/starsvg.js";
export default function Star({
  height = 30,
  width = 33,
  svgns = "http://www.w3.org/2000/svg",
  active,
  index,
} = {}) {
  return (
    <button key={index} data-star-index={index} className={"starsvg "}>
      <StarSvg className={active ? "highlighted" : " "} />
    </button>
  );
}
