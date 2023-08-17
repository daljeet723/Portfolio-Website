import React, { useCallback, useEffect, useState } from 'react';
import "./home2.css";
import {Link} from "react-router-dom";
import profileImage from "../../images/profile.avif";
import { Typography } from '@mui/material';

const positions =["web developer", "Azure developer", "powerapps developer"];

const Home2 = () => {

        const [position, setPosition] = useState("");

        const shuffle =useCallback(() =>{
            const index = Math.floor (Math.random() * positions.length);
            setPosition(positions[index]);
        },[]);

        useEffect(() =>{
            const intervalId = setInterval(shuffle,3000);
            return () => clearInterval(intervalId);
        },[shuffle]);
     
    return (
        <div className="home2">

            <div className="color-block d-none d-lg-block">

            </div>
            <div className="container">
                <div className="col-lg-4 profile d-lg-block img-mobile">
                    <img src={profileImage} alt="User Profile"  />
                </div>
                <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start ">
                   
                    <h1 className="text-uppercase poppins-font" >
                         i'm daljeet kaur.
                        <span class="animate-charcter">{position} </span>
                    </h1>
                    <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, 
                        I am passionate about building excellent software that improves the lives of those around me.
                    </p>
                    <Link to="/summary" className="summaryBtn">
                        {/* <Typography>More about me</Typography> */}
                        <p><span>More about me</span>
                      </p>
                    </Link>
                </div>

            </div>


        </div>
    )
}

export default Home2