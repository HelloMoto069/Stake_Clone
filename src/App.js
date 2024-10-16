import { useState, useEffect } from "react";
import "./App.css";
import GameFeed from "./components/GameFeed";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Mine from "./components/mines/Mine";
import AllBets from "./components/mines/AllBets";
import WalletModal from "./components/WalletModal";
import AllTransactions from "./components/AllTransactions";
import Profile from "./components/Profile";

function App() {
  const [show, setShow] = useState(false);
  const [balance, setBalance] = useState(0);

  let toggleSidebar = () => {
    setShow(!show);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Fetch balance from local storage instead of backend
  const fetchBalance = () => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) {
      setBalance(parseFloat(savedBalance)); // Retrieve and set balance from local storage
    }
  };

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance); // Store updated balance in local storage
  };

  // Call fetchBalance when the component mounts
  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/" element={<SignIn></SignIn>}></Route>
        <Route
          path="/home"
          element={
            <Home
              toggleSidebar={toggleSidebar}
              show={show}
              balance={balance}
              handleShow={handleShow}
            ></Home>
          }
        >
          <Route index element={<GameFeed />} />
          <Route
            path="/home/mines"
            element={
              <Mine fetchBalance={fetchBalance} updateBalance={updateBalance} />
            }
          />
          <Route path="/home/allbets" element={<AllBets />} />
          <Route path="/home/alltransactions" element={<AllTransactions />} />
          <Route path="/home/profile" element={<Profile />} />
        </Route>
      </Routes>
      <WalletModal
        showModal={showModal}
        handleClose={handleClose}
        balance={balance}
        fetchBalance={fetchBalance}
      />
    </div>
  );
}

export default App;
