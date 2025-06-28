import { Request, Response } from 'express';
import { user } from '../models/user.model.js';

export const getAllUser = async (req : Request, res: Response) => {
    const users = await user.find();
    res.status(200).json(users);
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = await user.create(req.body);
    res.status(201).json(newUser);
}