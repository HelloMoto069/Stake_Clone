import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaWallet } from 'react-icons/fa';

const WalletModal = ({ showModal, handleClose, updateBalance, balance }) => {
  const [amount, setAmount] = useState(0);
  const [action, setAction] = useState('deposit'); // 'deposit' or 'withdraw'
  const [message, setMessage] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleActionChange = (actionType) => {
    setMessage("");
    setAction(actionType);
    setAmount(0); // Reset amount when changing action
  };

  const handleSubmit = () => {
    const amountValue = parseInt(amount);
    if (action === 'deposit') {
      // Handle deposit logic here
      updateBalance(amountValue); // Use the passed updateBalance function
      console.log(`Deposited: $${amountValue}`);
    } else {
      // Handle withdrawal logic here
      if (amountValue > balance) {
        setMessage("You don't have enough balance!");
      } else {
        updateBalance(-amountValue); // Use the passed updateBalance function
        console.log(`Withdrew: $${amountValue}`);
      }
    }
    // Close the modal after submission
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaWallet size={24} style={{ marginRight: '10px' }} />
          <h5 className="modal-title">Wallet</h5>
        </div>
        <Button variant="close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <h5>Balance: ${balance}</h5> {/* Use the balance prop */}
        <div className="mb-3">
          <Button 
            variant={action === 'deposit' ? 'primary' : 'secondary'} 
            onClick={() => handleActionChange('deposit')}
            className="me-2"
          >
            Deposit
          </Button>
          <Button 
            variant={action === 'withdraw' ? 'primary' : 'secondary'} 
            onClick={() => handleActionChange('withdraw')}
          >
            Withdraw
          </Button>
        </div>
        <div>
          <input 
            type="number" 
            onChange={handleAmountChange} 
            placeholder={`Enter amount to ${action}`} 
            className="form-control" 
          />
        </div>
        {message && <div className="text-danger">{message}</div>} {/* Show error message */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {action === 'deposit' ? 'Deposit' : 'Withdraw'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WalletModal;
