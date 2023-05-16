import express from 'express';
import { loginUser, singUpUser } from '../controllers/userController.js';

const router = express.Router()

// login 
router.post('/login', loginUser)

// signup
router.post('/singup', singUpUser)

export default router;