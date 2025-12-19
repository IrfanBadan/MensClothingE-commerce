import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';

function HomeProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const isFav = isInWishlist(product.id);

  const imageSrc =
    isHovered && product.hoverImage
      ? product.hoverImage
      : product.images?.[0] || '';

  return (
    <div className="card border-0 shadow-sm h-100 position-relative">
      <button
        className="btn position-absolute top-0 end-0 m-2 rounded-circle bg-white shadow-sm"
        onClick={() => toggleWishlist(product)}
        style={{ zIndex: 10, width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
      >
        <i className={`${isFav ? 'fas' : 'far'} fa-heart ${isFav ? 'text-danger' : 'text-dark'}`}></i>
      </button>
      <img
        src={imageSrc}
        alt={product.name}
        className="card-img-top"
        style={{ height: '350px', objectFit: 'cover', objectPosition: "top" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="card-body text-center">
        <h5 className="card-title text-truncate">{product.name}</h5>
        <p className="card-text fw-bold">₹{product.price}</p>
        <Link to={`/products/${product.id}`} className="btn btn-outline-dark w-100 mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default HomeProductCard;
