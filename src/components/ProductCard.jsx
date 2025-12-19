import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';

function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const isFav = isInWishlist(product.id);

  return (
    <div className="card h-100 border-0 shadow-sm position-relative">
      <button
        className="btn position-absolute top-0 end-0 m-2 rounded-circle bg-white shadow-sm"
        onClick={() => toggleWishlist(product)}
        style={{ zIndex: 10, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className={`${isFav ? 'fas' : 'far'} fa-heart ${isFav ? 'text-danger' : 'text-dark'}`}></i>
      </button>
      <img
        src={product.images?.[0]}
        className="card-img-top"
        alt={product.name}
        style={{ height: '300px', objectFit: 'cover', objectPosition: 'top' }}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{product.name}</h5>
        <p className="card-text fw-bold mb-3">₹{product.price}</p>
        <div className="d-grid">
          <Link to={`/products/${product.id}`} className="btn btn-outline-dark">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
