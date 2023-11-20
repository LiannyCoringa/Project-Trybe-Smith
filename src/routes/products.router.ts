import { Router } from 'express';
import productController from '../controllers/product.controller';

const ProductRouter = Router();

ProductRouter.get('/products', productController.findAll);
ProductRouter.post('/products', productController.create);

export default ProductRouter;