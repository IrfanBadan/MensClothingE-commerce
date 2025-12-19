import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { WishlistContext } from '../context/WishlistContext';
import gsap from 'gsap';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { wishlistItems } = useContext(WishlistContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      gsap.fromTo('.cart-badge', { scale: 0 }, { scale: 1, duration: 0.3 });
    }
  }, [cartItems]);

  useEffect(() => {
    if (wishlistItems.length > 0) {
      gsap.fromTo('.wishlist-badge', { scale: 0 }, { scale: 1, duration: 0.3 });
    }
  }, [wishlistItems]);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm px-4 sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left: Brand */}
        <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">LooQue</Link>

        {/* Center: Search */}
        <form className="d-none d-md-block mx-auto" style={{ width: '400px' }} onSubmit={handleSearch}>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <FaSearch className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control bg-light border-start-0"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>

        {/* Right: Icons */}
        <div className="d-flex align-items-center gap-3">
          {/* Wishlist */}
          <Link className="position-relative text-dark fs-5" to="/wishlist">
            <FaHeart />
            {wishlistItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger wishlist-badge" style={{ fontSize: '0.6rem' }}>
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link className="position-relative text-dark fs-5" to="/cart">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark cart-badge" style={{ fontSize: '0.6rem' }}>
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Auth Button */}
          {user ? (
            <>
              <div className="btn btn-outline-dark rounded-circle fw-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>

              {/* Admin Dashboard Link */}
              {user?.role === 'admin' && (
                <Link to="/dashboard" className="btn btn-outline-dark px-3">
                  Dashboard
                </Link>
              )}

            </>
          ) : (
            <button
              className="btn btn-dark rounded-pill px-3"
              onClick={() => navigate('/login')}
            >
              <FaUser className="me-2" />
              Sign In / Sign Up
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
