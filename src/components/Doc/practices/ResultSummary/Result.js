import Circle from "./Circle";

export default function Result({
  score = 76,
  percentComp = 65,
  feedback = "Great",
}) {
  return (
    <div className="result col-result">
      <p style={{ fontWeight: 500 }} className="palewhite">
        Your Result
      </p>
      <Circle>
        <p style={{ fontSize: "xxx-large", fontWeight: 700 }}>{score}</p>
        <span className="palewhite">of 100</span>
      </Circle>
      <div>
        <p style={{ fontSize: "x-large", fontWeight: 500 }}>{feedback}</p>
        <p className="palewhite">
          You scored higher than {percentComp}% of the people who have taken
          these tests.
        </p>
      </div>
    </div>
  );
}
