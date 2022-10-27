import { Link } from 'react-router-dom';
import {Nav, Navbar, Container, Image} from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import DayNightToggle from 'react-day-and-night-toggle'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import { ImExit } from "react-icons/im";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user.displayName}
        </Tooltip>
    );

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
                <Nav className="ms-auto menu me-sm-auto">
                    <Nav.Link className='text-light' as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/courses'>Courses</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/faq'>FAQ</Nav.Link>
                    <Nav.Link className='text-light' as={Link} to='/blog'>Blog</Nav.Link>
                    {
                        user ? <Nav.Link onClick={signOutHandler} className='text-danger fw-bolder'><ImExit></ImExit> Log Out</Nav.Link> :
                        <>
                            <Nav.Link className='text-light' as={Link} to='/register'>Register</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to='/login'>Login</Nav.Link>
                        </>
                    }

                    <div className='d-flex align-items-center'>
                        {
                            user?.uid ? 
                            <Link className='m-auto' to='/profile'>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Image
                                    className="border border-success m-auto me-2"
                                    style={{ height: "45px", width: "45px" }}
                                    roundedCircle
                                    src={user?.photoURL}
                                    ></Image>
                                </OverlayTrigger>
                            </Link> :
                            <FaUserCircle className='display-6 text-warning m-auto'></FaUserCircle>
                            
                        }
                    </div>
                    
                    <Nav.Link className='mx-auto'>
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