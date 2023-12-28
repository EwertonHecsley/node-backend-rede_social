import UserModel from "../models/User.model";

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
    const emailExiste = await UserModel.findUserEmail(user.email);
    if (emailExiste) throw new Error('Email já existe.');

    const newUser = await UserModel.addUser(user);
    return newUser
};

export default {
    addUser
}