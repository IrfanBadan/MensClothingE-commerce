import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <CheckoutForm /> {/* ← This is the dynamic form with confirmation logic */}
    </div>
  );
}

export default Checkout;
