import React, { useState, useEffect } from "react";
import "./AllTransactions.css"; // Import your custom CSS file

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const userId = localStorage.getItem("userId");

  // // Fetch transactions from local storage
  // useEffect(() => {
  //     const fetchTrans = () => {
  //         const storedTransactions = localStorage.getItem('transactions');
  //         if (storedTransactions) {
  //             setTransactions(JSON.parse(storedTransactions));
  //         }
  //     };

  //     fetchTrans();
  // }, []); // Run only on component mount

  useEffect(() => {
    const fetchTrans = () => {
      const storedTransactions = localStorage.getItem("transactions");
      if (storedTransactions) {
        setTransactions(JSON.parse(storedTransactions));
      }
    };

    fetchTrans();
  }, []);

  return (
    <div className="bets-container" style={{ minHeight: "100vh" }}>
      <h1 style={{ color: "white" }}>My Transactions</h1>
      {transactions.length > 0 ? (
        transactions.reverse().map((tran, index) => (
          <div
            key={index}
            className={`bet-card ${
              tran.type === "Loss"
                ? "losing-bet"
                : tran.type === "Withdrawal"
                ? "losing-bet"
                : "winning-bet"
            }`}
          >
            <span className="game-name">Type: {tran.type}</span>
            <span className="bet-amount">Amount: ${tran.amount}</span>
            <span className="payout-amount">Date: {tran.date}</span>
          </div>
        ))
      ) : (
        <p style={{ color: "white" }}>No transactions found.</p>
      )}
    </div>
  );
};

export default AllTransactions;
