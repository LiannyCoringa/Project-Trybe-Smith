import { Router } from 'express';
import orderController from '../controllers/order.controller';
import orderMiddleware from '../middleware/order.middleware';
import authMiddleware from '../middleware/auth.middleware';

const OrderRouter = Router();

OrderRouter.get('/orders', orderController.findAll);
OrderRouter.post(
  '/orders', 
  authMiddleware, 
  orderMiddleware.orderMiddleware, 
  orderMiddleware.orderStringMiddleware, 
  orderController.create,
);

export default OrderRouter;