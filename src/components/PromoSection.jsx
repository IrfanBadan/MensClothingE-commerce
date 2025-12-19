import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PromoSection.css';

function PromoSection() {
  const navigate = useNavigate();
  return (
    <section className="promo-section container text-center ">
      <img src="/images/banner10.jpg" alt="Tee Banner" className="img-fluid mb-4 promoImage" />
      <h2 className="fw-bold">Tee Up Your Style</h2>
      <p className="text-muted">
        Life is too short for boring tees.
        <br />
        Let the power of print take over!
      </p>
      <button className="btn btn-dark mt-3 shop-btn" onClick={() => navigate('/products')}>
        Shop Collection
      </button>
    </section>
  );
}

export default PromoSection;
