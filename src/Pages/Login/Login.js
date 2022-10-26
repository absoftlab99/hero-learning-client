import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const {signInUser, user, setUser} = useContext(AuthContext);

    const signInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user)
            setError('');
            console.log(user);
            console.log('login successfully');
            form.reset();
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        })
    }

    return (
        <div className='w-25 mx-auto border border-success p-4 rounded mt-5 text-start'>
            <Form onSubmit={signInHandler}>
            <h5>Login Form</h5>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='border-success border-opacity-50' name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='border-success border-opacity-50' name='password' type="password" placeholder="Password" />
            </Form.Group>
            {
                error ?
                <p className='alert alert-danger'>{error}</p> :
                ''
            }
            {
                !error && user ? <p className='alert alert-success'>Login Successfully</p> :
                ''
            }
            <Button className='w-100 mb-3' variant="outline-success" type="submit">
                Login
            </Button><br></br>
        </Form>
        <div className='text-center'><small>New to Hero Learning? <Link to='/register'>Create Account</Link></small></div>
        <ButtonGroup vertical className='w-100 mt-2'>
            <Button variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
        </ButtonGroup>
        </div>
    );
};

export default Login;