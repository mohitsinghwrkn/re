import { useEffect, useState } from "react";
import "./Game.css";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const selection = ["🧱", "📰", "✂️", "🦎", "🖖"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice =
      selection[Math.floor(Math.random() * selection.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "✂️📰":
        case "🧱✂️":
        case "📰🧱":
        case "🦎📰":
        case "🖖✂️":
        case "🧱🦎":
        case "📰🖖":
        case "🖖🧱":
        case "✂️🦎":
        case "🦎🖖":
          setResult("YOU WON! 🎉");
          break;
        case "📰✂️":
        case "✂️🧱":
        case "🧱📰":
        case "📰🦎":
        case "✂️🖖":
        case "🦎🧱":
        case "🖖📰":
        case "🧱🖖":
        case "🦎✂️":
        case "🖖🦎":
          setResult("YOU LOSE! 👎 ");
          break;
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          setResult("IT'S A DRAW! 💥 ");
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div className="game-body">

      <h1 className="game-heading">Rock Paper Scissors lizard Spock</h1>
      <div>
        <div className="game-container">
          <div className="game-section">
            <div className="game-info">
              <h3 className="game-h3">You</h3>
            </div>
            <div className="game-show">{userChoice}</div>
          </div>

          <div className="game-section">
            <div className="game-info">
              <h3 className="game-h3">Computer</h3>
            </div>
            <div className="game-show computer">{computerChoice}</div>
          </div>
        </div>
        <h2 className="game-h2">{result} </h2>

        <div className="attack-btn">
          {selection.map((choice, index) => (
            <button className="game-button" key={index} onClick={() => handleClick(choice)}>
              <div className="emojiSize">{choice}</div>
            </button>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Game;
