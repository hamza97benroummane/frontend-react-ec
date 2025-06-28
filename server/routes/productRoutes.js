import express from 'express';
const router = express.Router();

// Hard-coded products array (10–20 items)
const products = [
  { id: 1, name: 'Wireless Mouse', price: 19.99, image: 'https://via.placeholder.com/150?text=Mouse' },
  { id: 2, name: 'Bluetooth Headphones', price: 49.99, image: 'https://via.placeholder.com/150?text=Headphones' },
  { id: 3, name: 'USB-C Cable', price: 9.99, image: 'https://via.placeholder.com/150?text=USB-C+Cable' },
  { id: 4, name: 'Laptop Stand', price: 24.99, image: 'https://via.placeholder.com/150?text=Stand' },
  { id: 5, name: 'Webcam', price: 35.99, image: 'https://via.placeholder.com/150?text=Webcam' },
  { id: 6, name: 'Mechanical Keyboard', price: 59.99, image: 'https://via.placeholder.com/150?text=Keyboard' },
  { id: 7, name: 'Gaming Chair', price: 129.99, image: 'https://via.placeholder.com/150?text=Chair' },
  { id: 8, name: '4K Monitor', price: 299.99, image: 'https://via.placeholder.com/150?text=Monitor' },
  { id: 9, name: 'Portable SSD', price: 89.99, image: 'https://via.placeholder.com/150?text=SSD' },
  { id: 10, name: 'Smartphone Stand', price: 14.99, image: 'https://via.placeholder.com/150?text=Stand' },
];

router.get('/', (_, res) => {
  res.status(200).json({ success: true, products });
});

export default router;
