import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBagShopping,
  FaAddressBook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa6';
import { FaAddressCard } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        {/* Brand + Tagline */}
        <div className="mb-4">
          <h4 className="fw-bold">MEN'S FASHION</h4>
          <p className="text-light">
            We take the whole responsibility<br /> for your style !
          </p>
        </div>

        {/* Links */}
        <div className="mb-4">
          <h6 className="fw-bold">Links</h6>
          <Link to="/products" className="text-white text-decoration-none d-block mb-2">
            <FaBagShopping className="me-2" /> Shop
          </Link>
          <Link to="/about" className="text-white text-decoration-none d-block mb-2">
            <FaAddressCard className="me-2" /> About
          </Link>
          <Link to="/contact" className="text-white text-decoration-none d-block">
            <FaAddressBook className="me-2" /> Contact
          </Link>
        </div>

        {/* Social Media */}
        <div className="mb-4">
          <h6 className="fw-bold">Follow</h6>
          <a
            href="https://www.instagram.com/irfan_badan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none d-block mb-2"
          >
            <FaInstagram className="me-2" /> Instagram
          </a>
          <a
            href="#"
            className="text-white text-decoration-none d-block mb-2"
          >
            <FaTwitter className="me-2" /> Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-badan2305"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none d-block"
          >
            <FaLinkedin className="me-2" /> LinkedIn
          </a>
        </div>
      </div>

      <hr className="border-light" />
      <p className="text-center mb-0 text-light">
        &copy; {new Date().getFullYear()} MEN'S FASHION. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
