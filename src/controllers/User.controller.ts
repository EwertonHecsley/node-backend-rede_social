import { Request, Response } from "express";
import UserService from "../services/User.service";

const addUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.addUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(error)
    }
};

export default {
    addUser
}