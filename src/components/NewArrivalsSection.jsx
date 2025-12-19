import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewArrivalsSection.css';

const newArrivals = [
  {
    title: 'Plain Baggy Jeans',
    image: '/src/assets/images/Whats New/baggy.jpg'
  },
  {
    title: 'Prited & plain OverSized Tees',
    image: '/src/assets/images/Whats New/oversized-tees.jpg'
  },
  {
    title: 'Floral Shirt Free Sized',
    image: '/src/assets/images/Whats New/floralSShirt.jpg'
  },
  {
    title: 'Lenin pants for Comfort',
    image: '/src/assets/images/Whats New/LeninPants.jpg'
  }
];

function NewArrivalsSection() {
  const navigate = useNavigate();
  return (
    <div className="new-arrivals-section py-5 text-center">
      <h2 className="mb-4 fw-bold">What's New</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {newArrivals.map((item, index) => (
          <div key={index} className="arrival-card text-center">
            <img src={item.image} alt={item.title} className="arrival-img mb-2" />
            <p className="fw-semibold">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="btn btn-dark px-4 py-2" onClick={() => navigate('/products')}>
          Explore ➝
        </button>
      </div>
    </div>
  );
}

export default NewArrivalsSection;
