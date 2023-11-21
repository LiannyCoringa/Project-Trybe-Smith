import { Router } from 'express';
import productController from '../controllers/product.controller';
import productMiddleware from '../middleware/product.middleware';

const ProductRouter = Router();

ProductRouter.get('/products', productController.findAll);
ProductRouter.post(
  '/products', 
  productMiddleware.productMiddleware, 
  productMiddleware.productStringMiddleware, 
  productController.create,
);

export default ProductRouter;