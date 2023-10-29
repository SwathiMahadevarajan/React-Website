export const Scoreboard = ({ score = 0 }) => {
  return (
    <div className="scoreBoard">
      <div className="title">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </div>
      <div className="scoreCard">
        <span>SCORE</span>
        <span className="score">{score}</span>
      </div>
    </div>
  );
};
