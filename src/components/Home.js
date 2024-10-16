import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import WalletModal from "./WalletModal";

export default function Home(props) {
  const [balance, setBalance] = useState(0); // Local state for balance
  const [showWalletModal, setShowWalletModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log(storedUsers);
    // Load the balance from local storage when the component mounts
    const storedBalance = localStorage.getItem("balance");
    setBalance(storedBalance ? parseInt(storedBalance) : 0);
  });

  const handleShow = () => setShowWalletModal(true);
  const handleClose = () => setShowWalletModal(false);

  // Function to update the balance
  // const updateBalance = (amount) => {
  //   const newBalance = balance + amount;
  //   setBalance(newBalance);
  //   localStorage.setItem("balance", newBalance); // Update balance in local storage
  // };

  const updateBalance = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance); // Update balance in local storage

    if (amount > 0) {
      storeTransaction("Deposit", amount); // Store deposit transaction
    } else {
      storeTransaction("Withdrawal", amount); // Store withdrawal transaction
    }
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

  return (
    <div>
      <Navbar
        toggleSidebar={props.toggleSidebar}
        show={props.show}
        balance={balance} // Pass balance to Navbar
        handleShow={handleShow} // Pass handler to show modal
      />
      <Sidebar
        show={props.show}
        handleShow={handleShow}
        style={{ width: "15%" }}
      />
      <div>
        <Outlet />
      </div>
      <WalletModal
        showModal={showWalletModal}
        handleClose={handleClose}
        updateBalance={updateBalance} // Pass updateBalance function to modal
        balance={balance} // Pass the current balance to WalletModal
      />
    </div>
  );
}
