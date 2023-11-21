export type Order = {
  id: number;
  userId: number;
  productIds?: ProductId[];
};

export type OrderMap = {
  id: number;
  userId: number;
  productIds?: number[];
};

export type ProductId = { id: number };