import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import ImageGallery from '../components/ImageGallery';
// import { addToCart, openCart } from '../store/cartSlice';

const ProductDetailsPage = () => {
  const { productId } = useParams();
//   const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setProduct(json.product);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         productId: product.id,
//         product,
//         quantity: 1,
//         selectedAttributes: {},
//       })
//     );
//     dispatch(openCart());
//   };

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

  if (!product) {
    return (
      <section className="py-10">
        <div className="container">
          <p className="text-center">Product not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2" data-testid="product-gallery">
            <ImageGallery images={product.gallery} />
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <h1 className="text-4xl font-semibold mb-5">{product.name}</h1>
            <p className="text-2xl font-bold mb-5">${product.price.toFixed(2)}</p>
            <button
            //   onClick={handleAddToCart}
              className="px-6 py-3 bg-primary text-white rounded w-full uppercase mb-5 hover:bg-[#6ed388] transition"
              onClick={() => alert(`You added ${product.name} to the cart!`)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
