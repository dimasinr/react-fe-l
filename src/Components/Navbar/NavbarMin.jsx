import './navbar.css'
import { Navbar, Container, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { Search, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Dropdown, ButtonGroup } from 'react-bootstrap'

export const NavbarMin = () => {
const logoImage = require('./../img/logoputih.png');

    return (
      <div className="sticky-nv">
        <div className='navb_bg'>
      <Navbar className="rspnsv mt-1" variant="dark" expand="lg">
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
            <Form className="d-flex d-content-mid">
                <FormControl
                type="search"
                width="160px"
                placeholder="Search treatment..."
                className="me-2"
                style={{ borderRadius: '15px', border: 'none' }}
                aria-label="Search"
                />
                <Button variant="outline-light rounded-pill"> <Search /> </Button>
            </Form>
            <Button variant="outline-light rounded-pill ml-1 m-mt-1"> <ShoppingCart /> </Button>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span className='ml-4 text-white outline-light rounded-lg m-mt-3'>Login</span>
            </Link>
            <Dropdown as={ButtonGroup} className="ml-2 m-mt-1">
            <img className="user-profile-navbar" src="https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f" alt="" />

            <Dropdown.Toggle split variant="standard outline-none" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="/user/profile">User Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      </div>
    )
}
