import asyncHandler from 'express-async-handler'

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  PUBLIC
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User Muhsin' })
})

export {
    authUser
}