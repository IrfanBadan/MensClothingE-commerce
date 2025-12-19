import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimatedCategorySection.css';
import gsap from 'gsap';

const categories = [
  { label: 'Shirts', media: '/images/catagorySection/gif-2.mp4' },
  { label: 'Pants', media: '/images/catagorySection/Hailuo_Video_A premium formal pant floating_457397997760323591.mp4' },
  { label: 'T-Shirts', media: '/images/catagorySection/Hailuo_Video_A premium oversized t-shirt fl_457412980929908738.mp4' },
  { label: 'Shoes', media: '/images/catagorySection/g-1111.gif' },
  { label: 'Accessories', media: '/images/catagorySection/Hailuo_Video_A premium accessories category_457416579831496711.mp4' }
];

function AnimatedCategorySection() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.15,
        delay: 0.3
      }
    );
  }, []);

  const handleCategoryClick = (label) => {
    navigate(`/products/category/${label.toLowerCase()}`);
  };

  return (
    <div ref={sectionRef} className="animated-category-section py-5 text-center">
      <h2 className="mb-4 fw-bold text-uppercase">Shop by Category</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-gif-card text-center"
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => handleCategoryClick(cat.label)}
            style={{ cursor: 'pointer' }}
          >
            <div className="gif-wrapper">
              {cat.media.endsWith('.mp4') ? (
                <video
                  src={cat.media}
                  className="category-gif"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img src={cat.media} alt={cat.label} className="category-gif" />
              )}
            </div>
            <p className="fw-semibold mt-2">{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCategorySection;
