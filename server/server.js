/* eslint-env node */
// server/server.js

import express from 'express';
import cors from 'cors';

const PORT = 3099; // fixed port, no environment variables

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 19.99,
    gallery: [
      'https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://uniquec.com/wp-content/uploads/235-600x600.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://images-cdn.ubuy.co.in/633b72b10224116661793be8-ubuy-online-shopping.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 2,
    name: 'Bluetooth Headphones',
    price: 49.99,
    gallery: [
      'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 3,
    name: 'USB-C Cable',
    price: 9.99,
    gallery: [
      'https://universdigital.com/cdn/shop/files/cable-de-charge-usbc-1-m-699403.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://universdigital.com/cdn/shop/files/cable-de-charge-usbc-1-m-699403.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://universdigital.com/cdn/shop/files/cable-de-charge-usbc-1-m-699403.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 4,
    name: 'Laptop Stand',
    price: 24.99,
    gallery: [
      'https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/FoldineX-Laptop-Stand.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/FoldineX-Laptop-Stand.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/FoldineX-Laptop-Stand.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 5,
    name: 'Webcam',
    price: 35.99,
    gallery: [
      'https://img.freepik.com/vecteurs-premium/webcam-blanche-realiste_157999-80.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://img.freepik.com/vecteurs-premium/webcam-blanche-realiste_157999-80.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://img.freepik.com/vecteurs-premium/webcam-blanche-realiste_157999-80.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 59.99,
    gallery: [
      'https://m.media-amazon.com/images/I/71fRP7KY9hL._AC_SL1500_.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://m.media-amazon.com/images/I/71fRP7KY9hL._AC_SL1500_.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://m.media-amazon.com/images/I/71fRP7KY9hL._AC_SL1500_.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 7,
    name: 'Gaming Chair',
    price: 129.99,
    gallery: [
      'https://m.media-amazon.com/images/I/612lOKR5MyL.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://m.media-amazon.com/images/I/612lOKR5MyL.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://m.media-amazon.com/images/I/612lOKR5MyL.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 8,
    name: '4K Monitor',
    price: 299.99,
    gallery: [
      'https://i5.walmartimages.com/seo/SAMSUNG-57-Odyssey-Neo-G9-Dual-4K-UHD-Quantum-Mini-LED-240Hz-1ms-HDR-1000-Curved-Gaming-Monitor_91389b3b-6d99-46dc-8f7c-f6174047b02a.22c53d90c73e6cf4b39fc343fff944ce.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://i5.walmartimages.com/seo/SAMSUNG-57-Odyssey-Neo-G9-Dual-4K-UHD-Quantum-Mini-LED-240Hz-1ms-HDR-1000-Curved-Gaming-Monitor_91389b3b-6d99-46dc-8f7c-f6174047b02a.22c53d90c73e6cf4b39fc343fff944ce.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://i5.walmartimages.com/seo/SAMSUNG-57-Odyssey-Neo-G9-Dual-4K-UHD-Quantum-Mini-LED-240Hz-1ms-HDR-1000-Curved-Gaming-Monitor_91389b3b-6d99-46dc-8f7c-f6174047b02a.22c53d90c73e6cf4b39fc343fff944ce.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 9,
    name: 'Portable SSD',
    price: 89.99,
    gallery: [
      'https://m3.ngt.ma/9899-home_default/disque-dur-externe-samsung-t5-ssd-portable.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://m3.ngt.ma/9899-home_default/disque-dur-externe-samsung-t5-ssd-portable.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://m3.ngt.ma/9899-home_default/disque-dur-externe-samsung-t5-ssd-portable.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
  {
    id: 10,
    name: 'Smartphone Stand',
    price: 14.99,
    gallery: [
      'https://lumiproduct.oss-cn-hongkong.aliyuncs.com/2020/08/10/5f315b2f327ffa0002484fdc.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://lumiproduct.oss-cn-hongkong.aliyuncs.com/2020/08/10/5f315b2f327ffa0002484fdc.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
      'https://lumiproduct.oss-cn-hongkong.aliyuncs.com/2020/08/10/5f315b2f327ffa0002484fdc.jpg?auto=compress&cs=tinysrgb&w=300&h=300',
    ],
  },
];

app.get('/api/products', (_req, res) => {
  res.json({ success: true, products });
});

app.get('/api/products/:id', (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ success: false, message: 'Not found' });
  res.json({ success: true, product });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));