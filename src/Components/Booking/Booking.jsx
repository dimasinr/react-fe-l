import React from 'react'
import { NavbarMin } from '../../Components/Navbar/NavbarMin'
import { Container } from 'react-bootstrap'
// import { Box, TextField, InputLabel, FormControl, Input, InputAdornment } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';
// , Lock, ContactPage, Email, CalendarMonth
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function Booking() {
  return (
    <div>
        <NavbarMin />
        <Container>
            <div className="d-flex justify-content-center mt-4">
                <div className="cards">
                    <div className="card-body">
                        <div className="justify-content-center d-flex">
                        <h2>Waiting For Approval</h2>
                        </div>
                        <br />
                        <span>Eyelash Extension</span>
                        <hr />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
           
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Booking