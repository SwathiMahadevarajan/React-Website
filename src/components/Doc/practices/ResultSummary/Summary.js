import Category from "./Category";
import data from "./summaryData.json";
import { ReactComponent as MemoryIcon } from "assets/icons/icon-memory.svg";
import { ReactComponent as ReactionIcon } from "assets/icons/icon-reaction.svg";
import { ReactComponent as VerbalIcon } from "assets/icons/icon-verbal.svg";
import { ReactComponent as VisualIcon } from "assets/icons/icon-visual.svg";

export default function Summary() {
  const icons = [
    <ReactionIcon />,
    <MemoryIcon />,
    <VerbalIcon />,
    <VisualIcon />,
  ];
  return (
    <div className="summary">
      <h4>Summary</h4>
      {data.map((item, index) => {
        return (
          <Category
            categoryIcon={icons[index]}
            categoryName={item.category}
            categoryScore={item.score}
            categoryBgColor={item.bgColor}
            categoryFontColor={item.color}
          />
        );
      })}
      <button id="continue">Continue</button>
    </div>
  );
}
