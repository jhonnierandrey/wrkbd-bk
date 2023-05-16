import UserModel from '../models/userModel.js';

// login user
const loginUser = async (req, res) => {
    res.json({ msg: 'login user' })
}

// signup user 
const singUpUser = async (req, res) => {
    res.json({ msg: 'signup user' })
}

export {
    loginUser,
    singUpUser
}