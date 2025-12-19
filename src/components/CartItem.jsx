import React from 'react';
import './CartItem.css';

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  if (!item) return null;

  const quantity = item.quantity || 1;
  const totalPrice = item.price * quantity;

  return (
    <div className="card mb-3 shadow-sm cart-item-card">
      <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Left: Image + Info */}
        <div className="d-flex align-items-center mb-3 mb-md-0">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="me-3 rounded"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
          )}
          <div>
            <h6 className="mb-1">{item.name}</h6>
            <small className="text-muted d-block">Unit Price: ₹{item.price}</small>

            {/* Quantity Controls */}
            <div className="quantity-controls d-flex align-items-center mt-2">
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => onDecrease(item.id)}
              >
                –
              </button>
              <span className="fw-bold">{quantity}</span>
              <button
                className="btn btn-sm btn-outline-secondary ms-2"
                onClick={() => onIncrease(item.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Right: Total + Remove */}
        <div className="text-md-end text-start">
          <p className="mb-1 fw-bold">Total: ₹{totalPrice}</p>
          <button
            className="btn btn-sm btn-outline-danger remove-btn"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
