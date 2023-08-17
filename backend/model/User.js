import mongoose from "mongoose";
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"]

    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true
    },
    password:{
        type:String,
        Select:false,
        required:[true,"Please Enter Your Password"]
    },
    timeline:[{
        title:String,
        description:String,
        date:Date
    }],
    skills:{
        image1:{
            public_id:String,
            url:String
        },
        image2:{
            public_id:String,
            url:String
        },

        image3:{
            public_id:String,
            url:String
        },

        image4:{
            public_id:String,
            url:String
        },

        image5:{
            public_id:String,
            url:String
        },

        image6:{
            public_id:String,
            url:String
        },
        

    },
   projects:[{
        url:String,
        title:String,
        image:{
            public_id:String,
            url:String
        },
        description:String,
        techStack:String
    }],
    about:{
        name:String,
        title:String,
        subtitile:String,
        description:String,
        quote:String,
        avatar:{
            public_id:String,
            url:String
        }
    }

});

userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    });
}

export const User = mongoose.model("User", userSchema);
//import in controller.js