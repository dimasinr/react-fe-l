import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Search, ShoppingCart } from '@mui/icons-material';
import './navbar.css'
import { useState } from 'react'
// import { Box, TextField } from '@mui/material/';
import { Link } from 'react-router-dom'

function NavbarHome() {

const [Color, setColor] = useState(false)
const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    }else{
      setColor(false)
    }
  }
  
window.addEventListener('scroll', changeColor)

const logoImage = require('./../img/logoputih.png');

  return (
  <div className="bg-mobile">
    <div className={Color ? 'navg navg_bg' : 'navg'}>
      <Navbar className="rspsv" variant="dark" expand="lg">
        <Container className="ml-2">
            <Navbar.Brand href="/">
            <span className='fs-w fw-bold logo'>
              <img src={logoImage} alt="" />
            </span>
            </Navbar.Brand>
            <Navbar.Toggle className='custom-toggler' aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="d-flex me-auto my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                width="160px"
                placeholder="Search treatment..."
                className="me-2"
                style={{ borderRadius: '15px' }}
                aria-label="Search"
                />
                <Button variant="outline-light rounded-pill"> <Search /> </Button>
            </Form>
            <Button variant="outline-light rounded-pill ml-1 md:mt-2"> <ShoppingCart /> </Button>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span className='ml-4 text-white outline-light rounded-lg'>Login</span>
            </Link>            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </div>
  )
}

export default NavbarHome