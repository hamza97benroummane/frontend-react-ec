import React from "react";
import { Link } from "react-router-dom";

// Helper to format test ids
const toKebabCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ProductCard = ({ product }) => {
  return (
    <div className="font-raleway p-4 rounded flex flex-col gap-3 hover:shadow-lg transition duration-300 ease-in-out">
      <Link
        to={`/products/${product.id}`}
        data-testid={`product-${toKebabCase(product.name)}`}
        className="flex flex-col gap-3"
      >
        {/* product image */}
        <div className="h-64 w-full relative rounded overflow-hidden">
          <img
            src={product.gallery[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* product details */}
        <div>
          <h3 className="font-light text-xl">{product.name}</h3>
          <p className="font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </Link>

      {/* Add to Cart Button (shows alert) */}
      <button
        className="mt-4 px-4 py-2 bg-primary text-white rounded w-full uppercase"
        onClick={() => alert(`You added ${product.name} to the cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
