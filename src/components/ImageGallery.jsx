import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div>
      {/* Main image */}
      <img
        src={main}
        alt="Product"
        className="w-full h-auto object-contain mb-4 rounded"
      />

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx+1}`}
            className="w-full h-20 object-cover rounded cursor-pointer border-2 border-transparent hover:border-primary transition"
            onClick={() => setMain(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
