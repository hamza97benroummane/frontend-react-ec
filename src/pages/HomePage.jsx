import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok (${res.status})`);
        }
        return res.json();
      })
      .then((json) => {
        setProducts(json.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-10">
        <div className="container text-center">
          <Spinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10">
        <div className="container">
          <p className="text-red-500 text-center">Error: {error}</p>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-10">
        <div className="container">
          <p className="text-center">No products available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-4xl mb-5">ALL PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
