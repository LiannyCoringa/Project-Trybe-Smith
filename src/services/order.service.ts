import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderMap } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

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

export default {
  findAll,
};