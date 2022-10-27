import { Link } from 'react-router-dom';
import {Nav, Navbar, Container, Button, Image} from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import DayNightToggle from 'react-day-and-night-toggle'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const signOutHandler = () =>{
        logOut();
    }
    console.log(user);
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
                    {
                        user ? <Button onClick={signOutHandler} variant='danger'>Log Out</Button> :
                        <>
                            <Nav.Link className='text-light' as={Link} to='/register'>Register</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to='/login'>Login</Nav.Link>
                        </>
                    }

                    <div className='d-flex align-items-center'>
                        {
                            user?.uid ? 
                            <Link to='/profile'><Image data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom" className='ps-3' roundedCircle style={{height:45}} src={user?.photoURL}></Image></Link> :
                            <FaUserCircle className='display-6 text-warning'></FaUserCircle>
                            
                        }
                    </div>
                    
                    <Nav.Link>
                    <DayNightToggle
                        onChange={() => setIsDarkMode(!isDarkMode)}
                        checked={isDarkMode}
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse> 
            </Container>  
        </Navbar>
    );
};

export default Header;