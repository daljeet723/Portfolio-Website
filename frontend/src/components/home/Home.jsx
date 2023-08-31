import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Home.css"
import * as THREE from "three";
import { MouseOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import TimeLine from "../timeline/TimeLine"



import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";

import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs
} from "react-icons/si";


const Home = ({timelines, skills}) => {

  // THREE JS 3D effect, follow in sequence 
  // 1st set scene
  // 2nd set camera as perspective type here
  // 3rd use canvas in camera
  // 4th render scene and camera

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    // example to show how camera moves according to cursor 
    //const lightHelper = new THREE.PointLightHelper(pointLight);


    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;
    //scene.add(lightHelper)

    //wherever mouse cursor moves animates will be done accordingly
    //mouse cursor Left, right, up, down
    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientX > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

    })

    //Recursion function to rotate again and again
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      venus.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();

    return  window.addEventListener("scroll",() =>{
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeSkillsBox");
      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
      }

    });

  }, []);
  return (
    <div className="home">
      {/* using canvas we will create 3d effect by using three js */}
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>D</p>
          <p>A</p>
          <p>L</p>
          <p>J</p>
          <p>E</p>
          <p>E</p>
          <p>T</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">DEVOPS</Typography>
          <Typography variant="h2">AZURE CLOUD</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography> 
        <TimeLine timelines={timelines} />
 
       
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        {/* div homeCubeSkills that will represnt all our skills */}
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1"/>
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
          <img src={skills.image2.url} alt="Face2"/>
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
          <img src={skills.image3.url} alt="Face3"/>
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
          <img src={skills.image4.url} alt="Face4"/>
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
          <img src={skills.image5.url} alt="Face5"/>
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
          <img src={skills.image6.url} alt="Face6"/>
          </div>
        </div>
        <div className="homeCubeShadow"></div>
        {/* div to show skil icons on left side */}
        <div className="homeSkillsBox" id ="homeSkillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>



    </div>
  )
}

export default Home