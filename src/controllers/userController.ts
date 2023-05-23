import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt'
import validator from 'validator';
import jwt from 'jsonwebtoken';

const createToken = (_id,) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw Error('All fields must be filled')
        }

        const user = await UserModel.findOne({ email })

        if (!user) {
            throw Error('Incorrect email')
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw Error('Invalid password')
        }

        // create token 
        const token = createToken(user._id);

        res.status(200).json({ email, token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// signup user 
const singUpUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // data validation
        if (!email || !password) {
            throw Error('All fields must be filled')
        }

        if (!validator.isEmail(email)) {
            throw Error('Email is not valid')
        }

        if (!validator.isStrongPassword(password)) {
            throw Error('Password is not strong enough')
        }

        const exists = await UserModel.findOne({ email })

        if (exists) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);

        const user = await UserModel.create({ email, password: hash })

        // create token 
        const token = createToken(user._id);

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export {
    loginUser,
    singUpUser
}