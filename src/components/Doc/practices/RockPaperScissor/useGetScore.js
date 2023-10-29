import { useState } from "react";

export const useGetScore = () => {
  const storedScore = JSON.parse(localStorage.getItem("score"));
  const [score, setScore] = useState(storedScore || 0);
  if (!storedScore) localStorage.setItem("score", "0");
  const setScoreLocally = (score) => {
    setScore(score);
    localStorage.setItem("score", JSON.stringify(score));
  };
  const resetScore = () => {
    setScore(0);
    localStorage.setItem("score", "0");
  };
  return [score, setScoreLocally, resetScore];
};
