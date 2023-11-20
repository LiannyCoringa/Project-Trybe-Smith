import { Product, ProductCreate } from '../../src/types/Product';

const validProductFromDB = {
  id: 1,
  name: 'Excalibur',
  price: '10 peças de ouro',
  orderId: 1,
};

const validProductToCreate: ProductCreate = {
  id: 1,
  name: 'Excalibur',
  price: '10 peças de ouro',
};

export default { 
  validProductFromDB,
  validProductToCreate,
};