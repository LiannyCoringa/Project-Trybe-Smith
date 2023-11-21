import e from "express";

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

export default {
  validOrderListFromDB,
  validOrderList,
};