import React from 'react'
import "./Projects.css";
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from '@mui/icons-material';

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false }) => {
    return <>
        <a href={url} className="projectCard" target="black">
            <div>
                <img src={projectImage} alt="" className='' />
                <Typography variant="h5">{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant="h4">About Projects</Typography>
                <Typography>{description}</Typography>
                <Typography variant="h6">Teck Stack: {technologies}</Typography>
            </div>
        </a>
        {isAdmin &&(
            <Button style={{color:"rgba(40, 40, 40, 0.7)"}}>
                <Delete/>
            </Button>
        )}
    </>
}
const Projects = () => {

    const projects = [1, 2, 3];
    return (
        <div className="projects">
            <Typography variant="h3">
                Projects <AiOutlineProject />
            </Typography>
            <div className='projectsWrapper'>
                {projects.map((project, index) => (
                    <ProjectCard 
                         url="https://colorhunt.co/palettes/popular"
                        projectImage="https://media.istockphoto.com/id/1414208547/vector/volumetric-gold-star-five-pointed-star-3d-quality-and-rating-symbol.jpg?s=1024x1024&w=is&k=20&c=3DGr3MEt5D_7OwnOUK5o0hnxi5SiKCQSi8yd6aFbjMg="
                        projectTitle="Samle project"
                        description="Sample project description"
                        technologies="Nodejs, React"
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects