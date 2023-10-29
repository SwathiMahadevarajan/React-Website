import ProgressBar from "../ProgressBar";

export default function ProgressBarPair({ starIndex = 1, progressValue = 35 }) {
  return (
    <div className=" progressBarPair">
      <span className="starName">{starIndex} star</span>
      <ProgressBar inputRequired={false} progValue={progressValue} />
    </div>
  );
}
