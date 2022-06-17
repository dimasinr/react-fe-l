import React from 'react'
import './user.css'
import { NavbarMin } from '../../Components/Navbar/NavbarMin'
import { Container } from 'react-bootstrap'
import { Box, TextField, InputLabel, FormControl, Input, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
// , Lock, ContactPage, Email, CalendarMonth
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function UserProfile() {
  return (
    <div>
        <NavbarMin />
        <Container>
            <div className="d-flex justify-content-center mt-4">
                <div className="cards">
                    <div className="card-body justify-content-center d-flex">
                        <div className="user-img-set">
                        <img className="user-profile-settings mt-4" src="https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f" alt="user-profile" />
                        <br />
                        <span>Yessica Tamara</span>
                        </div>
                        <hr />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                        With a start adornment
                        </InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <TextField
                        id="input-with-icon-textfield"
                        label="TextField"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                    />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                        With a start adornment
                        </InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <TextField
                        id="input-with-icon-textfield"
                        label="TextField"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                    />
                    </Box>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default UserProfile