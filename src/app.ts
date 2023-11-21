import express from 'express';
import productRouter from './routes/products.router';
import orderRouter from './routes/orders.router';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(orderRouter);

export default app;
