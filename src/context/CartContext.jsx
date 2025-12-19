import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart (merge if exists)
  const addToCart = item => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Increase quantity
  const increaseQuantity = id => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // Decrease quantity (min 1)
  const decreaseQuantity = id => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
