import Mongoose from 'mongoose';
const Schema = Mongoose.Schema

const userSchema = new Schema(
    {
        name: {
            type: String,
            index: false,
            required: false
        },
        username: {
            type: String,
            index: true,
            maxlength: 200,
            required: true
        },
        password: {
            type: String,
            index: false,
            maxlength: 150,
            required: true
        },
        role: {
            type: String,
            default: 'basic',
            enum: ['basic', 'admin'],
            required: true
        }
    },{

        timestamps: true
    }
);

const User = Mongoose.model('invest2u_users', userSchema);

export {User}
