import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser, FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { WishlistContext } from '../context/WishlistContext';
import gsap from 'gsap';
import './Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { wishlistItems } = useContext(WishlistContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchOverlayRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      gsap.to(searchOverlayRef.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.4,
        ease: 'power2.out'
      });
    } else {
      gsap.to(searchOverlayRef.current, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.3
      });
    }
  }, [isSearchOpen]);

  // Sidebar Stagger Animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo('.sidebar-link-item',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.2 }
      );
      gsap.fromTo('.sidebar-footer',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.6, ease: 'power2.out' }
      );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (cartItems.length > 0) {
      gsap.fromTo('.cart-badge', { scale: 0 }, { scale: 1, duration: 0.3 });
    }
  }, [cartItems]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom sticky-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* Hamburger (Mobile) */}
          <button className="hamburger-btn d-lg-none" onClick={() => setIsMenuOpen(true)}>
            <FaBars />
          </button>

          {/* Left: Brand */}
          <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">LooQue</Link>

          {/* Center: Desktop Links & Search */}
          <div className="d-none d-lg-flex align-items-center flex-grow-1 justify-content-center gap-4">
            <div className="d-flex gap-4 me-4">
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} className="text-dark text-decoration-none fw-semibold">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Search Bar */}
            <form className="mx-2" style={{ width: '300px' }} onSubmit={handleSearch}>
              <div className="input-group">
                <span className="input-group-text bg-light border-0 py-2">
                  <FaSearch className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control bg-light border-0 shadow-none py-2"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Right: Icons */}
          <div className="nav-icons-wrapper">
            {/* Search Toggle (Mobile) */}
            <button
              className="btn btn-link text-dark p-0 d-lg-none nav-icon-link"
              onClick={() => setIsSearchOpen(true)}
            >
              <FaSearch />
            </button>

            {/* Wishlist */}
            <Link className="nav-icon-link d-none d-lg-flex" to="/wishlist">
              <FaHeart />
              {wishlistItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger wishlist-badge">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link className="nav-icon-link" to="/cart">
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark cart-badge">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Auth Button */}
            {user ? (
              <div className="dropdown">
                <button className="btn btn-outline-dark rounded-circle fw-bold p-0 d-none d-lg-flex" style={{ width: '35px', height: '35px' }}>
                  {user.name.charAt(0).toUpperCase()}
                </button>
              </div>
            ) : (
              <button
                className="btn btn-dark rounded-pill px-3 d-none d-lg-flex align-items-center gap-2"
                onClick={() => navigate('/login')}
              >
                <FaUser size={14} />
                <span style={{ fontSize: '0.9rem' }}>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />
      <div className={`mobile-sidebar ${isMenuOpen ? 'active' : ''}`}>
        <button className="sidebar-close" onClick={() => setIsMenuOpen(false)}>
          <FaTimes />
        </button>

        <ul className="sidebar-links">
          {navLinks.map(link => (
            <li key={link.name} className="sidebar-link-item" style={{ opacity: 0 }}>
              <Link to={link.path} className="sidebar-link" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li className="sidebar-link-item" style={{ opacity: 0 }}>
            <Link to="/wishlist" className="sidebar-link" onClick={() => setIsMenuOpen(false)}>
              Wishlist
            </Link>
          </li>
        </ul>

        <div className="sidebar-footer" style={{ opacity: 0 }}>
          {user ? (
            <div className="d-flex align-items-center gap-3">
              <div className="btn btn-dark rounded-circle fw-bold">{user.name.charAt(0).toUpperCase()}</div>
              <div>
                <div className="fw-bold">{user.name}</div>
                <small className="text-muted">Account Settings</small>
              </div>
            </div>
          ) : (
            <button className="btn btn-dark w-100 rounded-pill py-3" onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>
              Sign In / Sign Up
            </button>
          )}
        </div>
      </div>

      {/* Mobile Search Overlay */}
      <div className={`mobile-search-overlay ${isSearchOpen ? 'active' : ''}`} ref={searchOverlayRef}>
        <button className="close-search" onClick={() => setIsSearchOpen(false)}>
          <FaTimes />
        </button>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="mobile-search-input"
            placeholder="Search our collection..."
            autoFocus={isSearchOpen}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

export default Navbar;
