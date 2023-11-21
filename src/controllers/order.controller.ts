import { Request, Response } from 'express';
import orderService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function findAll(req: Request, res: Response) {
  const orders = await orderService.findAll();
  res.status(200).json(orders.data);
}

async function create(req: Request, res: Response) {
  const { userId, productIds } = req.body;
  const order = await orderService.create(userId, productIds);

  if (order.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(order.status)).json(order.data);  
  }
  res.status(201).json(order.data);
}

export default {
  findAll,
  create,
};