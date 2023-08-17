import React from 'react'
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>My name is Daljeet. I am Full-Stack Devloper, Powerapps Developer and also has basic knowledge on Azure Cloud.</Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography >Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="" target="black">
          <BsGithub />
        </a>

        <a href="" target="black">
          <BsLinkedin />
        </a>
      </div>

    </div>
  )
}

export default Footer