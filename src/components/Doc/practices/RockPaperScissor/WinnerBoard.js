import { GameElement } from "components/Base";
import "./winnerBoardStyles.css";
export const WinnersBoard = (props) => {
  const { user, computer, userWon, setIsPlaying } = props;
  return (
    <div className="winnersboard">
      <div className={`choice ${userWon && "spotlight"}`}>
        You Picked
        <GameElement {...user} clickable={false} />
      </div>
      <div className="winnerDeclaration">
        <span>
          {userWon === null ? "It's a tie" : userWon ? "You Won" : "You Lost"}
        </span>
        <button className="playAgainButton" onClick={() => setIsPlaying(true)}>
          Play Again
        </button>
      </div>
      <div className={`choice ${userWon === false && "spotlight"}`}>
        Computer Picked
        <GameElement {...computer} />
      </div>
    </div>
  );
};
