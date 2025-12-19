import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Group items by product ID
  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find(p => p.id === item.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
    } else {
      acc.push({ ...item, quantity: item.quantity || 1 });
    }
    return acc;
  }, []);

  // Calculate total
  const calculateTotal = () =>
    groupedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [displayTotal, setDisplayTotal] = useState(calculateTotal());

  useEffect(() => {
    setDisplayTotal(calculateTotal());
  }, [cartItems]);

  const animatedTotal = useSpring({
    from: { number: 0 },
    to: { number: displayTotal },
    config: { tension: 170, friction: 26 },
    reset: true
  });

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>

      {groupedItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {groupedItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          ))}

          {/* Animated Grand Total */}
          <div className="d-flex justify-content-end align-items-center mt-4">
            <h5 className="me-3 mb-0">Total Amount:</h5>
            <h4 className="fw-bold mb-0">
              ₹<animated.span>{animatedTotal.number.to(n => Math.floor(n))}</animated.span>
            </h4>
          </div>

          {/* Checkout Button */}
          <div className="text-end mt-3">
            <Link to="/checkout" className="btn btn-dark px-4 py-2">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
