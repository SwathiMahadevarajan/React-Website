import React from "react";
function lazyImport({ path }) {
  return React.lazy(() => import(`${path}`));
}
const paths = [
  "./Beginner's Guide/Chapters/One",
  "./Beginner's Guide/Chapters/second",
  "./Beginner's Guide/Chapters/third",
  "./Beginner's Guide/Chapters/fourth",
  "./Beginner's Guide/Chapters/fifth",
  "./Beginner's Guide/Chapters/sixth",
  "./Beginner's Guide/Chapters/seventh",
  "./Beginner's Guide/Chapters/eight",
  "./Beginner's Guide/Chapters/ninth",
  "./Beginner's Guide/Chapters/tenth",
  "./Beginner's Guide/Chapters/eleven",
  "./Beginner's Guide/Chapters/twelfth",
  "./Beginner's Guide/Chapters/thirteen",
  "./Beginner's Guide/Chapters/fourteen",
  "./Beginner's Guide/Chapters/fifteenth",
  "./Beginner's Guide/Chapters/sixteenth",
  "./Beginner's Guide/Chapters/seventeeth",
  "./Beginner's Guide/Chapters/eighteenth",
  "./Beginner's Guide/Chapters/nineteenth",
  "./Beginner's Guide/Chapters/twenty",
  "./Beginner's Guide/Chapters/twentyOne",
  "./Beginner's Guide/Chapters/twentyTwo",
  "./Beginner's Guide/Chapters/twentyThree",
  "./Beginner's Guide/Chapters/twentyFour",
  "./Beginner's Guide/Chapters/twentyFive",
  "./Beginner's Guide/Chapters/twentysix",
  "./practices/StarRatingCard",
  "./practices/ProgressBar",
  "./practices/CustomerReview",
  "./practices/ResultSummary",
  "./practices/MultiStepForm",
  "./practices/Bulb",
  "./practices/WallClock",
  "./practices/RockPaperScissor",
];
export let Tabs = [];
paths.map((path, index) => (Tabs[index] = lazyImport({ path })));
