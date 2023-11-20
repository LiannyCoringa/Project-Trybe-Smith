import { Request, Response } from 'express';
import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const newProduct = await productService.create({ name, price, orderId });
  res.status(201).json(newProduct.data);
}

async function findAll(req: Request, res: Response) {
  const products = await productService.findAll();
  res.status(200).json(products.data);
}

export default {
  findAll,
  create,
};