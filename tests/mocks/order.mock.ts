const validOrderListFromDB = {
  id: 1,
  userId: 1,
  productIds: [
    { id: 1 },
  ],
};

const validOrderList = [{
  id: 1,
  userId: 1,
}];

const validBody = { userId: 1, productIds: [1, 2] };
const noUserIdBody = { userId: '', productIds: [1, 2] };
const noProductIdsBody = { userId: 1, productIds: null };
const noNumberUserIdBody = { userId: '1', productIds: [1, 2] };
const noArrayProductIdsBody = { userId: 1, productIds: '1' };
const noLengthProductIdsBody = { userId: 1, productIds: [] };

const notExistingUserBody = { userId: 99, productIds: [1, 2] };

export default {
  validOrderListFromDB,
  validOrderList,
  validBody,
  noUserIdBody,
  noProductIdsBody,
  noNumberUserIdBody,
  noArrayProductIdsBody,
  noLengthProductIdsBody,
  notExistingUserBody,
};