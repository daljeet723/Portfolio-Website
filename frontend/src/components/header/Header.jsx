import React from 'react'
import "./Header.css";
import {ReactNavbar} from "overlay-navbar"
import logo from "../../images/logo.png"
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
  return (
   

    
    <ReactNavbar
      logo={logo}
      logoWidth="160px"
      logoHoverColor="#FEE8B0"
      navColor1="white"
      navColor2="hsl(219,48%, 8%)"
      burgerColor="crimson"
      burgerColorHover="#900"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"

      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"

      link1Color="#F86F03"
      link1ColorHover="#FEE8B0"
      link1Size="1.1rem"
      link1Padding="3vmax"

      profileIcon={true}
      ProfileIconElement ={FaUserAlt}
      profileIconColor="#F86F03"
      profileIconColorHover="#FEE8B0"

    />
  )
}

export default Header