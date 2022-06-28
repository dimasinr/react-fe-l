import React from 'react'
import './user.css'
import { Container } from 'react-bootstrap'
import { NavbarAll } from './../../Components/Navbar/NavbarAll'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function UserProfile() {

const { user } = useContext(AuthContext);


  return (
    <div>
      <NavbarAll />
      <Container>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-md-8 mt-4">
                <div className="cards">
                {user &&  <div className="card-body">
                  <div className="card-title">
                    <span>
                      <img className='img-profile' src='https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f' alt="img-user" />
                    </span>
                    <span className="mt-4">
                      {user.username}
                    </span>
                  </div>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: '100%',
                    }}
                  >
                    <TextField fullWidth label={user.firstName} id="fullWidth" />
                  </Box>
                  </div>}
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UserProfile