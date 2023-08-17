// ------ BASIC STRUCTURE START ------

import mongoose from "mongoose";

export const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,
        useUnifiedTopology:true}).then((c) =>{
        console.log("Mongodb connected to "+c.connection.host);
    }).catch(e =>{
        console.log(e);
    });
}

// ------ BASIC STRUCTURE END ------