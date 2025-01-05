import mongoose, {Schema} from 'mongoose';
import jwt from "jsonwebtoken";

const userSchema = new Schema (
    {
        viewedHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        fullName: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        refreshToken: {
            type: String
        }
        
    }, {timestamps: true}
);

// userSchema.methods.generateAccessToken = function() {
//     return jwt.sign(

//     )
// };
export const User = mongoose.model("User", userSchema);