import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import products from '../data/products'; // Static data
import ProductCard from '../components/ProductCard';

function Products() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let result = products;

    // Filter by category if present
    if (category) {
      result = result.filter(p => p.category?.toLowerCase() === category.toLowerCase());
    }

    // Filter by search query if present
    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.description?.toLowerCase().includes(searchQuery) ||
        p.category?.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredProducts(result);
  }, [category, searchQuery]);

  // Determine Title
  let pageTitle = 'Our Collection';
  if (category) pageTitle = `${category} Collection`;
  if (searchQuery) pageTitle = `Search results for "${searchQuery}"`;

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-capitalize fw-bold">{pageTitle}</h2>
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No products found.</h4>
            <p className="text-secondary">Try searching for something else or browse our collection.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
