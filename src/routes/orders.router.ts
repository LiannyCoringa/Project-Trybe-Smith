import { Router } from 'express';
import orderController from '../controllers/order.controller';

const OrderRouter = Router();

OrderRouter.get('/orders', orderController.findAll);

export default OrderRouter;