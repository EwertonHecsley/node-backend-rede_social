import User from "../database/schema/User";

interface IUser {
    name: string
    email: string
    username: string
    photo: string,
    description?: string,
    isActive?: boolean,
    isVerified?: boolean,
    creatAt?: Date
}

const addUser = async (user: IUser) => {
    const newUser = await new User(user).save();
    return newUser;
};

const findUserEmail = async (email: string) => {
    return await User.findOne({ email }, 'name email')
};

export default {
    addUser,
    findUserEmail
}