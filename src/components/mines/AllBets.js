import React, { useState, useEffect } from "react";
import "./AllBets.css"; // Import your custom CSS file

const AllBets = () => {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    // Function to load bets from local storage
    const loadBetsFromLocalStorage = () => {
      const storedBets = localStorage.getItem("bets"); // Retrieve bets from local storage
      if (storedBets) {
        setBets(JSON.parse(storedBets)); // Parse and set the bets
      }
    };

    loadBetsFromLocalStorage();
  }, []);

  // useEffect(() => {
  //   const fetchBetTransactions = () => {
  //     const storedTransactions =
  //       JSON.parse(localStorage.getItem("transactions")) || [];
  //     // Filter transactions to only include 'Win' or 'Loss'
  //     const betTrans = storedTransactions.filter(
  //       (tran) => tran.type === "Win" || tran.type === "Loss"
  //     );
  //     setBets(betTrans);
  //   };

  //   fetchBetTransactions();
  // }, []);

  return (
    <div className="bets-container" style={{ minHeight: "100vh" }}>
      <h1 style={{ color: "white" }}>My Bets</h1>
      {bets.length === 0 ? ( // Check if bets array is empty
        <div className="no-bets" style={{ color: "white" }}>
          No bets found.
        </div>
      ) : (
        bets.reverse().map(
          (
            bet // Display bets if available
          ) => (
            <div
              key={bet._id}
              className={`bet-card ${
                bet.outcome === "Lose" ? "losing-bet" : "winning-bet"
              }`}
            >
              <span className="game-name">{bet.game_name}</span>
              <span className="bet-amount">Bet: ${bet.bet_amount}</span>
              <span className="payout-amount">
                Payout: ${bet.payout_amount}
              </span>
              <span className="outcome">{bet.outcome}</span>
            </div>
          )
        )
      )}
    </div>
  );
};

export default AllBets;
