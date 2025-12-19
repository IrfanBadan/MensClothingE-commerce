import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import HomeProductCard from '../components/HomeProductCard';
import products from '../data/products';
import './Home.css';
import TrendingFloat from '../components/TrendingFloat';
import AnimatedCategorySection from '../components/AnimatedCategorySection';
import NewArrivalsSection from '../components/NewArrivalsSection';
import PromoSection from '../components/PromoSection';
import NewsletterSection from '../components/NewsletterSection';


function Home() {
  return (
    <>
      <Hero />
      <TrendingFloat />

      {/* Featured Products Section */}
      <div className="container text-center ">
        <h2>what's hot in apparel</h2>
        <div className="row justify-content-center">
          {products.slice(0, 3).map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <HomeProductCard product={product} />
            </div>
          ))}
        </div>
        <AnimatedCategorySection />
        <NewArrivalsSection />
        <PromoSection />
      </div>
      <NewsletterSection />
    </>
  );
}

export default Home;
