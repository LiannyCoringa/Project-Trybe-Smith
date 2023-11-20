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

const validProductListFromDB = {
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1
  };
  
const validProductList = [{
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1
  }];

export default { 
  validProductFromDB,
  validProductToCreate,
  validProductListFromDB,
  validProductList,
};