import Result from "./Result";
import Summary from "./Summary";
import "./resultSummaryStyle.css";

export default function ResultSummaryComponent() {
  return (
    <div className="resultSummary col-resultsummary">
      <Result />
      <Summary />
    </div>
  );
}
