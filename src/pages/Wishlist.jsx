import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Wishlist() {
    const { wishlistItems } = useContext(WishlistContext);

    if (wishlistItems.length === 0) {
        return (
            <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 className="fw-bold mb-4">Your Wishlist is Empty</h2>
                <p className="text-muted mb-4">Save items you love to find them later!</p>
                <div>
                    <Link to="/products" className="btn btn-dark px-4 py-2">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-5">Your Favorites ({wishlistItems.length})</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {wishlistItems.map((product) => (
                    <div key={product.id} className="col">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
