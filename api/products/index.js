import products from '../../data/products';

const handler = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json({ success: true, products });
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};

export default handler;
