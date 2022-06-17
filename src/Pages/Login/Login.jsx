import React, { useState } from 'react'
import axios from 'axios';
import { Box, TextField } from '@mui/material';
// , Input, InputLabel, InputAdornment, FormControl ,{ useState, useEffect } 
import { AccountCircle, Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { NavbarMin } from '../../Components/Navbar/NavbarMin'
import './login.css'

function Login() {
    const emblem = require('./../../Components/img/emblem-hijau.png');

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        console.log({ email, password })
        axios.get('http://localhost:3004/users',{
            email: email,
            password: password
        })
        .then(result=>{
            console.log(result.data)
            alert('success')
            localStorage.setItem('token', result.data.token)
            navigate('/')
        })
        .catch(error=>{
            alert('error login')
            console.log(error)
        })
    }

return (
    <div>
        <NavbarMin />
        <div className='header-login'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320"><path fill="#A6CFCA" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,80C320,85,400,139,480,181.3C560,224,640,256,720,266.7C800,277,880,267,960,256C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </div>

        <div className="row login-between">
            <div className="col-md-4">
            <div>
            <img className="emblem" src={emblem} alt="" />
            </div>                
            </div>
            
            <div className="col-md-4">
            <div className="cards justify-content-center form-log">
           <div className='card-body'>
           <span className='mt-4' style={{ display: 'flex'}}>
                <h4>Login</h4>
            </span>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-2 mt-2">
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                id="input-with-sx" 
                label="Email" 
                fullWidth variant="standard"
                value={email}
                onChange={handleEmail} 
            />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField  
                type="password" 
                id="input-with-sx" 
                label="Password" 
                hiddenLabel 
                fullWidth 
                variant="standard" 
                value={password}
                onChange={handlePassword} 
                />
            </Box>
            <div className='justify-content-end' style={{ display: 'flex' }}>
            <button onClick={handleApi} className='login-btn mt-4'>Login</button>
            </div>
            <div className='justify-content-start' style={{ display: 'flex', marginTop: '10px' }}>
                <span className='text-muted text-sm'>don't have an account?</span>
                <Link style={{ marginLeft: '5px', textDecoration: 'none' }} to="/register">register</Link>
            </div>
           </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login