import { Schema, model } from 'mongoose';

const User = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    photo: String,
    description: String,
    isActive: Boolean,
    isVerified: Boolean,
    creatAt: Date
});

export default model('User', User);