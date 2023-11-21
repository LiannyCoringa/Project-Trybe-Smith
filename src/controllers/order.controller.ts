import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function findAll(req: Request, res: Response) {
  const orders = await orderService.findAll();
  res.status(200).json(orders.data);
}

export default {
  findAll,
};