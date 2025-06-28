import express from 'express';
import cors from 'cors';
// import path from 'path'; // Remove unused import

const app = express();

// 1) Middleware
app.use(cors());
app.use(express.json());

// 2) Routes
import productRoutes from './routes/productRoutes.js';
app.use('/api/products', productRoutes);



export default app;
