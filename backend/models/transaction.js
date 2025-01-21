import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        totalAmount: {
            type: Number,
            required: true
        },
        paymentMethod: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);
const transactionModel = mongoose.model('Transaction', transactionSchema);

export default transactionModel;