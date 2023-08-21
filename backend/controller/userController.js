import { User } from "../model/User.js";

import jwt from "jsonwebtoken";

import { sendMail } from "../utils/sendMail.js";

import cloudinary from "cloudinary";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name, email, password,
    });
    sendToken(user, 201, res);
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        //cookie(token) will expire after 5 days
        res.status(200).cookie("token", token, {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true
        }).json({
            success: true,
            message: "Logged in successfully"
        });



    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const logout = async (req, res) => {
    //expire session now 
    try {
        res
            .status(200)
            .cookie("token", null, {
                expires: new Date(Date.now()),
                httpOnly: true
            })
            .json({
                success: true,
                message: "Loggout out successfully"
            });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }


};

export const getAllUsers = async (req, res,next) => {
    try {
        const users = await User.findOne().select("-password -email");
        res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// export const getUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         res.status(200).json({
//         success: true,
//         user
//     });
//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: error.message
//         });
//     }

// }

export const myProfile = async (req, res,next) => {
    try {
        const user = await User.findById(req.user._id);
        // isAuthenticate has been already called before this and then find user by id getting from isAuthenticated
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

};

export const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const userMessage = "Hello, I am " + name + ". My email is " + email + ". My message is " + message;

        await sendMail(userMessage);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const { name, email, password, skills, about } = req.body;
        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }
        if (password) {
            user.password = password;
        }

        //as skills is [] so we will be passing [] object
        if (skills) {
            if (skills.image1) {

                //delete prev images uploaded from cloudinary that takes up sapce 
                await cloudinary.v2.uploader.destroy(skills.image1.public_id);

                //upload new image in cloudinary
                const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
                    folder: "portfolio"
                });

                //update data in database
                user.skills.image1 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }

            if (skills.image2) {

                //delete prev images uploaded from cloudinary that takes up sapce 
                await cloudinary.v2.uploader.destroy(skills.image2.public_id);

                //upload new image in cloudinary
                const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
                    folder: "portfolio"
                });

                //update data in database
                user.skills.image2 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }

            if (skills.image3) {

                //delete prev images uploaded from cloudinary that takes up sapce 
                await cloudinary.v2.uploader.destroy(skills.image3.public_id);

                //upload new image in cloudinary
                const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
                    folder: "portfolio"
                });

                //update data in database
                user.skills.image3 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }

            if (skills.image4) {

                //delete prev images uploaded from cloudinary that takes up sapce 
                await cloudinary.v2.uploader.destroy(skills.image4.public_id);

                //upload new image in cloudinary
                const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
                    folder: "portfolio"
                });

                //update data in database
                user.skills.image4 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }

            if (skills.image5) {

                //delete prev images uploaded from cloudinary that takes up sapce 
                await cloudinary.v2.uploader.destroy(skills.image5.public_id);

                //upload new image in cloudinary
                const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
                    folder: "portfolio"
                });

                //update data in database
                user.skills.image5 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }

            if (skills.image6) {

                //delete prev images uploaded from cloudinary that takes up sapce 
                await cloudinary.v2.uploader.destroy(skills.image6.public_id);

                //upload new image in cloudinary
                const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
                    folder: "portfolio"
                });

                //update data in database
                user.skills.image6 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }
        }

        if (about) {
            if (about.name) {
                user.about.name = about.name;
            }
            if (about.title) {
                user.about.title = about.title;
            }
            if (about.subtitile) {
                user.about.subtitile = about.subtitile;
            }
            if (about.description) {
                user.about.description = about.description;
            }
            if (about.quote) {
                user.about.quote = about.quote;
            }

            if (about.avatar) {
                await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);

                //upload new image in cloudinary
                const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
                    folder: "portfolio"
                });

                //update data in database
                user.about.avatar = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }

        }

        await user.save();

        res.status(200).json({
            success: true,
            message: "Your details updated successfully"
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


export const addTimeline = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        // isAuthenticate has been already called before this and then find user by id getting from isAuthenticated

        const { title, description, date } = req.body;
        //add details at start of array 
        user.timeline.unshift({
            title,
            description,
            date
        });
        await user.save();

        res.status(200).json({
            success: true,
            message: "Added to timeline"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

}

export const deleteTimeline = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user._id);
        // isAuthenticate has been already called before this and then find user by id getting from isAuthenticated

        //filter and display timeline array after deducting id that matches req.params
        user.timeline = user.timeline.filter((item) => item._id !== id);

        await user.save();

        res.status(200).json({
            success: true,
            message: "Timeline deleted successfully"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

export const addProject = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        // isAuthenticate has been already called before this and then find user by id getting from isAuthenticated

        const { url, title, image, description, techStack } = req.body;

        //upload new image in cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "portfolio"
        });


        //add details at start of array 
        user.projects.unshift({
            url,
            title,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url
            },
            description,
            techStack
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: "Added to projects"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user._id);
        // isAuthenticate has been already called before this and then find user by id getting from isAuthenticated

        const project = user.projects.filter((item) => item._id !== id);

        await cloudinary.v2.uploader.destroy(project.image.public_id);

        //filter and display projects array after deducting id that matches req.params
        user.projects = user.projects.filter((item) => item._id !== id);

        await user.save();

        res.status(200).json({
            success: true,
            message: "Project deleted successfully"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


