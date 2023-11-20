import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';
import { ProductCreate } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<ProductCreate>> {
  const newProduct = await ProductModel.create(product);
  const { id, name, price } = newProduct.dataValues;
  return { status: 'SUCCESSFUL', data: { id, name, price } };
}

export default {
  create,
};