import React from 'react';
import './NewsletterSection.css';

function NewsletterSection() {
  return (
    <section className="newsletter-section text-center py-5 mt-5">
      <h5 className="fw-bold">Stay Updated With New Arrivals</h5>
      <form className="d-flex justify-content-center mt-3 ">
        <input
          type="email"
          className="form-control w-50 me-2"
          required
          placeholder="Enter your email"
        />
        <button type="submit" className="btn btn-dark">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsletterSection;
