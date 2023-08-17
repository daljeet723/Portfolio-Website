import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import {ErrorHandler} from "../utils/errorHandler.js"

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return next(new ErrorHandler("Please login to access this resource", 401));
        }
        //if token exists, decode data again
        //get decoded object data of user from userContoller.js at line 40
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        req.user = user;
        next(); //callback ie return back

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}