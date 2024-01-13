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

  const validBody = { name: 'Excalibur', price: '10 peças de ouro' };
  const noNameBody = { name: '', price: '10 peças de ouro' };
  const noPriceBody = { name: 'Excalibur', price: '' };
  const noStringNameBody = { name: 1, price: '10 peças de ouro' };
  const noStringPriceBody = { name: 'Excalibur', price: 1 };
  const noLengthNameBody = { name: 'E', price: '10 peças de ouro' };
  const noLengthPriceBody = { name: 'Excalibur', price: '1' };

export default { 
  validProductFromDB,
  validProductToCreate,
  validProductListFromDB,
  validProductList,
  validBody,
  noNameBody,
  noPriceBody,
  noStringNameBody,
  noStringPriceBody,
  noLengthNameBody,
  noLengthPriceBody,
};