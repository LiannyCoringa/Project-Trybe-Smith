import { NextFunction, Request, Response } from 'express';

function productMiddleware(req: Request, res: Response, next: NextFunction): Response | void {
  const { name, price } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  next();
}

function productStringMiddleware(req: Request, res: Response, next: NextFunction): 
Response | void {
  const { name, price } = req.body;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  if (price.length <= 2) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  next();
}

export default {
  productMiddleware,
  productStringMiddleware,
};