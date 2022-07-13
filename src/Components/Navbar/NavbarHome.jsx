import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Search, ShoppingCart } from '@mui/icons-material';
import './navbar.css'
import { useState } from 'react'
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export default function NavbarHome() {
    
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
    
    const { user } = useContext(AuthContext);
    const handleLogout = () => {
      localStorage.clear();
      navigate("/")
    }

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
                <Button variant="outline-light rounded-pill ml-1 mr-2 m-mt-1"> <ShoppingCart /> </Button>
                {user ? <Dropdown as={ButtonGroup} className="ml-2 m-mt-1">
              <span>
                <span className='ml-1 mr-1' style={{ color: "white" }} >{user.username}</span>
              <img className="user-profile-navbar" src="https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f" alt="" />
              </span>
            <Dropdown.Toggle split variant="standard outline-none" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="/user/profile">User Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> : (
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <span className='ml-4 text-white outline-light rounded-lg m-mt-3'>Login</span>
                </Link>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        </div>
      )
}
