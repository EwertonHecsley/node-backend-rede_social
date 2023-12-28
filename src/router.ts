import { Router } from 'express';
import UserController from './controllers/User.controller';

const router = Router();

router.post('/user', UserController.addUser);

export default router;