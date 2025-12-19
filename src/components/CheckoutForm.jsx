import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

function CheckoutForm() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const confirmationRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    setOrderPlaced(true);

    // Fire cracker-style confetti
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF0000', '#000080 ', '#FFD700',],
    });
  };

  return (
    <div>
      {!orderPlaced ? (
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="col-12">
            <label className="form-label">Shipping Address</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Payment Method</label>
            <select className="form-select">
              <option>Credit Card</option>
              <option>UPI</option>
              <option>Cash on Delivery</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark w-100">Place Order</button>
          </div>
        </form>
      ) : (
        <div ref={confirmationRef} className="order-confirmation text-center py-5">
          <h2 className="fw-bold">🎉 Order Placed Successfully!</h2>
          <p className="lead">Thank you for shopping with MEN'S FASHION.</p>
        </div>
      )}
    </div>
  );
}

export default CheckoutForm;
