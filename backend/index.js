import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userRouter } from './Routers/user.js';
import { sellerRouter } from './Routers/seller.js';

dotenv.config();

const url = process.env.MONGO_PASSWORD;

const app = express();
app.use(express.json());


app.use('/user', userRouter);
app.use('/seller', sellerRouter);

async function main() {
    await mongoose.connect(url);
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}
main();