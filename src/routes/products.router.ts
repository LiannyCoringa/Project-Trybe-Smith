import { Router } from 'express';
import productController from '../controllers/product.controller';

const ProductRouter = Router();

ProductRouter.post('/products', productController.create);

export default ProductRouter;