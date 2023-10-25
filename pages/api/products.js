import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === 'POST') {
    const { title, description, price, images } = req.body;

    const productDoc = await Product.create({
      title,
      description,
      price,
      images
    })

    res.json(productDoc);
  }

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {

      res.json(await Product.find());
    }
  }

  if (method === 'PUT') {
    const { title, description, price, _id, images } = req.body;
    await Product.updateOne({ _id }, {
      title, description, price, images
    });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Product.deleteOne({_id:req.query?.id});
      res.json(true)
    }
  }
}