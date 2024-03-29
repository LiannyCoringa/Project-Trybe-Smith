import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
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

async function findAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}

async function update(
  id: number,
  product: ProductInputtableTypes,
): Promise<ServiceResponse<ProductCreate>> {
  await ProductModel.update(product, { where: { id } });
  return { status: 'SUCCESSFUL', data: { id, ...product } };
}

export default {
  findAll,
  create,
  update,
};