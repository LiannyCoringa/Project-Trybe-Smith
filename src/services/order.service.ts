import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { OrderCreate, OrderMap } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';
import productService from './product.service';

async function findAll(): Promise<ServiceResponse<OrderMap[]>> {
  const orders = await OrderModel.findAll({
    include: [
      { model: ProductModel, as: 'productIds', attributes: ['id'] },
    ],
  });
  const newOrders = orders.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((product) => product.id),
  }));
  return { status: 'SUCCESSFUL', data: newOrders };
}

async function create(
  userId: number,
  productIds: number[],
): Promise<ServiceResponse<OrderCreate>> {
  const user = await UserModel.findOne({ where: { id: userId } });
  if (!user) return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };

  const newOrder = await OrderModel.create({ userId });
  productIds.map(async (productId) => {
    const product = await ProductModel.findOne({ where: { id: productId } });
    if (!product) return { status: 'NOT_FOUND', data: { message: '"productId" not found' } };
    await productService.update(productId, { 
      orderId: newOrder.dataValues.id, 
      name: product.dataValues.name, 
      price: product.dataValues.price });
  });

  return { status: 'SUCCESSFUL', data: { userId, productIds } };
}

export default {
  findAll,
  create,
};