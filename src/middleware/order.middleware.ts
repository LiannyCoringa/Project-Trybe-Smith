import { NextFunction, Request, Response } from 'express';

function orderMiddleware(req: Request, res: Response, next: NextFunction): Response | void {
  const { userId, productIds } = req.body;
  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }
  next();
}

function orderStringMiddleware(req: Request, res: Response, next: NextFunction): Response | void {
  const { userId, productIds } = req.body;
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }
  if (productIds.length === 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }
  next();
}

export default {
  orderMiddleware,
  orderStringMiddleware,
};
