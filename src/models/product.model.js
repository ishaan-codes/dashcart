import mongoose, {Schema} from 'mongoose';
import { type } from 'os';

const productSchema = new Schema (
    {
        category: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);