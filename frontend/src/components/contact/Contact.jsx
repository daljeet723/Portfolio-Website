import React, { useEffect, useState } from 'react'
import "./Contact.css"
import { Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { contactUser } from '../../actions/user'


const Contact = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const {loading, error, message:alertMessage} = useSelector(state =>state.updateUser);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactFormHandler = (e) => {
        e.preventDefault();
        dispatch(contactUser(name, email,message));
    };

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch({type:"CLEAR_ERRORS"})
        }
        if(alertMessage){
            alert.success(alertMessage);
            dispatch({type:"CLEAR_MESSAGE"});
        }
    },[alert, error, alertMessage,dispatch])


    return (
        <div className='contact'>
            <div className="contactRightBar"></div>
            <div className="contactContainer">

                <form className="contactContainerForm"
                    onSubmit={contactFormHandler}>
                    <Typography variant="h4"> Contact Us</Typography>

                    <input type="text"
                        placeholder='Name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />


                    <input type="email"
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea placeholder='Message' cols="30" rows="30"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />


                    <Button variant="contained" type="submit" disabled={loading}>Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact