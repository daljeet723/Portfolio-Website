import React from 'react'
import "./About.css";
import { Typography } from '@mui/material';
const About = () => {
    return (
        <div className="about">
            <div className="aboutContainer1">
                <Typography>This is sample quote</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="profile"
                        className='aboutAvatar' />
                    <Typography variant="h4"
                        style={{ margin: "1vmax 0", color: "black" }}
                    > Daljeet </Typography>
                    <Typography>Software Engineer</Typography>
                </div>
                <div>
                    <Typography
                        style={{
                            wordSpacing: "5px",
                            lineHeight: "50px",
                            letterSpacing: "5px",
                            textAlign: "right",
                        }}
                    >
                        This is description item
                        example loreum lypsm
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About