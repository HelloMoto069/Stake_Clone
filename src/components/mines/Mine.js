import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Square from "./Square";
import "./mine.css";

// Function to generate random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate unique random mines
function generateRandomMines() {
  let randomNumbers = [];
  while (randomNumbers.length < 3) {
    let randomNumber = getRandomInt(1, 25);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

export default function Mine() {
  const navigate = useNavigate();
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [betAmount, setBetAmount] = useState(10);
  const [multiplier, setMultiplier] = useState(1);
  const [mines, setMines] = useState(generateRandomMines());
  const [resetFlag, setResetFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(() => {
    // Get the balance from local storage or set to a default value
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? Number(storedBalance) : 100; // Set initial balance to 100
  });

  useEffect(() => {
    // Check if user is logged in
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleReset = () => {
    setGameOver(false);
    setScore(0);
    setBetAmount(10);
    setMultiplier(1);
    setMines(generateRandomMines());
    setResetFlag((prevFlag) => !prevFlag);
    setMessage("");
  };

  // const handleCollect = () => {
  //   const winnings = score;
  //   setMessage(`You collected: ${winnings} points!`);
  //   updateBalance(winnings); // Add winnings to user's balance
  //   storeBetTransaction("Mines", betAmount, winnings, "Win"); // Store winning bet
  //   setGameOver(true);
  //   setTimeout(() => {
  //     handleReset();
  //   }, 1500);
  // };

  // const handleLoss = () => {
  //   setMessage(
  //     `You lost ${betAmount} points from your balance. Better luck next time!`
  //   );
  //   updateBalance(-betAmount); // Deduct bet amount from user's balance
  //   storeBetTransaction("Mines", betAmount, 0, "Lose"); // Store losing bet
  //   setTimeout(() => {
  //     handleReset();
  //   }, 1500);
  // };

  const storeBetTransaction = (gameName, betAmount, payoutAmount, outcome) => {
    const newBet = {
      _id: new Date().getTime(), // Use timestamp as unique ID
      game_name: gameName,
      bet_amount: betAmount,
      payout_amount: payoutAmount,
      outcome: outcome,
    };

    // Retrieve current bets from local storage
    const storedBets = localStorage.getItem("bets");
    const betsArray = storedBets ? JSON.parse(storedBets) : [];

    // Add new bet to the array and store it back in local storage
    betsArray.push(newBet);
    localStorage.setItem("bets", JSON.stringify(betsArray));
  };

  const handleCollect = () => {
    const winnings = score;
    setMessage(`You collected: ${winnings} points!`);
    updateBalance(winnings); // Add winnings to user's balance

    storeTransaction("Win", winnings); // Store the win transaction
    storeBetTransaction("Mines", betAmount, winnings, "Win"); // Store winning bet

    setGameOver(true);
    setTimeout(() => {
      handleReset();
    }, 1500);
  };

  const handleLoss = () => {
    setMessage(
      `You lost ${betAmount} points from your balance. Better luck next time!`
    );
    updateBalance(-betAmount); // Deduct bet amount from user's balance

    storeTransaction("Loss", -betAmount); // Store the loss transaction
    storeBetTransaction("Mines", betAmount, 0, "Lose"); // Store losing bet

    setTimeout(() => {
      handleReset();
    }, 1500);
  };

  const storeTransaction = (type, amount) => {
    const transaction = {
      type,
      amount,
      date: new Date().toLocaleString(),
    };

    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    storedTransactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(storedTransactions));
  };

  const handleStartGame = () => {
    // Check if the user has enough balance to place the bet
    if (betAmount > balance) {
      setMessage("Insufficient balance! Please lower your bet.");
      return;
    }
    setMessage("Game Started!! Try your luck!!");
    setGameOver(false); // Start the game
  };

  const updateBalance = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance); // Update balance in local storage
  };

  let items = [];
  for (let index = 1; index <= 25; index++) {
    items.push(
      <Square
        key={index}
        mine={mines.includes(index)}
        gameOver={gameOver}
        setGameOver={(isGameOver) => {
          setGameOver(isGameOver);
          if (isGameOver) {
            handleLoss(); // Handle balance deduction on loss
          }
        }}
        betAmount={betAmount}
        setScore={setScore}
        setMultiplier={setMultiplier}
        multiplier={multiplier}
        resetFlag={resetFlag} // Pass resetFlag to Square
      />
    );
  }

  return (
    <div
      className="game-container"
      style={{ backgroundColor: "#282c34", height: "100vh" }}
    >
      <div className="left-panel">
        <div className="balance-section">
          <h3>Balance</h3>
          <p>{balance} points</p>
        </div>
        <div className="bet-section">
          <h3>Bet Amount</h3>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
          />
        </div>
        <div className="multiplier-section">
          <h3>Multiplier</h3>
          <p>{multiplier}x</p>
        </div>
        <div className="score-section">
          <h3>Score</h3>
          <p>{score}</p>
        </div>
        <div className="buttons">
          <button
            className="collect-btn"
            onClick={handleCollect}
            disabled={gameOver}
          >
            Collect Winnings
          </button>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-primary" onClick={handleStartGame}>
            Bet
          </button>
        </div>
        <div>
          <span style={{ fontSize: "30px" }}>{message}</span>
        </div>
      </div>
      <div className="right-panel d-grid">{items}</div>
    </div>
  );
}
