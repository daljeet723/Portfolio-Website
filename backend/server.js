// ------ BASIC STRUCTURE  ------
// import {app} from "./app.js";
// import dotenv from "dotenv";
// import {connectDatabase} from "./config/database.js"

// dotenv.config({path: "./backend/config/config.env"});
// connectDatabase();

// app.listen(process.env.PORT, ()=>{
//     console.log("Server is running at port "+process.env.PORT)
// });
// ------ BASIC STRUCTURE  ------

import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

//connect to config file 
dotenv.config({ path: "./backend/config/config.env" });

//calling connect databse function ..use after config..otherwise will not get process.env value
connectDatabase();


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT, () => {
    console.log("Server is running at port " + process.env.PORT)
});

