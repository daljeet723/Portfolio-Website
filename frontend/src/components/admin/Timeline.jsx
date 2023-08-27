import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addTimeline, deleteTimeline, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Timeline = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { message, error, loading } = useSelector(state => state.updateUser);
    const { message: loginMessage } = useSelector((state) => state.login);
    
    const{user} = useSelector(state => state.user);
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        //wait untill timeline is added to "await",
        //when addTimeline is completed, only after then getUser will be called
        await dispatch(addTimeline(title, description, date));
        //to update data immediately after adding new timeline call getUser()
        dispatch(getUser());
    }

    const deleteHandler = async (id) => {
        await dispatch(deleteTimeline(id));
        dispatch(getUser());
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "CLEAR_MESSAGE" })
        }
        if (loginMessage) {
            alert.success(loginMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
          }
    }, [alert, error, message, dispatch,loginMessage])

    return (
        <div className="adminPanel">
            <div className="adminPanelContainer">
                <Typography variant="h4">
                    <p>T</p>
                    <p>I</p>
                    <p>M</p>
                    <p>E</p>
                    <p style={{ marginRight: "1vmax" }}>L</p>

                    <p>I</p>
                    <p>N</p>
                    <p>E</p>
                </Typography>
                <form onSubmit={submitHandler}>
                    <input type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='adminPanelInputs'>
                    </input>

                    <input type="text"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='adminPanelInputs'>
                    </input>

                    <input type="date"
                        placeholder='Date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className='adminPanelInputs'>
                    </input>

                    {/* account path given in App.js  */}
                    <Link to="/account">
                        Back<MdKeyboardBackspace />
                    </Link>

                    <Button type="submit" variant="contained" disabled={loading}>
                        Add Timeline
                    </Button>
                </form>

                <div className="adminPanelYoutubeVideos">
          {user &&
            user.timeline &&
            user.timeline.map((item) => (
              <div className="youtubeCard" key={item._id}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.date.toString().split("T")[0]}
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>

            </div>
        </div>
    );
}

export default Timeline