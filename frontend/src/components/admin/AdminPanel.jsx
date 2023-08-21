import React, { useState } from 'react'
import { Button, Typography } from "@mui/material";
import "./Admin.css"
const AdminPanel = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography  variant="h4">
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
        </form>
      </div>
    </div>
  )
}

export default AdminPanel
