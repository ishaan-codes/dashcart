import mongoose from "mongoose";
import UserModel from "./user";
import ProductModel from "./product";
const cartSchema = new mongoose.Schema({
    userId: {
        ref: UserModel, 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    products: [
        {
            productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: ProductModel,
            required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const cartModel = mongoose.model('Cart', cartSchema);

export default cartModel;
