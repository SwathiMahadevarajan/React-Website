import { useState } from "react";
import { gameElements } from "./data";
import { GameElement } from "components";
import { WinnersBoard } from "./WinnerBoard";
import { Modal } from "components/Base/Modal";
import { RockPaperScissorRules } from "assets";

const decideWinner = (userChoice, setWinner, score, setScore) => {
  const computerChoice = Math.floor(Math.random() * 3);
  const userChoiceIndex = gameElements.findIndex(
    (element) => element.name === userChoice.name
  );
  const winner = {
    user: userChoice,
    computer: gameElements[computerChoice],
    userWon: null,
  };
  const computerChoiceIndex = gameElements.findIndex(
    (element) => element.name === gameElements[computerChoice].name
  );
  if (userChoiceIndex === computerChoiceIndex) {
    winner.userWon = null;
  } else if (
    (userChoiceIndex === 0 && computerChoiceIndex === 2) ||
    (userChoiceIndex === 1 && computerChoiceIndex === 0) ||
    (userChoiceIndex === 2 && computerChoiceIndex === 1)
  ) {
    winner.userWon = true;
  } else {
    winner.userWon = false;
  }
  setWinner(winner);
  winner.userWon && setScore(score + 1);
};

export const GameBoard = ({ score, setScore }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [winner, setWinner] = useState({
    user: null,
    computer: null,
    userWon: null,
  });
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="gameBoard">
      {isPlaying ? (
        <div className="gameElements">
          {gameElements.map((element, index) => (
            <GameElement
              {...element}
              clickable={isPlaying}
              index={index}
              setIsPlaying={setIsPlaying}
              onClick={(userChoice) => {
                decideWinner(userChoice, setWinner, score, setScore);
                setIsPlaying(false);
              }}
            />
          ))}
        </div>
      ) : (
        <WinnersBoard {...winner} setIsPlaying={setIsPlaying} />
      )}
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <RockPaperScissorRules height="300px" width="50px" />
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>Rules</button>
    </div>
  );
};
