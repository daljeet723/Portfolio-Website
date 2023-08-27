import React, { useState, useEffect } from 'react'
import { Button, Typography } from "@mui/material";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getUser } from "../../actions/user"
import { useAlert } from 'react-alert';
import {ProjectCard} from "../projects/Projects";


const Project = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { message, error, loading } = useSelector(state => state.updateUser);
    const { message: loginMessage } = useSelector((state) => state.login);
    const { user } = useSelector(state => state.user);


    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState("");

    const handleProjectImage = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = (e) => {
            if (Reader.readyState === 2) {
                setImage(Reader.result );
            }
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addProject(
            url, title, image, description, techStack
        ));
        dispatch(getUser());
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
        if (loginMessage) {
            alert.success(loginMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
          }
    }, [alert, error, message,loginMessage, dispatch]);

    return (
        <div className="adminPanel">
            <div className="adminPanelContainer">
                <Typography variant="h4">
                    <p>P</p>
                    <p>R</p>
                    <p>O</p>
                    <p>J</p>
                    <p>E</p>
                    <p>C</p>
                    <p>T</p>
                </Typography>
                <form onSubmit={onSubmit}>

                    <input
                        type="text"
                        placeholder='Link'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className='adminPanelInputs'>
                    </input>

                    <input
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='adminPanelInputs'>
                    </input>

                    <input
                        type="text"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='adminPanelInputs'>
                    </input>

                    <input
                        type="text"
                        placeholder='Techologies'
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                        className='adminPanelInputs'>
                    </input>

                    <input
                        type="file"
                        onChange={handleProjectImage}
                        className='adminPanelFileUpload'
                        placeholder='Choose Avatar'
                        accept='image/*'></input>

                    {/* account path given in App.js  */}
                    <Link to="/account">
                        Back <MdKeyboardBackspace />
                    </Link>

                    <Button type="submit" variant="contained" disabled={loading}>
                        Add Project
                    </Button>
                </form>

                <div className="adminPanelYoutubeVideos">
                    {user &&
                        user.projects &&
                        user.projects.map((item) => (
                            < ProjectCard
                                id={item._id}
                                key={item._id}
                                url={item.url}
                                projectImage={item.image.url}
                                projectTitle={item.title}
                                description={item.description}
                                technologies={item.techStack}
                                isAdmin={true}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
