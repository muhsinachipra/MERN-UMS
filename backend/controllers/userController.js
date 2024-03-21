import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  PUBLIC
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' })
})

// @desc    Register new User
// route    POST /api/users
// @access  PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User Already Exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

// @desc    LogOut User
// route    POST /api/users/logout
// @access  PUBLIC
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User' })
})

// @desc    Get User profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' })
})

// @desc    Update User profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update User Profile' })
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}