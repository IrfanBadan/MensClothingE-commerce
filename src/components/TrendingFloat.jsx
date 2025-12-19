import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './TrendingFloat.css';

const trendingItems = [
  'Printed Shirts',
  'Floral Shirts',
  'Polo T-Shirts',
  'Sweat Shirts ',
  'Baggy Pants',
  'Stright Fits',
  'Toned Jeans',
  'Polo Pants',
  'Formal Fits',
  'Samba',
  'Sneakers',
  'Chelse Boats'
];

function TrendingFloat() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current.children, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.1,
      duration: 1.5
    });
  }, []);

  return (
    <div className="container trending-section py-5 text-center">
      <h2 className="mb-4 fw-bold text-uppercase">What's Trending</h2>
      <div className="trending-items d-flex flex-wrap justify-content-center gap-5" ref={containerRef}>
        {trendingItems.map((item, index) => (
          <span key={index} className="trending-label">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrendingFloat;
