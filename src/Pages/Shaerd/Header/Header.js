import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import DayNightToggle from 'react-day-and-night-toggle'
import { useState } from 'react';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <Navbar className='bg-success sticky fixed-top' expand="md">  
            <Container>  
            <Navbar.Brand className='text-light fw-bolder' as={Link} to="/"><img style={{height:40}} src={logo} alt='' /> Hero Learning</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="ms-auto menu">
                    <Nav.Link className='text-light' as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/courses'>Courses</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/faq'>FAQ</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/blog'>Blog</Nav.Link>
                    <Nav.Link>
                    <DayNightToggle
                        onChange={() => setIsDarkMode(!isDarkMode)}
                        checked={isDarkMode}
                        />
                    </Nav.Link>
                </Nav>
                {/* <div className='d-flex'>
                    {
                        user?.uid ? 
                        <Image className='ps-3' roundedCircle style={{height:45}} src={user?.photoURL}></Image> :
                        <Image className='ps-3' roundedCircle style={{height:45}} src={avater}></Image>
                        
                    }
                    <div className="ps-2 text-light">
                        <p className='mb-0'>{user?.displayName}</p>
                        <small>{user?.email}</small>
                    </div>
                </div> */}
            </Navbar.Collapse> 
            </Container>  
        </Navbar>
    );
};

export default Header;