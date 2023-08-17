// ------ BASIC STRUCTURE START ------
import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
// ------ BASIC STRUCTURE END ------


//mandatory code --- start
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use((cookieParser()));
//mandatory code --- end


import { userRouter } from "./routes/userRoute.js";
app.use("/api/v1", userRouter);
