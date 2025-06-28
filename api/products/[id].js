import products from '../../../data/products.js';

export default (req, res) => {
  const { id } = req.query;
  const method = req.method;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  const pid = parseInt(id, 10);
  const product = products.find((p) => p.id === pid);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  res.status(200).json({ success: true, product });
};
