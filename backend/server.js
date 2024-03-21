import express from "express";
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
connectDB();
const app = express();

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is Ready!'));

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log('listening on port ' + port));


// - **POST /api/users** - Register a user
// - **POST /api/users/auth✶✶ - Authenticate a user and get token
// - **POST /api/users/logout** Logout user and clear cookie
// - **GET /api/users/profile** Get user profile
// - **PUT /api/users/profile** - Update profile
