import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const [added, setAdded] = useState(false);

  const isFav = product ? isInWishlist(product.id) : false;

  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Reset after 1.5s
  };

  const handleBuyNow = () => {
    addToCart(product); // Ensure it's in cart
    navigate('/checkout');
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left: 2x2 Image Grid */}
        <div className="col-md-6">
          <div className="row">
            {product.images.map((img, index) => (
              <div className="col-6 mb-3" key={index}>
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="img-fluid rounded shadow-sm"
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    width: '100%',
                    objectPosition: 'top'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mb-3">{product.name}</h2>
          <p className="lead">{product.description}</p>
          <h4 className="fw-bold mb-4">₹{product.price}</h4>

          {/* Buttons Group */}
          <div className="d-flex flex-column gap-2 mt-4">
            <button
              className={`btn px-4 py-2 ${added ? 'btn-success' : 'btn-dark'}`}
              onClick={handleAddToCart}
            >
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

            <button
              className={`btn ${isFav ? 'btn-danger' : 'btn-outline-danger'} px-4 py-2`}
              onClick={() => toggleWishlist(product)}
            >
              <i className={`${isFav ? 'fas' : 'far'} fa-heart me-2`}></i>
              {isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
