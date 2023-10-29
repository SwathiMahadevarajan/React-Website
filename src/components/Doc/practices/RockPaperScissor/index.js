import { GameBoard } from "./GameBoard";
import { Scoreboard } from "./Scoreboard";
import "./styles.css";
import { useGetScore } from "./useGetScore";
const RockPaperScissor = () => {
  const [score, setScore] = useGetScore();
  return (
    <div className="rock-paper-scissor-game">
      <Scoreboard score={score} />
      <GameBoard score={score} setScore={setScore} />
    </div>
  );
};
export default RockPaperScissor;
