import { useContext } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password, name, photo)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error =>{
            console.error(error);
        })
    }
    
    return (
    <div className='w-50 mx-auto border border-success p-4 rounded text-start mt-5'>
        <Form onSubmit={handleRegister}>
            <h5>Register Form</h5>
            <hr></hr>
            <div className="d-flex">
                <Form.Group className="mb-3 w-50 me-2" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control  className='border-success border-opacity-50' name='name' type="text" placeholder="Enter full name" required/>
                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control  className='border-success border-opacity-50' name='photo' type="text" placeholder="photo" required/>
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  className='border-success border-opacity-50' name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  className='border-success border-opacity-50' name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            {/* {
                error?
                <p className='alert alert-danger'>{error}</p> :
                ''
            } */}
            <Button variant="outline-success" type="submit">
                Sign Up
            </Button><br></br>
        </Form>
        
        <small>Already have an account? <Link to='/login'>Please Login</Link></small>
        <ButtonGroup vertical className='w-100 mt-2'>
            <Button variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
        </ButtonGroup>

        </div>
    );
};

export default Register;