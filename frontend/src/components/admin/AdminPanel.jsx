import React, { useState, useEffect } from 'react'
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../actions/user"
import "./Admin.css"
import { useAlert } from 'react-alert';


const AdminPanel = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const {message, error} = useSelector(state =>state.login )

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState({});
  const [about, setAbout] = useState({
    name: "",
    title: "",
    subtitle: "",
    description: "",
    quote: ""

  });

  const handleAboutImage = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = (e) => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
      }
    }
  }
  const handleImages = (e, idx) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (idx === 1) {
          // if image1 exists already, it will replace prev and add new one
          setSkills({ ...skills, image1: Reader.result });
        }
        if (idx === 2) {
          setSkills({ ...skills, image2: Reader.result });
        }
        if (idx === 3) {
          setSkills({ ...skills, image3: Reader.result });
        }
        if (idx === 4) {
          setSkills({ ...skills, image4: Reader.result });
        }
        if (idx === 5) {
          setSkills({ ...skills, image5: Reader.result });
        }
        if (idx === 6) {
          setSkills({ ...skills, image6: Reader.result });
        }
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const logoutHandler = (e) => {
  dispatch(logoutUser());
   }

   useEffect(()=>{
    if(error){
        alert.error(error);
        dispatch({type:"CLEAR_ERRORS"});
    }
    if(message){
        alert.success(message);
        dispatch({type:"CLEAR_MESSAGE"});
    }
},[alert, error, message,dispatch]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        <form onSubmit={onSubmit}>
          <input type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='adminPanelInputs'>
          </input>

          <input type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='adminPanelInputs'>
          </input>

          <input type="text"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='adminPanelInputs'>
          </input>


          <div className="adminPanelSkill">
            <div>
              <Typography>SKILL 1</Typography>
              <input className='adminPanelFileUpload'
                type="file"
                onChange={(e) => handleImages(e, 1)}
                accept='image/*'>
              </input>
            </div>

            <div>
              <Typography>SKILL 2</Typography>
              <input className='adminPanelFileUpload'
                type="file"
                onChange={(e) => handleImages(e, 2)}
                accept='image/*'>
              </input>
            </div>

            <div>
              <Typography>SKILL 3</Typography>
              <input className='adminPanelFileUpload'
                type="file"
                onChange={(e) => handleImages(e, 3)}
                accept='image/*'>
              </input>
            </div>

            <div>
              <Typography>SKILL 4</Typography>
              <input className='adminPanelFileUpload'
                type="file"
                onChange={(e) => handleImages(e, 4)}
                accept='image/*'>
              </input>
            </div>

            <div>
              <Typography>SKILL 5</Typography>
              <input className='adminPanelFileUpload'
                type="file"
                onChange={(e) => handleImages(e, 5)}
                accept='image/*'>
              </input>
            </div>

            <div>
              <Typography>SKILL 6</Typography>
              <input className='adminPanelFileUpload'
                type="file"
                onChange={(e) => handleImages(e, 6)}
                accept='image/*'>
              </input>
            </div>
          </div>

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                placeholder='Name'
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className='adminPanelInputs'>
              </input>

              <input
                type="text"
                placeholder='Title'
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                className='adminPanelInputs'>
              </input>

              <input
                type="text"
                placeholder='Subtitle'
                value={about.subtitle}
                onChange={(e) => setAbout({ ...about, subtitle: e.target.value })}
                className='adminPanelInputs'>
              </input>

              <input
                type="text"
                placeholder='Description'
                value={about.description}
                onChange={(e) => setAbout({ ...about, description: e.target.value })}
                className='adminPanelInputs'>
              </input>

              <input
                type="text"
                placeholder='Quote'
                value={about.quote}
                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                className='adminPanelInputs'>
              </input>

              <input
                type="file"
                onChange={handleAboutImage}
                className='adminPanelFileUpload'
                placeholder='Choose Avatar'
                accept='image/*'></input>

            </fieldset>
          </div>

          <Link to="/admin/timeline">
            TIMELINE <MdTimeline />
          </Link>
          <Link to="admin/project">
            PROJECTS <AiOutlineProject />
          </Link>

          <Button type="submit" variant="contained">
            Update
          </Button>
        </form>

        <Button
          variant='contained'
          color="error"
          style={{ display: "block", margin: "4vmax auto" }}
          onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default AdminPanel
